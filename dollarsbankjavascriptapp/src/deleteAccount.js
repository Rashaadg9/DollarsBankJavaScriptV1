import logo from './logo.svg';
import './App.css';
import axios from "axios";

import React, { useState } from "react";

export default function deleteAccount() {

  const handleSubmit = (e) => {
    e.preventDefault();

    const API_URL = "http://localhost:8080/user/delete/" + localStorage.getItem("id");
    axios.delete(API_URL)
    .then((res) => {
      const result = res.data;
    });

    let url = "/login";
    window.location.href = url;
    
  };
  
  return(
    <form onSubmit={handleSubmit} action="/">
          <fieldset>
            <legend>Delete Account</legend>

            <h1 style={{ color: 'red' }} >Warning this action can not be undone!</h1>
            
            <input type="submit" value="Delete My Account!" />
          </fieldset>
        </form>
    )
}
