import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { useEffect, useState } from 'react';
import jwt_decode from "jwt-decode";

const Authentication = () => {
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
      client_id: import.meta.env.REACT_APP_GOOGLE_CLIENT_ID,
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
        <button onClick={(e)=>handleSignOut(e)}>Sign Out</button>
      }
      
      {
        user && 
        <div>
          <img src={user.picture}></img>
          <h3>{user.name}</h3>
        </div>
      }
    </div>
  )
}

export default Authentication