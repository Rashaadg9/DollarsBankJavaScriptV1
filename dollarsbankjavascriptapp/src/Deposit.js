import logo from './logo.svg';
import './App.css';
import axios from "axios";

import React, { useState, useEffect } from "react";

export const DepositForm = (props) => {
  const [user, setUser] = useState([]);
  const [recent, setRecent] = useState([]);
  const [deposit, setDeposit] = useState(0.0);

  useEffect(() => {
    const API_URL = "http://localhost:8080/user/" + localStorage.getItem("id");
    const API_URL2 = "http://localhost:8080/recent/" + localStorage.getItem("id");

    axios.get(API_URL).then((res) => {
      const result1 = res.data;
      setUser(result1);
    });

    axios.get(API_URL2).then((res) => {
        const result2 = res.data;
        setRecent(result2);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const update = parseInt(deposit) + parseInt(user.cash);
    const API_URL = "http://localhost:8080/user/update";
    const API_URL2 = "http://localhost:8080/recent/update";

    axios.patch(API_URL, {"userId": user.userId, "firstName": user.firstName, "lastName": user.lastName, "contact": user.contact, "dob": user.dob, "username": user.username, "password": user.password, "cash": update}, {headers: {"Content-Type": "application/json"}} )
    .then((res) => {
      const result3 = res.data;
      setUser(result3);
    });

    axios.patch(API_URL2, {"userId": user.userId, "cash": deposit, "type": "Deposit" }, {headers: {"Content-Type": "application/json"}} )
    .then((res) => {
      const result4 = res.data;
      setRecent(result4);
    });

    console.log(user);
    console.log(recent);
  };

  return (
    <div className="Deposit">
      <h1>Current Balance: ${user.cash}</h1>

      <form onSubmit={handleSubmit} action="/">
        <label>Enter Amount to deposit:</label>
        <input type="number" id="deposit" name="deposit" min="5" onChange={(event) => setDeposit(event.target.value)} value={deposit}></input>
        
        <br></br>

        <input type="submit" value="Deposit" />
      </form>

    </div>
    
  );
};

export default DepositForm;
