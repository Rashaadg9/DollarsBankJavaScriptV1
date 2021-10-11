import logo from './logo.svg';
import './App.css';
import axios from "axios";

import React, { useState, useEffect } from "react";

export default function Account() {
    if( (localStorage.getItem("id") == -1) || (localStorage.getItem("id") == undefined ))
    {
        let url = "/";
        window.location.href = url;
    }
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
          <h1>Account Information</h1>

          <br></br>

          <table>
              <tbody>
                  <tr>
                      <td>First Name: {user.firstName}</td>
                  </tr>
                  <tr>
                      <td>Last Name: {user.lastName}</td>
                  </tr>
                  <tr>
                      <td>Contact: {user.contact}</td>
                  </tr>
                  <tr>
                      <td>DOB: {user.dob}</td>
                  </tr>
                  <tr>
                      <td>Username: {user.username}</td>
                  </tr>
                  <tr>
                      <td>Current Balance: {user.cash}</td>
                  </tr>
              </tbody>
          </table>
      </div>
  )
};
