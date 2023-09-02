import Community from './Pages/Community';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Tripposting from './Pages/Tripposting';
import Home from './Pages/Home';
import Tags from './Pages/Tags';
import Notification from './Pages/Notifications';
import Location from './Pages/Location';
import UserProfile from './Pages/UserProfile';
import Transport from './Pages/Transport';
import FlightPrices from './Pages/FlightPrices/FlightPrices';
import SingleTrip from './Pages/SingleTripPlanning';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Logout from './Pages/Logout';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
function App() {
  const [user, setUser] = useState({});
  const getUser = async () => {
    try {
      const url = `${import.meta.env.REACT_APP_API_URL}/profile`;
      const {data}=await axios.get(url,{withCredentials:true});
      setUser(data.user._json);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getUser();
  }, [])
  return (
    <div className="bg-[#F2F3F7]">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tags" element={<Tags />} />
          <Route path="/community" element={<Community />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/location" element={<Location />} />
          <Route path="/tripposting/:communityid" element={<Tripposting />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/transport" element={<Transport />} />
          <Route path="/flights" element={<FlightPrices />} />
          <Route path="/singletrip/:tripid" element={<SingleTrip />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={user?<Navigate to='/'/>:<Login />} />
          <Route path="/logout" element={user?<Logout/>:<Navigate to='/signup' />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App