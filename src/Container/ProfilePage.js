import React, {useState, useEffect} from 'react';
// import API from "../adapters/API";
import { Button, Container, Row, Col, Card, Image } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';


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
      
    <div style={{display: "flex", border: "2px solid black", padding: "10px", margin: "30px", borderRadius: "50px 50px 50px 50px", backgroundImage: "url(https://cranbrookartmuseum.org/wp-content/uploads/2018/05/americanhardcore-film-event.jpg)"}}>

      <div style={{border: "2px solid black", padding: "1.5em", margin: "30px", borderRadius: "50px 50px 50px 50px", backgroundSize: "cover", backgroundColor: "white", opacity: "0.96", margin: "2em"}}>
        <h1 style={{opacity: "5", marginBottom: ".5em"}}>{currentUserInfo.name}'s Profile</h1>
        <Image src={currentUserInfo.profile_pic_url} style={{height: "240px", width: "240px", opacity: "20", boxShadow: "0 10 10px black inset",  boxShadow: "0 4px 8px rgba(0, 0, 0, .7)", justifyContent: "space-between", border: "1px solid black"}} className="grow" roundedCircle></Image>
      </div>
      <div style={{display: "flex", flexDirection: "column", justifyContent: "space-around", border: "2px solid black", padding: "2em", margin: "30px", borderRadius: "50px 50px 50px 50px", backgroundColor: "white", opacity: "0.96", margin: "1.6em"}}>
        <h1>My Info:</h1>
        <h4>Age: <br></br>
          {currentUserInfo.age}</h4>
        <h4>Location: <br></br> 
          {currentUserInfo.location}</h4>
        <h4>Bio: <br></br>
          {currentUserInfo.bio}</h4>
        <Nav.Link as={Link} to="/editprofile">
          <Button variant="danger">Edit Info</Button>
        </Nav.Link>
      </div>
    
    </div>  

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
  </div>
  
  );
  
  
}

export default ProfilePage;