import React from "react";
import { Button, Container, Form, FormControl, Navbar } from "react-bootstrap";
import "./navbar.css";

const TopNavbar = () => {
  return (
    <div>
      <Navbar expand="lg">
        <Container fluid>
          <Navbar.Brand href="">Medicare</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <div className="options">
              <div className="search-options">
                <Form className="d-flex">
                  <FormControl
                    type="search"
                    placeholder="Search for Products, Brands & Categories"
                    className="me-2"
                    aria-label="Search"
                  />
                </Form>
              </div>
              <div className="login-options">
                <p className="mb-0">Login</p>
                <p className="px-2 mb-0">|</p>
                <p className="mb-0">Signup</p>
              </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default TopNavbar;
