import React, { Component } from "react"
import { Form, Button, Col } from 'react-bootstrap'
import { Link } from "react-router-dom"


export default class EditInfo extends Component {

    state = {
        name: "",
        age: "",
        email: "",
        location: "",
        bio: "",
        profile_pic_url: "",
      }

      onSubmit = () => {
        console.log(this.state.name);
        console.log(this.state.age);
        console.log(this.state.location);
        console.log(this.state.bio);
        console.log(this.state.profile_pic_url);
    }



    render() {

        let EditInfo = (e) => {
            e.preventDefault()
            // change the cors file under Initializer folder.
            fetch(`http://localhost:3000/api/v1/users/${localStorage.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: this.state.name,
                    age: this.state.age,
                    location: this.state.location,
                    bio: this.state.bio,
                    profile_pic_url: this.state.profile_pic_url
                })
            })
                .then(res => res.json())
                .then(userInfo => {
                    console.log(userInfo)
                    this.props.history.push("/myprofile")
                }
                )
        }

        return (

            <div className="app-theme">
                <h1 >Register</h1>
                <Form className="Login app-theme" onSubmit={(e) => EditInfo(e)}>
                    <Form.Group >
                        <Form.Label>Username</Form.Label>
                        <Form>
                            <Form.Row style={{marginBottom: "2em"}}>
                                <Col>
                                    <Form.Control placeholder="Username, real name, artist alias here" onChange={e => this.setState({ name: e.target.value })} />
                                </Col>
                            </Form.Row> 

                            <Form.Row style={{marginBottom: "2em"}}> 
                                <Col>
                                    <Form.Label>Bio</Form.Label>
                                    <Form.Control placeholder="Spit your wisdom here" onChange={e => this.setState({ bio: e.target.value })} />
                                </Col>
                            </Form.Row> 

                            <Form.Row style={{marginBottom: "2em"}}>    
                                <Col>
                                    <Form.Label>Location</Form.Label>
                                    <Form.Control placeholder="Move recently?" onChange={e => this.setState({ location: e.target.value })} />
                                </Col>
                            </Form.Row>     

                            <Form.Row style={{marginBottom: "2em"}}>    
                                <Col>
                                    <Form.Label>Profile Pic</Form.Label>
                                    <Form.Control placeholder="Let's see those pearly whites" onChange={e => this.setState({ profile_pic_url: e.target.value })} />
                                </Col>
                            </Form.Row> 
                     
                        </Form>
                    </Form.Group>
                    <Form.Group size="lg" controlId="age">
                        <Form.Label>Age</Form.Label>
                        <Form.Control type="number" placeholder="Alright pal, let's see some I.D. again" onChange={e => this.setState({ age: e.target.value })} />
                        <Form.Text className="text-muted">
                            Must be 18+ to register
                        </Form.Text>
                    </Form.Group>

                    <Link to="/home">
                        <Button variant="outline-danger" onClick={() => this.props.deactivate(localStorage.id)} style={{marginLeft: ".5em"}}>
                            Deactivate Account
                        </Button>
                    </Link>

                    <Button onClick={this.onSubmit} variant="danger" type="submit" style={{marginLeft: "4em"}}>
                        Done
                    </Button>
                </Form>
            </div>
        )
    }
}