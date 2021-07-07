import React from "react"
import { Jumbotron } from "react-bootstrap"
import FeaturedArtist from "../Component/FeaturedArtist"
import ArtBlock from "../Component/ArtBlock"
import SplitText from "../Component/SplitText"

 function HomePageContainer(setLoggedInUser, loggedInUser) {

  

  return(
    <div>
      <Jumbotron style={{textAlign : "center", color: "white"}}>
          <h1><SplitText copy="V.O.A.P." role="heading" /></h1>
        <h2 className="secondHeader" >Victims of An Art Page</h2>
      </Jumbotron>
      <div>


        <div style={{display: "flex", flexDirection: "column", justifyContent: "space-evenly", alignItems: "center", marginBottom : "5em"}}>
        <FeaturedArtist loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser}/>
        <ArtBlock/>
        </div>
      </div>
    </div>  
    )
}

export default HomePageContainer
