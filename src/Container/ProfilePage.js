import React, {useState, useEffect} from 'react';
// import API from "../adapters/API";
import { Button, Container, Row, Col, Card, Image } from 'react-bootstrap';


const ProfilePage = props => {

  const [currentUserInfo, setCurrentUserInfo] = useState({})
  const [art_image, setArtImage] = useState([])
  const [showHide, setShowHide] = useState(false)
  


const userPhotoArray = art_image.filter(image => image.user_id === currentUserInfo.id)

  useEffect(() => {
    fetch(`http://localhost:3000/api/v1/users/${localStorage.id}`)
    .then((res) => res.json())
    .then((currentUserObj) => 
        setCurrentUserInfo(currentUserObj)
    )
  }, [])

  useEffect(() => {
    fetch(`http://localhost:3000/api/v1/user_art`)
    .then((res) => res.json())
    .then((artImages) => 
        setArtImage(artImages)
    )
  }, [])



  const handleSubmit = event => {
    event.preventDefault()
    // const formData = new FormData(event.target)
    const formData = new FormData()
    // debugger
    formData.append('title', event.target.title.value)
    formData.append('image', event.target.image.files[0])
    formData.append('user_id', currentUserInfo.id)
    // API.submitArtImage(formData)
    fetch("http://localhost:3000/api/v1/myprofile", {
      method: "POST",
      body: formData
    }  
    )
      .then(data => 
        // setArtImage(data.art_image))
        console.log(data.art_image))
      .catch(console.error);
  }



  return (
    <div style={{textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center"}}>
      
    <div style={{display: "flex", border: "2px solid black", padding: "10px", margin: "30px"}}>
      <div>
        <h1>{currentUserInfo.name}'s Profile Info:</h1>
        <Image src={currentUserInfo.profile_pic_url} roundedCircle style={{height: "300px", width: "300px"}}></Image>
      </div>
      <div style={{display: "flex", flexDirection: "column", justifyContent: "space-around"}}>
        <h4>Age: <br></br>
          {currentUserInfo.age}</h4>
        <h4>Location: <br></br> 
          {currentUserInfo.location}</h4>
        <h4>Bio: <br></br>
          {currentUserInfo.bio}</h4>
      </div>
    </div>  
      
    <Container>
      <h1>Photo Dump:</h1>
      <Row lg={4}>
      {userPhotoArray.map(art => {
        return <Col>
            <Card>
          <Image  alt="alt text" src={art.image} key={art.id} fluid/>
          </Card>
          </Col>
   
      })}
      </Row>
    </Container>  

  
    {showHide ? 
    <form style={{display: "flex", flexDirection: "column", maxWidth: "30%"}} onSubmit={handleSubmit}>
      <label htmlFor="title">
        Title<br></br>
        <input type="text" name="title" />
      </label>
      <label htmlFor="image" >
        Upload image
        <input type="file" name="image" accept="image/*" />
      </label>
      <input type="submit" value="Submit" />
    </form>
      : null}
      <Button variant="dark" onClick={() => setShowHide(!showHide)}>Add a flick</Button>
  </div>
  
  );
  
  
}

export default ProfilePage;