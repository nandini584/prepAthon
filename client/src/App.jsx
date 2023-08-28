import React, { useDeferredValue } from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import Community from './Pages/Community';
import jwt_decode from "jwt-decode";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Tripposting from './Pages/Tripposting';
import Home from './Pages/Home';
import Tags from './Pages/Tags';
import Notification from './Pages/Notifications';
import Location from './Pages/Location';
import UserProfile from './Pages/UserProfile';
import Transport from './Pages/Transport';

function App() {
  const [user,setUser]=useState({});

  function handleCallBackResponse(response){
    console.log("Encoded JWT ID token : " + response.credential);
    var userObject=jwt_decode(response.credential);
    console.log(userObject);
    setUser(userObject);
    document.getElementById("signInDiv").hidden=true;
  }

  function handleSignOut(event){
      setUser({});
      document.getElementById("signInDiv").hidden=false;
  }
  useEffect(()=>{
    google.accounts.id.initialize({
      client_id:"34800752652-r2srcuo6lqp6j4csovrdst212agbbqb5.apps.googleusercontent.com",
      callback : handleCallBackResponse
    });
    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      {theme: "outline", size :"large"}
    );
  }
  ,[]);
  return (
    <div className="bg-[#F2F3F7]">
      <div id="signInDiv"></div>
      {Object.keys(user).length!=0 &&
        <button onClick={(e)=>handleSignOut(e)}>Sign Out </button>
      }
      
      {
        user && 
        <div>
          <img src={user.picture}></img>
          <h3>{user.name}</h3>
        </div>
      }
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tags" element={<Tags />} />
          <Route path="/community" element={<Community />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/location" element={<Location />} />
          <Route path="/tripposting" element={<Tripposting />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/transport" element={<Transport />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App