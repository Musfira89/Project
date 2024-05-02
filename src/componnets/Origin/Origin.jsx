import React, { useState, useEffect } from "react";
import "./origin.css";
import OriginText from "../../assets/origin-text.png";
import OriginCat from "../../assets/originCat.png";

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
        <div className= 'origin-bg'></div>

        {/* Heading text image */}
        <img
          src={OriginText}
          alt="Heading text"
          className={`absolute top-[20%] left-[3%] w-[20%] ${isVisible ? 'animate-bounce-in' : ''}`}
        />
        <p className="paragraph absolute top-[38%] left-[13%] w-1/2">
        With the opportunity for a first start the community has upgraded Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Mollitia dolorem
        similique, eaque voluptas tempore blanditiis quia autem asperiores,
        natus deleniti minima omnis nemo dolorum harum dolores neque dolore
        ratione quibusdam! Lorem ipsum dolor natus deleniti minima omnis nemo dolorum harum dolores neque dolore
        ratione quibusdam! Lorem ipsum dolor    
        </p>
        <img
          src={OriginCat}
          alt="Heading text"
          className={`absolute top-[31%] right-[12%] w-[23%] ${isVisible ? 'animate-bounce-in' : ''}`}
        />
      </div>
    </div>
  );
};

export default Origin;
