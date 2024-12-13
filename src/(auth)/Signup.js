import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './Signup.css';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    //The submit function which handles registration
    const handleSignup = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:5000/api/auth/register", {
                email,
                password
            });

            if (response.status === 201) {
                alert('Signup was succesful!');

                //will store token in localstorage
                const { token } = response.data;
                localStorage.setItem('authToken', token);

                //Will redirect to profile page
                navigate('/profile'); //will redirect to profile page after succesful signup
            }
        } catch (error) {
            //will check if the error has a response from the server
            if (error.response) {
                //will display the specific error message from the server
                setError(error.response.data.error || 'Signup failed. PLease try again.');
            } else {
                //handle errors with no server response
                setError("Signup failed. Server not responding");
            }
            console.error("Signup error:", error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSignup}>
                <div className="signup">
                    <h1>Signup page</h1>
                </div>
            
                <br/>

                <div>
                    <input
                        type="email"
                        value={email}
                        placeholder="Enter Email"
                        onChange={(ev) => setEmail(ev.target.value)}
                    />
                    <label className="errorLabel">{error}</label>
                </div>

                <br />

                <div className="inputContainer">
                    <input
                        type="password"
                        value={password}
                        placeholder="Enter Password"
                        onChange={(ev) => setPassword(ev.target.value)}
                    />
                    <label className="errorLabel">{error}</label>
                </div>

                <br />

                <div className="buttonContainer">
                    <button className="inputButton" type="submit">Sign Up</button>
                </div>
            </form>
        </div>
    );
};

export default Signup;