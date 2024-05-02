import React, { useState, useEffect } from 'react';
import BuyCloud from '../../assets/buy.png';
import BuyText from '../../assets/fonts/buy.png';
import BuyCat from "../../assets/buyCat.png";
import icon from '../../assets/link.png';
import './buy.css';

const Buy = () => {
  const [isTextVisible, setIsTextVisible] = useState(false);
  const [isCatVisible, setIsCatVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const textElement = document.querySelector('.buy-text');
      const catElement = document.querySelector('.buy-cat');
      const textRect = textElement.getBoundingClientRect();
      const catRect = catElement.getBoundingClientRect();
      
      setIsTextVisible(textRect.top < window.innerHeight * 0.99);
      setIsCatVisible(catRect.top < window.innerHeight * 0.99);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative">
      <div className="background-img"></div>
      <img
        src={BuyCloud}
        alt="Cloud"
        className="absolute top-[3%] left-[3%] w-[65%]"
      />
      <img
        src={BuyText}
        alt="Heading text"
        className={`buy-text absolute top-[2%] left-[7%] w-[30%] ${isTextVisible ? 'animate-bounce-in' : ''}`}
      />
      <p className="paragraph absolute top-[25%] left-[15%] w-[42%] text-white ">
      With the opportunity for a first start the community has upgraded Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Mollitia dolorem
        similique, eaque voluptas tempore blanditiis quia autem asperiores,
        natus deleniti minima omnis nemo dolorum harum dolores neque dolore
        ratione quibusdam! Lorem ipsum dolor  
      </p>
      <img
        src={BuyCat}
        alt="Cat"
        className={`buy-cat absolute top-[31%] right-[12%] w-[23%] ${isCatVisible ? 'animate-bounce-in' : ''}`}
      />
  <button className="paragraph absolute top-[70%] left-[14%] w-[15%] bg-red-700 text-white p-3 flex items-center justify-center " >
        <img src={icon} alt="Link icon" className="mr-2 w-[14%]" /> {/* Use the custom icon image */}
        Buy on Jupiter
      </button>    </div>
  );
}

export default Buy;
