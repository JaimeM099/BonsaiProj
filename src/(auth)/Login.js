import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import './Login.css';
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password
      });

      if (response.status === 200) {
        alert('Login was succesful!');

        //will store token in localStorage
        const { token, user } = response.data;
        localStorage.setItem('authToken', token);
        localStorage.setItem('user', JSON.stringify(user));

        //Will redirect user to profile
        navigate('/profile');
      }
    } catch (error) {
      if (error.response) {
        setError(error.response.data.error || 'Login failed. Please try again.');
      } else {
        setError('Login failed. Server not responding');
      }
      console.error("Login error:", error);
    }
  };

  return (
    <div className="mainContainer">
      <div className="login">
        <h1>Login page</h1>
      </div>

      <br />

      <form onSubmit={handleLogin}>
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
          <button className="inputButton" type="submit">Log in</button>
        </div>
      </form>
      
      <br />

      <div>
        <p>Dont have an account? <Link to="/signup">Sign up here</Link></p>
      </div>
    </div>
  );
};

export default Login;
