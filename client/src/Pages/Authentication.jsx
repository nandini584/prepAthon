import React ,{ useDeferredValue } from "react";
import { useEffect, useState } from 'react';
import jwt_decode from "jwt-decode";
import Community from "./Community";
import Notifications from "./Notifications";

function Authentication(){

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
    
      <div id="signInDiv">
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
      <Community />
      <Notifications />
      </div>)
}

export default Authentication;