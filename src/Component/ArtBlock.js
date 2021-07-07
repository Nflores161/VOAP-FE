import React, { Component } from "react";
import { Button } from 'react-bootstrap'

export default class ArtBlock extends Component {

  state = {
    allUsers: {}
  }

  componentDidMount() {
    fetch(`http://localhost:3000/api/v1/users`)
    .then((res) => res.json())
    .then((allUsers) => 
      this.setState({
        allUsers: allUsers
      })
    )

  }

  render(){
    return (
      <div style={{textAlign : "center", display: "flex", flexDirection:"column", justifyContent: "space-evenly"}}>
        <h1 className="secondHeader2">Artists Block</h1>
        <p>a bunch of photos here</p>
      </div>  
    )}
}