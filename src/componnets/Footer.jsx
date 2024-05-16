import React, { useState, useEffect } from "react";
import Left from "../assets/Lcloud.png";
import Right from "../assets/Rcloud.png";
import icon0 from "../assets/icon0.jpg";
import icon1 from "../assets/icon1.jpg";
import meme from "../assets/meme.png";
import tag from "../assets/tag.jpg";
import followText from "./../assets/fonts/follow.png";
import bullet from "../assets/bullets.png"; // Bullet image

const Footer = () => {
  const [isFollowTextVisible, setIsFollowTextVisible] = useState(false);
  const [isIcon0Visible, setIsIcon0Visible] = useState(false);
  const [isIcon1Visible, setIsIcon1Visible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const followTextElement = document.querySelector(".follow-text");
      const followTextRect = followTextElement.getBoundingClientRect();
      const isFollowTextVisible = followTextRect.top < window.innerHeight * 0.99;
  
      setIsFollowTextVisible(isFollowTextVisible);
    };
  
    window.addEventListener("scroll", handleScroll);
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  return (
    <div className="relative bg-black min-w-full h-96">
      <img src={Left} alt="Cloud" className="absolute top-[3%] w-[37%]" />
      <img
        src={Right}
        alt="Cat"
        className={"buy-cat absolute top-[2%] right-[2%] w-[37%]"}
      />
      {/*Left section 60% width */}
      <img
        src={followText}
        alt="headingTxt"
        className={`absolute top-[4%] w-[40%] left-[12%] follow-text ${
          isFollowTextVisible ? "animate-bounce-in" : ""
        }`}
      />
       <img src={bullet} alt="bullet image" className="absolute top-[15%] left-[15%] w-auto h-auto animate-bullet-in" />
      <img src={bullet} alt="bullet image" className="absolute top-[20%] left-[28%] w-8 h-auto animate-bullet-in" />
      <img src={bullet} alt="bullet image" className="absolute top-[15%] left-[45%] w-8 h-auto animate-bullet-in" />
      <img src={bullet} alt="bullet image" className="absolute top-[36%] left-[34%] w-10 h-auto animate-bullet-in" />
      <img
        src={icon0}
        alt="headingTxt"
        className={`absolute top-60 w-[7%] left-1/4 rounded-full icon-0 ${
          isIcon0Visible ? "animate-bounce-in" : ""
        }`}
      />
      <img
        src={icon1}
        alt="headingTxt"
        className={`absolute top-60 w-[7%] left-1/3 rounded-full icon-1 ${
          isIcon1Visible ? "animate-bounce-in" : ""
        }`}
      />
      {/*Right section 40% width */}
      <img
        src={meme}
        alt="headingTxt"
        className="absolute top-[8%] w-[16%] right-[22%] "
      />
      <img
        src={tag}
        alt="headingTxt"
        className="absolute top-60 w-[15%] right-[23%]"
      />
    </div>
  );
};

export default Footer;
