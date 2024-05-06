import React, { useEffect } from 'react';
import './Header.css'; // Import external CSS for additional styling
import Header01 from '../../assets/header01.png'; // Right image
import Header02 from '../../assets/header02.png'; // Left image
import HeaderText from '../../assets/Header-text.png'; // Header text image
import bullet from "../../assets/bullets.png"; // Bullet image

const Header = () => {
  useEffect(() => {
    // Add double-bounce-in class to Header02 and HeaderText when the component mounts
    document.getElementById('header02').classList.add('double-bounce-in');
    document.getElementById('header-text').classList.add('double-bounce-in');
  }, []);

  return (
    <header className="relative">
      {/* Background image */}
      <div className="header-bg"></div>
      
      {/* Right image */}
      <img src={Header01} alt="Upper right image" className="absolute top-4 right-4 w-[70%] h-[107%]" />
      
      {/* Left image */}
      <img src={Header02} alt="Cat image" id="header02" className="absolute top-16 left-28 h-[84%] w-[44%]" />

      {/* Header text image */}
      <img src={HeaderText} alt="Header text image" id="header-text" className="absolute top-16 right-44 w-2/6 h-auto " />

      
      <div className="absolute top-[78%] left-[57%] flex space-x-4">
        <button className="bg-red-100 text-black p-2 py-3 flex items-center justify-center font-bold text-xl " style={{ fontFamily: "'Komtitta', sans-serif" }}>
          BUY ON JUPITER
        </button>
        <button className="bg-red-100 text-black p-2 flex items-center justify-center font-bold text-xl" style={{ fontFamily: "'Komtitta', sans-serif" }}>
          JOIN THE COMMUNITY
        </button>
      </div>
    

    </header>
  );
};

export default Header;
