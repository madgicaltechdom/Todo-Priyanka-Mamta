
import Google from "../img/google.png";
import axios from "axios";
import { useState } from "react";
// import { userData } from "../components/userData";

const Login = () => {

  const [data, setData] = useState([])
  const [email, setEmail] = useState('');
  

  const google = () => {
    window.open("http://localhost:8000/auth/google", "_self");
  };

  return (
    <div className="login">
      <h1 className="loginTitle">Choose a Login Method</h1>
      <div className="wrapper">
        <div className="left">
          <div className="loginButton google" onClick={google}>
            <img src={Google} alt="" className="icon" />
            Google
          </div>
        </div>
        <div className="center">
          <div className="line" />
          <div className="or">OR</div>
        </div>
        <div className="right">
          <input type="text" placeholder="Username" />
          <input type="text" placeholder="Password" />
          <button className="submit">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;



