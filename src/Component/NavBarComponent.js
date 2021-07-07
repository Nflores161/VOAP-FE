import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Button, Form, FormControl } from "react-bootstrap";

export default class NavBarComponent extends Component {

  render() {
    return (
      <div>
        <Navbar className="nav-styles" variant="light">
          <Nav className="mr-auto" id="header-tab">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/explore">
              Explore
            </Nav.Link>
            <Nav.Link as={Link} to="/myprofile">
              My Profile
            </Nav.Link>
          </Nav>
          <Form inline id="navSearchBar">
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-dark">Search</Button>
          </Form>
          {localStorage.token ? (
            <Button
              variant="outline-dark"
              onClick={() => this.props.logOut()}
            >
              <Nav.Link
                as={Link}
                to="/"
                style={{ color: "black", textDecoration: "none" }}
              >
                Logout
              </Nav.Link>
            </Button>
          ) : (
            <div>
              <Button variant="primary-outline">
                <Nav.Link
                  as={Link}
                  to="/login"
                >
                  Login
                </Nav.Link>
              </Button>
              <Button variant="outline-warning" className="loginButtonSpace">
                <Nav.Link
                  as={Link}
                  to="/signup"
                >
                  Sign Up
                </Nav.Link>
              </Button>
            </div>
          )}
        </Navbar>
      </div>
    );
  }
}
