import React, { Component } from "react";
import { Button, Image, Col } from 'react-bootstrap'

export default class FeaturedArtist extends Component {

  state = {
    currentUserInfo: {}
  }

  componentDidMount() {
    fetch(`http://localhost:3000/api/v1/users/${localStorage.id}`)
    .then((res) => res.json())
    .then((currentUserObj) => 
      this.setState({
        currentUserInfo: currentUserObj
      })
    )
  }

  render(){
    
    return (
      <div style={{textAlign : "center", border: "bold", borderStyle: "solid", borderRadius: "15px 15px 15px 15px", display: "flex", flexDirection:"column", justifyContent: "space-between"}}>
        <h1 className="secondHeader">
          Featured Artist
        </h1>
          <h3>{this.state.currentUserInfo.name} from {this.state.currentUserInfo.location} </h3>
        <Image className="pulse" alt="featured artist" src={this.state.currentUserInfo.profile_pic_url} rounded/>

        <h2>About the Artist</h2>
        <h4>
         "{this.state.currentUserInfo.bio}"
        </h4>
        <Button variant="outline-dark" style={{margin: "10px"}}>
          View Art
        </Button>
      </div>  
    )}
}
