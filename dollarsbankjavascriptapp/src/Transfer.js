import logo from './logo.svg';
import './App.css';
import axios from "axios";

import React, { useState, useEffect } from "react";

export const TransferForm = (props) => {
  const [fromCash, setFromCash] = useState(-0.0);
  const [userFrom, setUserFrom] = useState([]);
  const [userTo, setUserTo] = useState("");
  const [userToInfo, setUserToInfo] = useState(0);
  const [transfer, setTransfer] = useState([]);
  const [recentFrom, setRecentFrom] = useState([]);
  const [recentTo, setRecentTo] = useState([]);

  useEffect(() => {
    const API_URL = "http://localhost:8080/user/" + localStorage.getItem("id");
    const API_URL2 = "http://localhost:8080/recent/" + localStorage.getItem("id");

    axios.get(API_URL).then((res) => {
      const result1 = res.data;
      setUserFrom(result1);
    });

    axios.get(API_URL2).then((res) => {
        const result2 = res.data;
        setRecentFrom(result2);
      });
    
  }, []);

  const handleSubmit = (e) => {
    const API_URL = "http://localhost:8080/user/check/" + userTo;
    const API_URL2 = "http://localhost:8080/user/transfer";
    const API_URL3 = "http://localhost:8080/recent/update";
    const API_URL4 = "http://localhost:8080/recent/update/transfer";

    axios.get(API_URL)
    .then((res) => {
      const result3 = res.data;
      setUserToInfo(result3);
      if (result3 == 1)
        {
            axios.patch(API_URL2, {"fromId": userFrom.userId, "fromCash": fromCash, "toUsername": userTo }, {headers: {"Content-Type": "application/json"}} )
    .then((res) => {
      const result4 = res.data;
      setTransfer(result4);
      userFrom.cash = parseInt(userFrom.cash) - fromCash;

    });

    const from = "Transfered to [" + userTo + "]";
    axios.patch(API_URL3, {"userId": userFrom.userId, "cash": fromCash, "type": from }, {headers: {"Content-Type": "application/json"}} )
    .then((res) => {
      const result5 = res.data;
      setRecentFrom(result5);
    });


    const to = "Transfered From [" + userFrom.username + "]";
    axios.patch(API_URL4, {"username": userTo, "cash": fromCash, "type": to }, {headers: {"Content-Type": "application/json"}} )
    .then((res) => {
      const result6 = res.data;
      setRecentTo(result6);
    });
        }
    });


    console.log(userFrom);
    console.log(userToInfo);
    console.log(recentFrom);
    console.log(recentTo);
  };

  return (
    <div className="Deposit">
      <h1>Current Balance: ${userFrom.cash}</h1>

      <form onSubmit={handleSubmit} action="/transfer">
        <label>Enter username to transfer to</label>
        <input type="text" id="userTo" name="userTo" onChange={(event) => setUserTo(event.target.value)} value={userTo}></input>

        <br></br>
        
        <label>Enter Amount to transfer:</label>
        <input type="number" id="fromCash" name="fromCash" max={userFrom.cash} onChange={(event) => setFromCash(event.target.value)} value={fromCash}></input>
        
        <br></br>

        <input type="submit" value="Transfer" />
      </form>

    </div>
    
  );
};

export default TransferForm;
