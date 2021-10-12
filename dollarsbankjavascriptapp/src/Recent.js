import logo from './logo.svg';
import './App.css';
import axios from "axios";

import React, { useState, useEffect } from "react";

export default function Recent() {
    if( (localStorage.getItem("id") == -1) || (localStorage.getItem("id") == undefined ))
    {
        let url = "/";
        window.location.href = url;
    }
    const [id, setId] = useState(localStorage.getItem("id"));
    const [recent, setRecent] = useState([]);

    useEffect(() => {
        const API_URL = "http://localhost:8080/recent/" + localStorage.getItem("id");
        axios.get(API_URL).then((res) => {
          const result1 = res.data;
          setRecent(result1);
        });
      }, []);

      console.log(recent);
  return(
      <div>
          <h1>5 Recent Transactions</h1>

          <br></br>

          <table>
              <tbody>
                  <tr>
                      <td>{recent.r1}</td>
                  </tr>
                  <tr>
                      <td>{recent.r2}</td>
                  </tr>
                  <tr>
                      <td>{recent.r3}</td>
                  </tr>
                  <tr>
                      <td>{recent.r4}</td>
                  </tr>
                  <tr>
                      <td>{recent.r5}</td>
                  </tr>
              </tbody>
          </table>
      </div>
  )
};
