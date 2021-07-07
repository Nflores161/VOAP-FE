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


const App = () => {

  const [loggedInUser, setLoggedInUser] = useState([]);
  const [logInStatus, handleLogin] = useState(false);

  const logOut = () => {
    localStorage.clear()
    handleLogin(false)
    setLoggedInUser({})
  }

  useEffect(() => {
    if (localStorage.token !== "undefined")
    handleLogin(true)
  }, [])

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
    </Router>
  );
};

export default App;
