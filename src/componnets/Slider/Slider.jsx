import React, { useRef, useState, useEffect } from 'react';
import './Slider.css'; // Import external CSS for additional styling
import SliderImage from '../../assets/sliderImg.jpg';

const Slider = () => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    setIsIntersecting(true); // Set isIntersecting to true when the component mounts
  }, []); // Empty dependency array ensures this effect runs only once after the initial render

  return (
    <div className="slider-wrapper">

    <div className="relative">
      <div className="slider-bg"></div>
      <h1 className={`heading absolute top-16 text-white ${isIntersecting ? 'animate-bounce-in' : ''}`}>COLLECTABLES</h1>
      {/* Carousel */}
      <div className="flex items-center justify-center space-x-8 absolute bottom-[10%] left-0 right-0">
        <div className={`w-[25%] slider-card ${isIntersecting ? 'animate-bounce-in' : ''}`}>
          <img src={SliderImage} alt="Slider image 1" />
        </div>
        <div className={`w-[25%] slider-card ${isIntersecting ? 'animate-bounce-in' : ''}`}>
          <img src={SliderImage} alt="Slider image 2" />
        </div>
        <div className={`w-[25%] slider-card ${isIntersecting ? 'animate-bounce-in' : ''}`}>
          <img src={SliderImage} alt="Slider image 3" />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Slider;
