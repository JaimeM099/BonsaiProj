import React, {useState} from "react";
import './Login.css';
import axios from 'axios'
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  async function submit(e){
    e.preventDefault();

    try {
      await axios.post("http://localhost:3000/login", {
        email, password
      })
    }

    catch (e){
      console.log(e);
    }
  }

  return (
    <div className="mainContainer">
      <div className="login">
        <h1>Login page</h1>
      </div>

      <br />

      <div className="inputContainer">
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
          value={password}
          placeholder="Enter Password"
          onChange={(ev) => setPassword(ev.target.value)}
        />
        <label className="errorLabel">{error}</label>
      </div>

      <br />

      <div className="buttonContainer">
        <input className="inputButton" type="button" onclick={submit} value={'Log in'} />
      </div>
      
      <br />

      <div>
        <p>Dont have an account? <Link to="/signup">Sign up here</Link></p>
      </div>
    </div>
  );
};

export default Login;
