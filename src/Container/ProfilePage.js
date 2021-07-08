import React, {useState, useEffect} from 'react';
import API from "../adapters/API";
import { Button, Container, Row, Col, Card, Image } from 'react-bootstrap';


const ProfilePage = props => {

  const [currentUserInfo, setCurrentUserInfo] = useState({})
  const [art_image, setArtImage] = useState([])
  const [showHide, setShowHide] = useState(false)
  
  useEffect(() => {
    fetch(`http://localhost:3000/api/v1/art_images`)
    .then((res) => res.json())
    .then((artImage) => 
        setArtImage(artImage)
    )
  }, [])


  useEffect(() => {
    fetch(`http://localhost:3000/api/v1/users/${localStorage.id}`)
    .then((res) => res.json())
    .then((currentUserObj) => 
        setCurrentUserInfo(currentUserObj)
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
      .then(data => setArtImage(data.art_image))
      .catch(console.error);
  }



  return (
    <div style={{textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center"}}>
      
    <div>

    </div>  
      
    <Container>
      <h1>Photo Dump:</h1>
      <Row md={4}>
      {art_image.map(art => {
        return <Col>
            <Card>
          <Image  alt="alt text" src={art.image} key={art.id} fluid/>
          </Card>
          </Col>
   
      })}
      </Row>
    </Container>  

  <Button variant="dark" onClick={() => setShowHide(!showHide)}>Add a flick</Button>
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
  </div>
  );
  
}

export default ProfilePage;