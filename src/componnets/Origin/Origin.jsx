import React, { useState, useEffect } from "react";
import "./origin.css";
import OriginText from "../../assets/origin-text.png";
import OriginCat from "../../assets/originCat.png";
import bullet from "../../assets/bullets.png"; // Bullet image

const Origin = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const { top } = document.querySelector('.origin-wrapper').getBoundingClientRect();
      setIsVisible(top < window.innerHeight * 0.99); // Determine if the component is 99% visible
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="origin-wrapper">
      <div className="relative">
        <div className='origin-bg'></div>

        {/* Heading text image */}
        <img
          src={OriginText}
          alt="Heading text"
          className={`absolute top-[20%] left-[3%] w-[20%] ${isVisible ? 'animate-bounce-in' : ''}`}
        />
        {/* Bullets with animation */}
        {isVisible && (
          <>
            <img src={bullet} alt="bullet image" className="absolute top-[21%] left-[3%] w-auto h-auto animate-bullet-in" />
            <img src={bullet} alt="bullet image" className="absolute top-[32%] left-[12%] w-8 h-auto animate-bullet-in" />
            <img src={bullet} alt="bullet image" className="absolute top-[28%] left-[21%] w-auto h-auto animate-bullet-in" />
          </>
        )}

        {/* Paragraph with animation */}
        <p className={`paragraph absolute top-[38%] left-[13%] w-1/2 font-bold ${isVisible ? 'animate-bounce-in' : ''}`}>
          With the opportunity for a first start, the community has upgraded Bruh 
          from a standard SSPL token to now have token extensions. In short, Bruh has been given superpowers.
          The peaky Bruh is on a mission to use these powers to not only support BRUH and its holders, 
          but also support other tokens within the Selana ecosystem. <br/>
          As a token re-launched by the Selana community, we will keep the memes alive but also live up to
          the ticker $BRUH, a fren on Selana.
        </p>
        {/* Image with animation */}
        <img
          src={OriginCat}
          alt="Heading text"
          className={`absolute top-[33%] right-[12%] w-[23%] ${isVisible ? 'animate-bounce-in' : ''}`}
        />
      </div>
    </div>
  );
};

export default Origin;
