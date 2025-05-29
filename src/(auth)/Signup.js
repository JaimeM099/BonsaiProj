import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './Signup.css';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    //The submit function which handles registration
    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/api/auth/register", {
                name,
                email,
                password
                // method: "POST",
                // headers: { "Content-Type": "application/json" },
                // body: JSON.stringify({ name, email, password }),
            });

            // const data = response.data; // Axios handles JSON parsing automatically
            // const data = await response.json();

            localStorage.setItem('authToken', response.data.token);
            localStorage.setItem("user", JSON.stringify(response.data.user));
            navigate('/profile'); //redirect on succesful signup
        } catch (error) {
            if (error.response && error.response.data && error.response.data.error) {
                setError(error.response.data.error);
            } else {
                setError('Something went wrong. Please try again')
            }
        }
        //     if (response.ok) {
        //         localStorage.setItem('token', data.token); //store token securely
        //         //Will redirect to profile page
        //         navigate('/profile'); //will redirect to profile page after succesful signup
        //     } else {
        //         setError(data.error);
        //     }
        // } catch (error) {
        //     setError ('Something went wrong. Please try again');
        // }
    };

    return (
        <div>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <form onSubmit={handleSignup}>
                <div className="signup">
                    <h1>Signup page</h1>
                </div>
            
                <br/>

                <div className="inputContainer">
                    <input 
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)} 
                        required
                    />
                </div>

                <br/>

                <div className="inputContainer">
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