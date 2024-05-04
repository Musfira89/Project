import React from 'react';
import logo from '../assets/Logo-01.png'
import redBg from '../assets/redBg.jpg';

const LastBanner = () => {
  return (
    <div className="relative" style={{ backgroundImage: `url(${redBg})` }}>
      <div className="min-w-full h-24 flex items-center justify-between">
      <div className="flex-shrink-0">
        <img src={logo} alt="Logo" className="h-16" />
      </div>
        
        {/* Right paragraph */}
        <p className="paragraph text-white text-sm mr-4">© 2024 The Peaky Bruh. All right reserved</p>
      </div>
    </div>
  );
};

export default LastBanner;
