import React, { useState, useEffect } from 'react';
import { Image, Container, Row, Col, Card, Button } from 'react-bootstrap'
// import { Link } from 'react-router-dom';
import CD from '../Component/images/istockphoto-153712857-612x612.jpeg'
import LP from '../Component/images/worn-4429101_960_720.png'
import Flyer from '../Component/images/depositphotos_2355636-stock-photo-white-paper.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHeart } from '@fortawesome/free-solid-svg-icons'

const UserIdPage = props => {

  const [currentUser, setUser] = useState({})
  const [userPhotos, setUserPhotos] = useState([])
  const [albumPhoto, setAlbumPhoto] = useState("https://alchetron.com/cdn/anti-cimex-f160c6f2-41ca-497d-9f1b-6b568d197df-resize-750.jpg")
  // const [userInput, setUserInput] = useState("")

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

    // const inputChangedHandler = (event) => {
    //   setUserInput(event.target.value);
    // }

    const loadedArt = (e) => {
      console.log(e)
      let pic = e.target.currentSrc
      setAlbumPhoto(pic)
    }

    // Gets Current User


    const addFavorite = () => {
    fetch("http://localhost:3000/api/v1/favorite_user", {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify({
        favoritedUser_id: currentUser.id,
        user_id: props.loggedInUser.id,
      })
    })
      .then(res => res.json())
      .then(res => {
          console.log(res)
      }
      )
    }

    const contactEmail = "mailto:" + currentUser.email

  return (
    <div style={{display: "flex", flexDirection: "column"}}>
    <div style={{display: "flex", border: "2px solid black", padding: "10px", margin: "30px", justifyContent: "space-around"}}>

      <div style={{display: "flex", flexDirection: "column", textAlign: "center"}}>
        <h1>{currentUser.name}</h1>
          <h3>from</h3>
            <h1>{currentUser.location}</h1>
              <Image src={currentUser.profile_pic_url} rounded style={{height: "300px", width: "300px", objectFit: "contain"}}></Image>
          <br></br>
        <div>
          <Button variant="outline-light">
            <a href={contactEmail}>
              <FontAwesomeIcon icon={faEnvelope} size="5x" style={{textDecoration: "none", color:"black"}} />
            </a>
          </Button>
          <Button onClick={addFavorite} variant="outline-light"><FontAwesomeIcon icon={faHeart} size="5x" style={{textDecoration: "none", color:"black", border: "none"}}/></Button>
        </div>
      </div>
        
      <div className="left_contentlist" style={{display: "flex", flexDirection:"column", justifyContent: "space-around"}}>
      <h1>Artists Panel</h1>
      <Container 
      className="itemconfiguration" style={{backgroundColor: "#F9F6F6"}}>
      <Row md={2}>
      {userPhotosArr.map(art => {
        return <Col>
            <Card style={{display: "flex", justifyContent: "center", alignItems: "center", marginTop: "1em"}}>
          <Image  alt="alt text" src={art.image} key={art.id} fluid style={{width: "200px", height: "200px"}} onClick={(e) => loadedArt(e)}/>
          </Card>
          </Col>
      })}
      </Row>

    </Container> 
    <h5 style={{textAlign: "center"}}>Click a photo to see {currentUser.name}'s art work in whatever format you need below!</h5>
   
      </div>
      </div>

      {/* <div className="App">
      <input type="text" onChange={(e) => inputChangedHandler(e)} 
        value={userInput}/>
      </div>   */}


      <div style={{display: "flex", marginLeft: "2em", marginBottom: "10em", justifyContent: "center", maxWidth: "80%", marginTop: "2em"}}>
      
      <div style={{position: "relative", left: -5, top: 0}}>
        <Image alt="LP" src={LP} style={{position: "absolute", height: "400px", width: "600px"}}/>
        {/* <p style={{position: "absolute", height: "333px", width: "331px", top: "28px", left: "89px"}}>{userInput}</p> */}
        <img alt="record cover" src={albumPhoto} style={{position: "absolute", height: "333px", width: "331px", top: "28px", left: "89px"}} className="cover"/>
        
      </div>  
      
      <div style={{marginLeft: "420px", position: "relative", left: 150, top: 0}}>
        <Image alt="Flyer" src={Flyer} style={{height: "400px", width: "340px"}}/>
        <img alt="record cover" src={albumPhoto} style={{position: "absolute", height: "398px", width: "335px", top: "1px", left: "3px"}} className="cover2"/>
      </div>


      <div style={{marginLeft: "50px", position: "relative", left: 140, top: 0}}>
        <Image alt="CD" src={CD} style={{height: "350px", width: "400px"}}/>
        <img alt="record cover" src={albumPhoto} style={{position: "absolute", height: "305px", width: "320px", top: "17px", left: "55px"}} className="cover3"/>
      </div>

      </div>
      </div>
      
  )

}

export default UserIdPage