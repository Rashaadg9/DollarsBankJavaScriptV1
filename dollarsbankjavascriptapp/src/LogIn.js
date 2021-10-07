import logo from './logo.svg';
import './App.css';
import axios from "axios";

import React, { useState } from "react";

export const LoginForm = (props) => {
  // const [state, setState] = useState({ username: "", password: "" });
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username);
    console.log(password);

    const API_URL = "http://localhost:8080/user/login";
    axios.post(API_URL, {"username": username, "password": password}, {headers: {"Content-Type": "application/json"}} ).then((res) => {
      const result = res.data;
      setUser(result);
    });

    console.log(user);
    // fetch("http://localhost:8080/user/login", {
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ username: username, password: password }),
    // })
    //   .then((response) => response.json())

    // localStorage.setItem("username", username);
    // localStorage.setItem("password", password);
    // setUsername("");
    // setPassword("");
    // localStorage.setItem("token", jwt);
    // localStorage.setItem("username", username);
    // e.preventDefault();

    // const API_URL = "http://localhost:8080/users";

    // fetch(API_URL)
    //   .then((response) => response.json())
    //   .then((data) => setUsers(data));

    // const user = users.filter(
    //   (user) => user.username.toLowerCase() === localStorage.getItem("username")
    // );
    // const uId = Object.assign({}, user[0]).id;
    // localStorage.setItem("userId", uId);
    // console.log(uId);
  };

  return (
    <div className="Login">
      <h1>Hello User</h1>

      <form onSubmit={handleSubmit} action="/">
        <label>Username:</label>
        <input type="text" id="username" name="username" onChange={(event) => setUsername(event.target.value)} value={username}></input>

        <br></br>

        <label>Password:</label>
        <input type="text" id="password" name="password" onChange={(e) => setPassword(e.target.value)} value={password}></input>
        
        <br></br>
        <input type="submit" value="Login" />
      </form>

      <div>
        <h3>Username: {username}</h3>
        <h3>Password: {password}</h3>

        <h4>{user.userId} {user.cash}</h4>
      </div>

    </div>
    
  );
};

export default LoginForm;
