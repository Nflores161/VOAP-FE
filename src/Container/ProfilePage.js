import React, {useState} from 'react';
import API from "../adapters/API";
import { Button } from 'react-bootstrap';


const ProfilePage = props => {

  const [art_image, setArtImage] = useState({})
  const [showHide, setShowHide] = useState(false)

  const handleSubmit = event => {
    event.preventDefault()
    // const formData = new FormData(event.target)
    const formData = new FormData()
    // debugger
    formData.append('title', event.target.title.value)
    formData.append('image', event.target.image.files[0])

    API.submitArtImage(formData)
      .then(data => setArtImage(data.art_image))
      .catch(console.error);
  }

  return (
    <div>
      {showHide ? 
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">
        Title
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