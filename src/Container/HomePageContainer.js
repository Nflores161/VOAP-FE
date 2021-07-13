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
          <h1 style={{marginTop : "-.4em", marginBottom: "1.9em"}}><SplitText style={{fontFamily: `Permanent Marker, cursive`}} copy="V. O. A. P." role="heading" /></h1>

          <h2 className="secondHeader" style={{marginBottom : "1em", marginTop : "-1em", letterSpacing: "7px", opacity: ".6"}}>Victims of An Art Page</h2> <img src={Rocker} alt="rocker dude" id="rocker" style={{marginBottom: "1em", marginLeft: "7em"}}/>
      </Jumbotron>
      <div>

        
        <div style={{display: "flex", flexDirection: "column", justifyContent: "space-evenly", alignItems: "center", marginTop: "-.5em", marginBottom : "5em"}}>

          
        
          <ArtBlock/>  

          <img src={punk} alt="punk" style={{marginBottom: "7em", marginTop: "7em"}}/>

          <FeaturedArtist loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser}/>

        </div>
      </div>
    </div>  
    )
}

export default HomePageContainer
