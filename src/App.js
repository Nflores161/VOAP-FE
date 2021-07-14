import React, { useState, useEffect } from "react"; //
import { 
  BrowserRouter as Router,
  Route } from "react-router-dom";
import NavBarComponent from "./Component/NavBarComponent";
import HomePageContainer from "./Container/HomePageContainer";
import Login from "./Component/Login";
import SignUp from "./Component/SignUp";
import ProfilePage from "./Container/ProfilePage";
import './App.css';
import ExploreContainer from "./Container/ExploreContainer";
import UserIdPage from "./Component/UserIdPage";
import EditInfo from "./Component/EditInfo";


const App = () => {

  const [loggedInUser, setLoggedInUser] = useState([]);
  const [logInStatus, handleLogin] = useState(false);
  const [usersCollection, setUsersCollection] = useState([]);
  const [chosenGenre, selectGenre] = useState("");

  //Logout Logic
  const logOut = () => {
    localStorage.clear()
    handleLogin(false)
    setLoggedInUser({})
  }


  //Set current user
  useEffect(() => {
    if (localStorage.token !== "undefined")
    handleLogin(true)
  }, [])

  //Get all users
  useEffect(() => {
    fetch("http://localhost:3000/api/v1/users")
    .then((resp) => resp.json())
    .then((usersArr) => {
      setUsersCollection(usersArr);
    })
  }, []);


  const filterByGenre = (key) => {
    if (key === "punk") selectGenre("punk");
    else if (key === "metal") selectGenre("metal");
    else if (key === "noise") selectGenre("noise");
    else if (key === "electronic") selectGenre("electronic");
    console.log("tab clicked")
  };

  const usersFilteredCollection = usersCollection.filter(
    (user) => user.genre === chosenGenre
  );

  const deactivate = (userid) => {
    fetch(`http://localhost:3000/api/v1/users/${userid}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => console.log("Deleted"));

    localStorage.clear();
    handleLogin(false);
    setLoggedInUser({});
    // this.history.push("/home")
  };


  return (
    <Router>
      
      <Route render={(routerProps) => (
      <NavBarComponent {...routerProps} logInStatus={logInStatus} handleLogin={handleLogin} setLoggedInUser={setLoggedInUser} logOut={logOut}
      />)}
      />
     
      <Route exact path='/' render={(routerProps) => (
      <HomePageContainer {...routerProps} loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser}
      />)}
      /> 
      
       <Route exact path='/login' render={(routerProps) => (
      <Login {...routerProps} handleLogin={handleLogin} logInStatus={logInStatus} setLoggedInUser={setLoggedInUser}/>)}
            />

      <Route exact path='/signup' render={(routerProps) => 
      (<SignUp {...routerProps} setLoggedInUser={setLoggedInUser}/>)}
      />

      <Route exact path='/myprofile' render={(routerProps) => (<ProfilePage {...routerProps} loggedInUser={loggedInUser} logInStatus={logInStatus}/>)}/>

      <Route exact path='/users' render={(routerProps) => (<ExploreContainer {...routerProps} setUsersCollection={setUsersCollection} usersFilteredCollection={usersFilteredCollection} filterByGenre={filterByGenre}/> )}/>

      <Route
        exact
        path="/users/:id"
        render={(routerProps) => (
          <UserIdPage {...routerProps} loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser}/>
        )}
      />  

      <Route
        exact
        path="/editprofile"
        render={(routerProps) => (
          <EditInfo
            {...routerProps}
            setLoggedInUser={setLoggedInUser}
            deactivate={deactivate}
            />
          )}
        />  

    </Router>
  );
};

export default App;
