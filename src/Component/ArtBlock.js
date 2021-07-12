import React, { Component } from "react";
import { Button } from 'react-bootstrap';
// import ArtBlockCard from './ArtBlockCard';
// import { Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faScroll } from '@fortawesome/free-solid-svg-icons'
import { faCompactDisc, faRecordVinyl } from '@fortawesome/free-solid-svg-icons'

export default class ArtBlock extends Component {

  

  // state = {
  //   randomGroup: "",
  // }

  // componentDidMount() {
  //   fetch(`http://localhost:3000/api/v1/get_random_group`)
  //   .then((res) => res.json())
  //   .then((randUsers) => 
  //     this.setState({
  //       randomGroup: randUsers
  //     })
  //   )
  // }



  render(){

    return (
      <div style={{textAlign : "center", display: "flex", flexDirection:"column", marginBottom : "5.5em", maxWidth: "60%", border:"solid black", padding: "4em"}}>
        {/* <h1 className="secondHeader2">Artists Block</h1> */}

        {/* <Container>
              <Row lg={4}> */}
                  {/* {this.state.randomGroup.map(random => <ArtBlockCard random={random} image={random.profile_pic_url} />)} */}
              {/* </Row>
          </Container> */}

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
          <Button variant="danger" style={{maxWidth: "40%" }}>Create an Account!</Button>
          </div>
          <div style={{marginLeft: "3em"}}>
          <h3>Just Browsin'? Get to it!</h3><br></br>
          <Button variant="danger" style={{maxWidth: "40%" }}>Explore Artists</Button>
          </div>
        </div>
        
      </div>  
    )}
}