import React from 'react';
import Logo from '../../assets/Logo-01.png'

const Navbar = () => {
  return (
    <nav className="bg-black p-4 flex justify-between items-center">
      {/* Left logo */}
      <div className="flex-shrink-0">
        <img src={Logo} alt="Logo" className="h-12" />
      </div>

      {/* Middle to end navigation items */}
      <div className="flex-grow">
        <ul className="Navbar flex justify-center space-x-8 ">
          <li><a href="#" className="text-white">Home</a></li>
          <li><a href="#" className="text-white">About</a></li>
          <li><a href="#" className="text-white">How to buy</a></li>
          <li><a href="#" className="text-white">Tokinomics</a></li>
          <li><a href="#" className="text-white">Roadmap</a></li>
          <li><a href="#" className="text-white">Community</a></li>
          <li><a href="#" className="text-white">Socials</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
