import React from "react"
import { Jumbotron } from "react-bootstrap"
import FeaturedArtist from "../Component/FeaturedArtist"
import ArtBlock from "../Component/ArtBlock"
import SplitText from "../Component/SplitText"
import punk from "../Component/images/punk_PNG40.png"
import Rocker from "../Component/images/logo-guitarist-punk-rock-png-favpng-0UEhtKxDA0458PfB6RyL5MTz3.png"

 function HomePageContainer(setLoggedInUser, loggedInUser) {

  return(
    <div>
      <Jumbotron style={{textAlign : "center", color: "white"}}>
          <h1 style={{marginTop : "0em", marginBottom: "2em"}}><SplitText copy="V.O.A.P." role="heading" /></h1>
          <h2 className="secondHeader" style={{marginBottom : "0em", marginTop : "-1.5em", letterSpacing: "7px"}}>Victims of An Art Page</h2>
      </Jumbotron>
      <div>

        
        <div style={{display: "flex", flexDirection: "column", justifyContent: "space-evenly", alignItems: "center", marginTop: "0em", marginBottom : "5em"}}>

          <img src={Rocker} alt="rocker dude" id="rocker" style={{marginBottom: "5em", marginLeft: "8em", marginTop: "-3.5em"}}/>
        
          <ArtBlock/>  

          <img src={punk} alt="punk" style={{marginBottom: "5em"}}/>

          <FeaturedArtist loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser}/>

        </div>
      </div>
    </div>  
    )
}

export default HomePageContainer
