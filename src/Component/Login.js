import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
// import React from "react"

export default class Login extends Component {
  state = {
    email: "",
    password: "",
  };

  onSubmit = () => {
    console.log(this.state.email);
    console.log(this.state.password);
    // console.log("button clicked")
  };

  handleEmail = (e) => {
    e.preventDefault();
    this.setState({ email: e.target.value });
  };

  handlePassword = (e) => {
    e.preventDefault();
    this.setState({ password: e.target.value });
  };

  render() {
    let logIn = (e) => {
      e.preventDefault();
      // change the cors file under Initializer folder.

      fetch("http://localhost:3000/api/v1/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: this.state.email,
          password: this.state.password,
        }),
      })
        .then((res) => res.json())
        .then((currentUserInfo) => {
          if (currentUserInfo.error) {
            alert(currentUserInfo.error);
          } else {
            localStorage.token = currentUserInfo.token;
            //   // localStorage.user = currentUserInfo.user//this does not work
            localStorage.id = currentUserInfo.user.id;
            // this.props.logInStatus(true);
            this.props.setLoggedInUser(currentUserInfo.user); //this does NOT persist if you refresh

            this.props.history.push("/");
          }
        });
    };
    return (
      // <div className="app-theme">
      //         {this.props.logInStatus
      //             ? "You are Logged In"
      //             :
      <div className="app-theme">
        <h1 className="forLogRegTxt logo-theme blackbg homepage-header3 ">
          Login
        </h1>
        <Form
          className="Login app-theme blackbg"
          onSubmit={(e) => {
            logIn(e);
            // setTimeout(() => this.props.handleLogin(true), 1000)
          }}
        >
          <Form.Group size="lg" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onChange={this.handleEmail}
              type="email"
              name="email"
              placeholder="Enter email"
            />
            <Form.Text className="text-muted">Email required</Form.Text>
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="inputPassword5">Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              id="inputPassword5"
              aria-describedby="passwordHelpBlock"
              onChange={this.handlePassword}
            />
            <Form.Text id="passwordHelpBlock" muted>
              Your password must be 8-20 characters long, contain letters and
              numbers, and must not contain spaces, special characters, or
              emoji.
            </Form.Text>
          </Form.Group>
          <Button
            variant="outline-warning"
            type="submit"
            className="underhomebtn2 loginButtonSpace2"
          >
            Login
          </Button>
        </Form>
      </div>
      //     }
      // </div >
    );
  }
}