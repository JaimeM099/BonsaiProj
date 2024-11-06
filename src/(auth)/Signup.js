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
            const response = await axios.post("link here", {
                email,
                password
            });

            if (response.status === 201) {
            alert('Signup was succesful!');
            navigate('/login'); //will redirect to login page after succesful signup
            }
        } catch (error) {
            setError('Signup failed. please try again.');
            console.error(error);
        }
    };

    return (
        <div>
            <div className="signup">
                <h1>Signup page</h1>
            </div>
            
            <br/>

            <div>
                <input
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
                <button className="inputButton" onClick={handleSignup}>Sign Up</button>
            </div>
        </div>
    );
};

export default Signup;