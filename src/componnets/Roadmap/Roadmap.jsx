import React, { useState, useEffect } from 'react';
import tokenomicsText from '../../assets/fonts/tokenomics.png';
import roadmap from '../../assets/Roadmap.png';
import roadmap1 from '../../assets/roadmap1.png';
import roadmapText from '../../assets/fonts/roadmap.png';
import roadImg1 from '../../assets/roadmap1.jpg';
import roadImg2 from '../../assets/roadmap2.jpg';
import roadImg3 from '../../assets/roadmap3.jpg';
import './roadmap.css';

const Roadmap = () => {
  const [isTextVisible, setIsTextVisible] = useState(false);
  const [isRoadmapTextVisible, setIsRoadmapTextVisible] = useState(false);
  const [isCardAnimationVisible, setIsCardAnimationVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const tokenomicsElement = document.querySelector('.tokenomics-text');
      const roadmapTextElement = document.querySelector('.roadmap-text');

      const tokenomicsRect = tokenomicsElement.getBoundingClientRect();
      const roadmapTextRect = roadmapTextElement.getBoundingClientRect();

      setIsTextVisible(tokenomicsRect.top < window.innerHeight * 0.99);
      setIsRoadmapTextVisible(roadmapTextRect.top < window.innerHeight * 0.99);

      // Check if the user has scrolled and reached 90% of the page
      if (window.scrollY + window.innerHeight >= document.body.scrollHeight * 0.9) {
        setIsCardAnimationVisible(true); // Set isCardAnimationVisible to true
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative">
      <div className="roadmapBg-img"></div>
      <img
        src={tokenomicsText}
        alt="Heading text"
        className={`tokenomics-text absolute top-[2%] left-[15%] w-[31%] ${isTextVisible ? 'animate-bounce-in' : ''}`}
      />
      <div className="flex flex-col items-center absolute top-40 left-1/2 transform -translate-x-1/2 space-y-6">
        <div className="flex space-x-6">
          <div className="border-4 border-yellow-500 w-80 h-24 bg-transparent relative flex items-center justify-start">
            <div className="ml-4 text-white paragraph">Ticket</div>
          </div>
          <div className="border-4 border-yellow-500 w-80 h-24 bg-transparent relative flex items-center justify-start">
            <div className="ml-4 text-white paragraph">Tax 2.1%</div>
          </div>
          <div className="border-4 border-yellow-500 w-80 h-24 bg-transparent relative flex items-center justify-start">
            <div className="ml-4 text-white paragraph">Burn 2.1%</div>
          </div>
        </div>
        <div className="border-4 border-yellow-500 w-full h-24 bg-transparent relative flex items-center justify-start">
          <div className="ml-4 text-white paragraph">Token Access 2.1%</div>
        </div>
      </div>
      <img
        src={roadmap}
        alt="roadmapBg"
        className="absolute top-[37%] w-[100%] "
      />
      <img
        src={roadmap1}
        alt="roadmap"
        className="absolute top-[38%] w-[92%] centered-image"
      />
      <img
        src={roadmapText}
        alt="Heading text"
        className={`roadmap-text absolute top-[49%] left-[14%] w-[25%] ${isRoadmapTextVisible ? 'animate-bounce-in' : ''}`}
      />
      <div className="flex items-center justify-center space-x-8 top-[60%] absolute left-0 right-0">
        <div className={`w-[22%] roadmap-card ${isCardAnimationVisible ? 'animate-bounce-in' : ''}`}>
          <img src={roadImg1} alt="Slider image 1" />
        </div>
        {isCardAnimationVisible && (
          <>
            <div className={`w-[22%] roadmap-card animate-delay-1`}>
              <img src={roadImg2} alt="Slider image 2" />
            </div>
            <div className={`w-[22%] roadmap-card animate-delay-2`}>
              <img src={roadImg3} alt="Slider image 3" />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Roadmap;
