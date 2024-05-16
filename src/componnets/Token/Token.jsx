import React, { useState, useEffect } from 'react';
import TokenHeading from '../../assets/fonts/token.png';
import TokenCloud from '../../assets/token0.png';
import TokenText from '../../assets/tokenText.png';
import bullet from "../../assets/bullets.png"; // Bullet image

import './token.css';

const Token = () => {
  const [isHeadingVisible, setIsHeadingVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const { top } = document.querySelector('.token-heading').getBoundingClientRect();
      setIsHeadingVisible(top < window.innerHeight * 0.99); // Determine if the heading is 99% visible
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative">
      <div className="token-bg "></div>
      <img
        src={TokenHeading}
        alt="Heading text"
        className={`token-heading absolute top-[4%] w-[55%] centered-image ${isHeadingVisible ? 'animate-bounce-in' : ''}`}
      />
      <img src={bullet} alt="bullet image" className="absolute top-[11%] left-[21%] w-auto h-auto animate-bullet-in" />
      <img src={bullet} alt="bullet image" className="absolute top-[12%] left-[32%] w-6 h-auto animate-bullet-in" />
      <img src={bullet} alt="bullet image" className="absolute top-[5%] left-[44%] w-8 h-auto animate-bullet-in" />
      <img src={bullet} alt="bullet image" className="absolute top-[13%] right-[31%] w-8 h-auto animate-bullet-in" />
      <img src={bullet} alt="bullet image" className="absolute top-[4%] right-[23%] w-8 h-auto animate-bullet-in" />


      <img
        src={TokenCloud}
        alt="Heading text"
        className="absolute top-[16%] w-[72%] centered-image z-10" // Position TokenCloud at the top
      />
      <img
        src={TokenText}
        alt="Heading text"
        className="absolute top-[28%] w-[40%] centered-image z-20"
      />
    </div>
  );
}

export default Token;
