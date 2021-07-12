import React, { Component } from "react";
import { Button, Image } from 'react-bootstrap'

export default class FeaturedArtist extends Component {

  state = {
    featuredArtist: "",
  }

  componentDidMount() {
    fetch("http://localhost:3000/api/v1/get_random")
    .then((res) => res.json())
    .then((randomArtist) => 
      this.setState({
        featuredArtist: randomArtist[0]
      })
    )
  }

  render(){
    
    return (
      <div style={{textAlign : "center", border: "bold", borderStyle: "solid", borderRadius: "15px 15px 15px 15px", display: "flex", flexDirection:"column", justifyContent: "space-between", width: "700px", padding: "5px", marginRight: "1em"}}>
        <h1 className="secondHeader">
          Featured Artist
        </h1>
          <h3>{this.state.featuredArtist.name} from {this.state.featuredArtist.location} </h3>
        <Image className="pulse" alt="featured artist" style={{height: "300px", width: "300px", filter: "grayscale(100%)"}} src={this.state.featuredArtist.profile_pic_url} rounded/>

        <h2>About the Artist</h2>
        <p>
         "{this.state.featuredArtist.bio}"
        </p>
        <Button variant="outline-dark" style={{margin: "20px"}}>
          View Art
        </Button>
      </div>  
    )}
}
