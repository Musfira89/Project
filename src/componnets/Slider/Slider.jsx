import React, { useRef, useState, useEffect } from 'react';
import './Slider.css'; // Import external CSS for additional styling
import SliderImage from '../../assets/sliderImg.jpg';

const Slider = () => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [shouldFlip, setShouldFlip] = useState(false);

  const containerRef = useRef(null);

  useEffect(() => {
    const options = {
      threshold: 0.9 // Trigger when 90% of the container is visible
    };
  
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setShouldFlip(true);
        observer.unobserve(entry.target); // Stop observing once flipped
      }
    }, options);
  
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
  
    return () => observer.disconnect(); // Cleanup
  }, []);
  

  return (
    <div className="slider-wrapper">
      <div className="relative">
        <div className="slider-bg"></div>
        <h1 className={`heading absolute top-16 text-white ${isIntersecting ? 'animate-bounce-in' : ''}`}>COLLECTABLES</h1>
        {/* Carousel */}
        <div ref={containerRef} className="flex items-center justify-center space-x-8 absolute top-[30%] left-0 right-0">
  <div className={`w-[25%] slider-card ${shouldFlip ? 'flip' : ''} ${shouldFlip ? 'flip-again' : ''}`}>
    <div className="front-face">
      <img src={SliderImage} alt="Slider image 1" />
    </div>
    <div className="back-face"></div> {/* Add a div for the back face */}
  </div>
  <div className={`w-[25%] slider-card ${shouldFlip ? 'flip' : ''} ${shouldFlip ? 'flip-again' : ''}`}>
    <div className="front-face">
      <img src={SliderImage} alt="Slider image 1" />
    </div>
    <div className="back-face"></div> {/* Add a div for the back face */}
  </div>
  <div className={`w-[25%] slider-card ${shouldFlip ? 'flip' : ''} ${shouldFlip ? 'flip-again' : ''}`}>
    <div className="front-face">
      <img src={SliderImage} alt="Slider image 1" />
    </div>
    <div className="back-face"></div> {/* Add a div for the back face */}
  </div>
  </div>


      </div>
    </div>
  );
};

export default Slider;
