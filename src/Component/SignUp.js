import React, { Component } from "react"
import { Form, Button, Col } from 'react-bootstrap'

export default class SignUp extends Component {

    state = {
      name: "",
      age: "",
      email: "",
      password: "",
      location: "",
      bio: "",
      forum_post: "",
      creator: "",
      profile_pic_url: "",
    }

    onSubmit = () => {
        console.log(this.state.name);
        console.log(this.state.age);
        console.log(this.state.email);
        console.log(this.state.password);
        console.log(this.state.location);
        console.log(this.state.bio);
        console.log(this.state.profile_pic_url);
    }

    render() {

        let SignUp = (e) => {
            e.preventDefault()
            // change the cors file under Initializer folder.
            fetch("http://localhost:3000/api/v1/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  name: this.state.name,
                  age: this.state.age,
                  email: this.state.email,
                  password: this.state.password,
                  location: this.state.location,
                  bio: this.state.bio,
                  profile_pic_url: this.state.profile_pic_url,
                })
            })
                .then(res => res.json())
                .then(userInfo => {
                    console.log(userInfo)
                    localStorage.token = userInfo.token
                    localStorage.id = userInfo.user.id
                    this.props.setLoggedInUser(userInfo.user) //this does NOT persist if you refresh
                    this.props.history.push("/")
                }
                )
        }

        return (

            <div className="app-theme">
                <h1 className="forLogRegTxt logo-theme blackbg abovetoptxt homepage-header3">Register</h1>
                <Form className="Login app-theme" onSubmit={(e) => SignUp(e)}>
                    <Form.Group >
                        <Form.Label>Username</Form.Label>
                        <Form>
                            <Form.Row>
                                <Col>
                                    <Form.Control placeholder="First name" onChange={e => this.setState({ name: e.target.value })} />
                                </Col>
                                <Col>
                                    <Form.Control placeholder="Bio" onChange={e => this.setState({ bio: e.target.value })} />
                                </Col>
                                <Col>
                                    <Form.Control placeholder="Location" onChange={e => this.setState({ location: e.target.value })} />
                                </Col>
                            </Form.Row>
                        </Form>
                    </Form.Group>
                    <Form.Group size="lg" controlId="age">
                        <Form.Label>Age</Form.Label>
                        <Form.Control type="number" placeholder="How old are ya, bud?" onChange={e => this.setState({ age: e.target.value })} />
                        <Form.Text className="text-muted">
                            Must be 18+ to register
                        </Form.Text>
                    </Form.Group>

                    <Form.Group size="lg" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={e => this.setState({ email: e.target.value })} />
                        <Form.Text className="text-muted">
                            Email required
                        </Form.Text>
                    </Form.Group>

                    <Form.Label htmlFor="inputPassword5" >Password</Form.Label>
                    <Form.Control
                        type="password"
                        id="inputPassword5"
                        aria-describedby="passwordHelpBlock"
                        onChange={e => this.setState({ password: e.target.value })}
                    />
                    <Form.Text id="passwordHelpBlock" muted>
                        Your password must be 8-20 characters long, contain letters and numbers, and
                        must not contain spaces, special characters, or emoji.
                    </Form.Text>

                    <Button onClick={this.onSubmit} variant="outline-warning" type="submit" className="underhomebtn2 loginButtonSpace2 ">
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }
}