import logo from './logo.svg';
import './App.css';
import axios from "axios";

import React, { useState, useEffect } from "react";

export const LoginForm = (props) => {
  // const [state, setState] = useState({ username: "", password: "" });
  const [correct, setCorrect] = useState(1);
  const [error, setError] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState([]);
  localStorage.setItem("id", -1);
  localStorage.setItem("name", -1);

  useEffect(() => {
    if ( correct == 0 ) {
      setError("Incorrect Username & Password Combination");
    }
    else
    {
      setError("");
    }

  }, [correct]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username);
    console.log(password);

    const API_URL = "http://localhost:8080/user/login";
    axios.post(API_URL, {"username": username, "password": password}, {headers: {"Content-Type": "application/json"}} ).then((res) => {
      const result = res.data;
      setUser(result);
     
      localStorage.setItem("id", result.userId);
      localStorage.setItem("name", result.firstName);
    });

    console.log(user);
    console.log(localStorage.getItem("id"));
    console.log(localStorage.getItem("name"));

    if ( (localStorage.getItem("id") === 'undefined') ) {
      setCorrect(0);
    }
    else
    {
      setCorrect(1);
    }

    if(localStorage.getItem("id") > 0)
  {
    let url = "/userHome";
    window.location.href = url;
  }
 
  };

  return (
    <div className="Login">
      <h1>Welcome Back!</h1>
      <h4>Enter LogIn Credentials Below</h4>

      <br></br>

      <form onSubmit={handleSubmit} action="/">
        <label>Username:</label>
        <input type="text" id="username" name="username" onChange={(event) => setUsername(event.target.value)} value={username}></input>

        <br></br>

        <label>Password:</label>
        <input type="text" id="password" name="password" onChange={(e) => setPassword(e.target.value)} value={password}></input>
        
        <br></br>
        <input type="submit" value="Login" />
      </form>

      <h5 style={{ color: 'red' }} >{error}</h5>

    </div>
    
  );
};

export default LoginForm;
