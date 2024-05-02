import React, { useState, useEffect } from 'react';
import TokenHeading from '../../assets/fonts/token.png';
import TokenCloud from '../../assets/token0.png';
import TokenText from '../../assets/tokenText.png';

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
        className={`token-heading absolute top-[7%] w-[55%] centered-image ${isHeadingVisible ? 'animate-bounce-in' : ''}`}
      />
      <img
        src={TokenCloud}
        alt="Heading text"
        className="absolute top-[16%] w-[68%] centered-image z-10" // Position TokenCloud at the top
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
