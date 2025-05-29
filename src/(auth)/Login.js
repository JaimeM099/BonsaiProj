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
        // method: "POST",
        // headers: { "Content-Type": "application/json" },
        // body: JSON.stringify({ email, password }),
      });

      const data = await response.data;
      localStorage.setItem('authToken', data.token); //Consistent key
      localStorage.setItem("user", JSON.stringify(data.user));
      navigate("/profile"); //Will go to profile page
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        setError(error.response.data.message);
      } else {
        setError("Something went wrong. Please try again.");
      }
    }

    //   if (response.ok) {
    //     localStorage.setItem('token', data.token); //Will store token securely
    //     navigate("/profile"); //Wil redirect to prfile
    //   } else {
    //     setError(data.error);
    //   }
    // } catch (error) {
    //   setError("Something went wrong. Please try again")
    // }
  };

  return (
    <div className="mainContainer">
      <div className="login">
        <h1>Sign-in page</h1>
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
