import logo from './logo.svg';
import './App.css';
import axios from "axios";

import React, { useState, useEffect } from "react";

export default function CreateAccount() {
  const [user, setUser] = useState(
      {
          "firstName": "", 
          "lastName": "", 
          "contact": "", 
          "dob": "", 
          "username": "", 
          "password": "", 
          "cash": ""
      });
  const [error, setError] = useState("");

    useEffect(() => {
      const API_URL = "http://localhost:8080/user/check/" + user.username;
  
      axios.get(API_URL).then((res) => {
        const result1 = res.data;
        console.log(result1);
        if(result1 > 0)
        {
          setError("This username is not avaliable!");
        }
        else
        {
          setError("");
        }
      });
  
    }, [user.username]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const API_URL = "http://localhost:8080/user/new";
    axios.post(API_URL, {"firstName": user.firstName, "lastName": user.lastName, "contact": user.contact, "dob": user.dob, "username": user.username, "password": user.password, "cash": user.cash}, {headers: {"Content-Type": "application/json"}} )
    .then((res) => {
      const result = res.data;
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

  const handleChange = (e) => {
    const update = {
      [e.target.name]: e.target.value,
    };
    const newState = { ...user, ...update };
    setUser(newState);

  };
  
  return(
    <form onSubmit={handleSubmit} action="/">
          <fieldset>
            <legend>New Account Form</legend>

            <div className="mb-3">

            <label htmlFor="firstName" className="form-label">First Name: </label>
            <input
              className="form-control"
              type="text"
              id="firstName"
              name="firstName"
              onChange={handleChange}
              value={user.firstName}
              placeholder="John"
              required="required"
            ></input>

            </div>

            <div className="mb-3">

            <label htmlFor="lastName" className="form-label">Last Name: </label>
            <input
              className="form-control"
              type="text"
              id="lastName"
              name="lastName"
              onChange={handleChange}
              value={user.lastName}
              placeholder="Doe"
              required="required"
            ></input>

            </div>

            <div className="mb-3">

            <label htmlFor="contact" className="form-label">Contact: </label>
            <input
              className="form-control"
              type="text"
              id="contact"
              name="contact"
              onChange={handleChange}
              value={user.contact}
              placeholder="000-000-0000"
              required="required"
              pattern="\d{3}-\d{3}-\d{4}"
            ></input>

            </div>

            <div className="mb-3">

            <label htmlFor="dob" className="form-label">DOB: </label>
            <input
              className="form-control"
              type="text"
              id="dob"
              name="dob"
              onChange={handleChange}
              value={user.dob}
              placeholder="01/01/0001"
              required="required"
              pattern="\d{2}\/\d{2}\/\d{4}"
            ></input>

            </div>

            <div className="mb-3">

            <label htmlFor="username" className="form-label">Username: </label>
            <input
              className="form-control"
              type="text"
              id="username"
              name="username"
              onChange={handleChange}
              value={user.username}
              required="required"
            ></input>
            <p style={{ color: 'red' }} >{error}</p>
            </div>

            <div className="mb-3">

            <label htmlFor="password" className="form-label">Password: </label>
            <input
              className="form-control"
              type="text"
              id="password"
              name="password"
              onChange={handleChange}
              value={user.password.trim()}
              required="required"
            ></input>

            </div>

            <div className="mb-3">

            <label htmlFor="cash" className="form-label">Inital Deposit: </label>
            <input
              className="form-control"
              type="number"
              id="cash"
              name="cash"
              onChange={handleChange}
              value={user.cash}
              placeholder="(min of 5.00)"
              min="5"
            ></input>

            </div>
            
            <br />

            <input type="submit" value="Create" disabled={error?"true":""} />
          </fieldset>
        </form>
    )
}
