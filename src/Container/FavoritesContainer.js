import React, { Component } from "react";
import FavCard from "../Component/FavCard";
import { Container, Row } from "react-bootstrap";


export default class FavoritesContainer extends Component {
    render(){
    return(
      <div>
        <Container>
          <Row md={4} className="justify-content-md-center">
            {this.props.favoriteArr.map(fav => {
            return <FavCard fav={fav} key={fav.id} allUsers={this.props.allUsers} favoriteArr={this.props.favoriteArr} destroyFav={this.props.destroyFav}/>})}
          </Row>  
        </Container>  
        </div>
    )
  }
  }
