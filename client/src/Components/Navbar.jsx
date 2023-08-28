import React from 'react';
import NavbarIcon from './NavbarIcon';

function Navbar() {
  return (
    <div className="h-screen bg-[#2d2d2d] w-16 flex flex-col items-center py-8 space-y-8 border-r border-lightGray flex-shrink-0 rounded-tr-2xl rounded-br-2xl">
      <div className="flex flex-col items-center space-y-8">
        <NavbarIcon iconSrc={Profile} />
        <NavbarIcon iconSrc={Home} />
      </div>

      <div className="h-10"></div>

      <div className="flex flex-col items-center space-y-8">
        <NavbarIcon iconSrc={Tasks} />
        <NavbarIcon iconSrc={Team} />
        <NavbarIcon iconSrc={Project} />
        <NavbarIcon iconSrc={Chat} />
        <NavbarIcon iconSrc={Notifications} />
      </div>

      <div className="flex-grow"></div>
    </div>
  );
}

export default Navbar;