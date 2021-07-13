import React, { Component } from "react";
import { Button, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faScroll } from '@fortawesome/free-solid-svg-icons'
import { faCompactDisc, faRecordVinyl } from '@fortawesome/free-solid-svg-icons'

export default class ArtBlock extends Component {

  render(){

    return (
     <div style={{background: `url(https://static01.nyt.com/images/2020/10/14/arts/07punkphotos-lead2/merlin_178096260_9ee6d1d4-ddd3-469a-a009-707a5a51d9a1-superJumbo.jpg)`, borderRadius: "50px 50px 50px 50px", display: "flex", justifyContent: "center", alignItems: "center"}}>
      <div style={{textAlign : "center", display: "flex", flexDirection:"column", marginBottom : "5em", maxWidth: "60%", border:"solid black", padding: "4em", backgroundColor:"white", opacity: "0.9", marginTop: "5em"}}>
        <h1 className="secondHeader2" style={{marginBottom: ".5em"}}>Art the way <span style={{color: "red"}}>you</span> want to see it</h1>
        <p style={{marginBottom: "4em"}}>Victims of An Art Page is a platform for artists, musicians, and promoters to come together, share, and find the perfect art work in the formats they need... </p>

        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around"}}>

          <span>
          <FontAwesomeIcon icon={faScroll} size="6x"/>
          <p>Flyer</p>
          </span>

          <span>
          <FontAwesomeIcon icon={faCompactDisc} size="6x" className="rotating"/>
          <p>CD</p>
          </span>

          <span style={{marginBottom: "3em"}}>
          <FontAwesomeIcon icon={faRecordVinyl} size="6x" className="rotating"/>
          <p>Vinyl</p>
          </span>
          

        </div>
        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
          <div>
            <h3>Artist? Get Started Below!</h3><br></br>
            <Button variant="danger" style={{maxWidth: "40%" }}>
            <Nav.Link as={Link} to="/signup" style={{color:"white", textDecoration: "none"}}>Create Account!</Nav.Link>
            </Button>
          </div>
          <div style={{marginLeft: "3em"}}>
          <h3>Just Browsin'? Get to it!</h3><br></br>
          <Button variant="danger" style={{maxWidth: "40%" }}>
            <Nav.Link as={Link} to='/users' style={{color:"white", textDecoration: "none"}}>
            Explore Artists!
            </Nav.Link>
            </Button>
          </div>
        </div>
        
      </div>  

      </div> 
    )}
}