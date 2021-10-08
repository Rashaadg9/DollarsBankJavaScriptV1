import React, { useState } from "react";
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

export const NavigationBar = () => (
  // const userId = localStorage.getItem("userId");
  // const [id, setId] = useState(userId);

  // var s = `/users/${id}`;

  // setId(userId);

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
            <Nav.Link href="/login">Login</Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href="/newAccount">Create Account</Nav.Link>
          </Nav.Item>

        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
);
