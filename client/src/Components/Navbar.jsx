import React from 'react';
import NavbarIcon from './NavbarIcon';
import Location from '../assets/location.png';
import Flight from '../assets/flight.png'
import Transport from '../assets/transport.svg';
import Home from '../assets/home.svg';
import Notifications from '../assets/notification.svg';
import Community from '../assets/community.svg';
import {Link} from "react-router-dom"
function Navbar() {
  return (
    <div className="h-screen bg-[#22114F] w-16 flex flex-col items-center py-8 space-y-8 border-r border-lightGray flex-shrink-0 ">
      <div className="flex flex-col items-center space-y-8">
        <NavbarIcon />
        <Link to='/'>
        <NavbarIcon iconSrc={Home}/></Link>
      </div>

      <div className="h-10"></div>

      <div className="flex flex-col items-center space-y-8">
        <Link to="/community">
        <NavbarIcon iconSrc={Community}/></Link>
        <Link to='/location'>
        <NavbarIcon iconSrc={Location}/></Link>
        <Link to='/flights'>
        <NavbarIcon iconSrc={Flight}/></Link>
        <Link to='/transport'>
        <NavbarIcon iconSrc={Transport}/></Link>
        <Link to='/notification'>
        <NavbarIcon iconSrc={Notifications}/></Link>
      </div>

      <div className="flex-grow"></div>
    </div>
  );
}

export default Navbar;