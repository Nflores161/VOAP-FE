import React, { Component } from "react";
import { Container, Col, Card, Button } from "react-bootstrap";


const ArtBlockCard = (props) => {


    return (
      <Container>
      <Col>
          <Card className="text-center guitarCardLayout">
              <Card.Img src={props.random.image} alt="artist" fluid/>
          </Card>
      </Col>
    </Container>  
    )}

export default ArtBlockCard