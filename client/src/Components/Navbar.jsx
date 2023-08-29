import React from 'react';
import NavbarIcon from './NavbarIcon';

function Navbar() {
  return (
    <div className="h-screen bg-[#22114F] w-16 flex flex-col items-center py-8 space-y-8 border-r border-lightGray flex-shrink-0 ">
      <div className="flex flex-col items-center space-y-8">
        <NavbarIcon />
        <NavbarIcon />
      </div>

      <div className="h-10"></div>

      <div className="flex flex-col items-center space-y-8">
        <NavbarIcon />
        <NavbarIcon />
        <NavbarIcon />
        <NavbarIcon />
        <NavbarIcon />
      </div>

      <div className="flex-grow"></div>
    </div>
  );
}

export default Navbar;