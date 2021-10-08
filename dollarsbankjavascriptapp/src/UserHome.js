import logo from './logo.svg';
import './App.css';
import axios from "axios";

import React, { useState, useEffect } from "react";

export default function UserHome() {
    const [name, setName] = useState(localStorage.getItem("name"));
    const [id, setId] = useState(localStorage.getItem("id"));
    const [user, setUser] = useState([]);

    useEffect(() => {
        const API_URL = "http://localhost:8080/user/" + localStorage.getItem("id");
        axios.get(API_URL).then((res) => {
          const result1 = res.data;
          setUser(result1);
        });
      }, []);
  
  return(
      <div>
          <h1>Hello {name}</h1>

          <h3>Current Balance: ${user.cash}</h3>

          <br></br>

          <table>
              <tbody>
                  <tr>
                      <td><a href="/deposit">Make Deposit</a></td>
                  </tr>
                  <tr>
                      <td>Make Withdrawal</td>
                  </tr>
                  <tr>
                      <td>Transfer Funds</td>
                  </tr>
                  <tr>
                      <td>View 5 Recent Transactions</td>
                  </tr>
              </tbody>
          </table>
      </div>
  )
};
