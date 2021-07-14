import React, { Component } from "react";
import { Button, Image, Nav } from 'react-bootstrap'
import { Link } from "react-router-dom";

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

    const URL =  "users/" + this.state.featuredArtist.id
        

    return (
    <div style={{background: `url(https://papyrus.greenville.edu/wp-content/uploads/2018/10/7724229_hr9_steven_hanner_.jpg)`, maxWidth: "80%", borderRadius: "50px 50px 50px 50px"}}>

      <div style={{textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center", padding: "1em"}} >
        <h1 style={{color: "red", fontSize: "5em",  maxWidth: "40%", textShadow: "2px 5px 4px #000000"}}>
      Featured Artist
        </h1>
          <h2 style={{color: "white", textShadow: "2px 5px 4px #000000"}}>{this.state.featuredArtist.name} from {this.state.featuredArtist.location} 
        </h2>
        
        <Button variant="danger" style={{margin: "5px"}}>
        <Nav.Link as={Link} to={URL}
        style={{color:"white", textDecoration: "none"}}>
          View Art
        </Nav.Link>
        </Button>
        
        <div class="polaroid">
          <a title={this.state.featuredArtist.bio}>  
          <Image alt="featured artist" style={{height: "300px", width: "350px", filter: "grayscale(100%)"}} src={this.state.featuredArtist.profile_pic_url} rounded/>
          </a>
        </div>
      </div>
    </div>  
    )}
}


{/* <div style={{textAlign : "center", border: "bold", borderStyle: "solid", borderRadius: "15px 15px 15px 15px", display: "flex", flexDirection:"column", justifyContent: "space-between", width: "700px", padding: "5px", marginRight: "1em"}}>
          <h3>{this.state.featuredArtist.name} from {this.state.featuredArtist.location} </h3>
        <Image className="pulse" alt="featured artist" style={{height: "300px", width: "300px", filter: "grayscale(100%)"}} src={this.state.featuredArtist.profile_pic_url} rounded/>

        <h2>About the Artist</h2>
        <p>
         "{this.state.featuredArtist.bio}"
        </p>
        <Button variant="outline-dark" style={{margin: "20px"}}>
          View Art
        </Button>
      </div>   */}
