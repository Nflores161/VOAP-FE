import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import ArtBlockCard from './ArtBlockCard';
import { Container, Row } from "react-bootstrap";

export default class ArtBlock extends Component {

  state = {
    randomGroup: "",
  }

  componentDidMount() {
    fetch(`http://localhost:3000/api/v1/get_random_group`)
    .then((res) => res.json())
    .then((randUsers) => 
      this.setState({
        randomGroup: randUsers
      })
    )
  }

  render(){

    return (
      <div style={{textAlign : "center", display: "flex", flexDirection:"column", justifyContent: "space-evenly"}}>
        <h1 className="secondHeader2">Artists Block</h1>

        <Container>
              <Row lg={4}>
                  {/* {this.state.randomGroup.map(random => <ArtBlockCard random={random} image={random.profile_pic_url} />)} */}
              </Row>
          </Container>
      </div>  
    )}
}