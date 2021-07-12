import React, { useState, useEffect } from 'react';
import { Image, Container, Row, Col, Card } from 'react-bootstrap'
// import { Link } from 'react-router-dom';
import CD from '../Component/images/istockphoto-153712857-612x612.jpeg'
import LP from '../Component/images/the-white-album-529x532.jpeg'
import Flyer from '../Component/images/TCLA42019.jpeg'

const UserIdPage = props => {

  const [currentUser, setUser] = useState({})
  const [userPhotos, setUserPhotos] = useState([])



  useEffect(() => {
    fetch(`http://localhost:3000/api/v1/users/${props.match.params.id}`)
        .then((r) => r.json())
        .then((userObj) => {
            setUser(userObj);
        });
    }, [])


    useEffect(() => {
      fetch(`http://localhost:3000/api/v1/user_art`)
      .then((res) => res.json())
      .then((artImages) => 
      setUserPhotos(artImages)
      )
    }, [])

    const userPhotosArr = userPhotos.filter(image => image.user_id === currentUser.id)
    console.log(userPhotosArr)


  return (
    <div style={{display: "flex", flexDirection: "column"}}>
    <div style={{display: "flex", border: "2px solid black", padding: "10px", margin: "30px", justifyContent: "space-around"}}>

      <div style={{display: "flex", flexDirection: "column", textAlign: "center"}}>
        <h1>{currentUser.name}</h1>
        <h3>from</h3>
        <h1>{currentUser.location}</h1>
        <Image src={currentUser.profile_pic_url} rounded style={{height: "300px", width: "300px", objectFit: "contain"}}></Image>
      </div>
        
      <div className="left_contentlist">
      <h1>Artists Panel</h1>
      <Container 
      className="itemconfiguration">
      <Row md={2}>
      {userPhotosArr.map(art => {
        return <Col>
            <Card style={{marginTop: "1em"}}>
          <Image  alt="alt text" src={art.image} key={art.id} fluid style={{width: "200px", height: "200px"}}/>
          </Card>
          </Col>
      })}
      </Row>

      
    </Container> 
   
      </div>
      
      </div>
      <div style={{display: "flex", justifyContent:"space-between", marginLeft: "2em", marginBottom: "10em"}}>
      <Image alt="LP" src={LP} style={{height: "350px", width: "350px"}}/>
      <Image alt="Flyer" src={Flyer} style={{height: "400px", width: "300px"}}/>
      <Image alt="CD" src={CD} style={{height: "350px", width: "400px"}}/>
      </div>
      </div>
      
  )

}

export default UserIdPage