import React, { useState, useEffect } from "react";
import { Nav, Navbar, Form, FormControl } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  .navbar {
    background-color: #03a9f4;
  }
  a,
  .navbar-nav,
  .navbar-light .nav-link {
    color: black;
    &:hover {
      color: white;
    }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: black;
    &:hover {
      color: white;
    }
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }
`;


export default function NavigationBar() {
  //const userId = localStorage.getItem("userId");
  const [logStatus, setLogStatus] = useState("LogIn");
  const [element, setElement] = useState("");

  // var s = `/users/${id}`;

  // setId(userId);
  
  useEffect(() => {
    if (localStorage.getItem("id") > 0)
    {
      setLogStatus("LogOut");
      setElement(
        <Nav.Item>
          <Nav.Link href="/account">MyInfo</Nav.Link>
        </Nav.Item>
      );
    }
    else
    {
      setLogStatus("LogIn");
      setElement(
        <Nav.Item>
        <Nav.Link href="/newAccount">Create Account</Nav.Link>
      </Nav.Item>
      )
    }
  }, []);

return(
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/userHome">Home</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      {/* <Form className="form-center">
        <FormControl type="text" placeholder="Search Name" className="" />
      </Form> */}
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item>
            <Nav.Link href="/login">{logStatus}</Nav.Link>
          </Nav.Item>

          {element}

        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
)
    };
