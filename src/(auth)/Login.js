import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate()

  const onButtonClick = () => {
    //Will update this in a bit
  }
  return (
    <div className="mainContainer">
      <div className="login">
        <h1>Login page</h1>
      </div>

      <br />

      <div className="inputContainer">
        <input
          value={username}
          placeholder="Enter Username"
          onChange={(ev) => setUsername(ev.target.value)}
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
        <input className="inputButton" type="button" onclick={onButtonClick} value={'Log in'} />
      </div>
    </div>
  );
};

export default Login;
