import React, { useState, useEffect } from "react";
import BuyCloud from "../../assets/buy.png";
import BuyText from "../../assets/fonts/buy.png";
import BuyCat from "../../assets/buyCat.png";
import icon from "../../assets/link.png";
import power from "../../assets/power.png";
import powerText from "../../assets/fonts/power.png";
import communityText from "../../assets/fonts/comm.png";
import asset1 from "../../assets/addional/c1.png";
import assest2 from "../../assets/addional/c2.png";
import assest3 from "../../assets/addional/c3.png";
import assest4 from "../../assets/addional/c4.png";
import assest5 from "../../assets/addional/c5.png";
import assest6 from "../../assets/addional/c6.png";
import assest7 from "../../assets/addional/c7.png";
import assest8 from "../../assets/addional/c8.png";
import assest9 from "../../assets/addional/c9.png";
import assest10 from "../../assets/addional/c10.png";

import "./buy.css";

const Buy = () => {
  const [isTextVisible, setIsTextVisible] = useState(false);
  const [isCatVisible, setIsCatVisible] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const textElement = document.querySelector(".buy-text");
      const catElement = document.querySelector(".buy-cat");
      const textRect = textElement.getBoundingClientRect();
      const catRect = catElement.getBoundingClientRect();
  
      setIsTextVisible(textRect.top < window.innerHeight * 0.70);
      setIsCatVisible(catRect.top < window.innerHeight * 0.70);
  
      // If user has scrolled and reached 70% of the page
      if (window.scrollY + window.innerHeight >= document.body.scrollHeight * 0.70) {
        setIsVisible(true); // Set isVisible to true
      }
    };
  
    window.addEventListener("scroll", handleScroll);
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
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
        className={`buy-text absolute top-[2%] left-[8%] w-[31%] ${
          isTextVisible ? "animate-bounce-in" : ""
        }`}
      />
      <p className="paragraph absolute top-[12%] left-[16%] w-[41%] text-white ">
        To buy $BRUH download phantom wallet, puchase $SOL from an exchange or bridge $SOL and card itn
        to your Phantom wallet then buy $BRUH on either Jupiter or FluxBeam.
        You will also be able to buy $BRUH on exchanges but you are early BRUH.
        
      </p>
      <img
        src={BuyCat}
        alt="Cat"
        className={`buy-cat absolute top-[3%] right-[9%] w-[23%] ${
          isCatVisible ? "animate-bounce-in" : ""
        }`}
      />
      <button className="absolute top-[34%] left-[15%] w-[16%] bg-red-700 text-white p-3 flex items-center justify-center font-bold text-lg" style={{ fontFamily: "'Comic Sans MS', sans-serif" }}>
  <img src={icon} alt="Link icon" className="mr-2 w-[14%]" />{" "}
  {/* Use the custom icon image */}
  BUY ON JUPITER
</button>

      <img
        src={power}
        alt="Cloud"
        className="absolute top-[32%] w-[95%] centered-image"
      />
      <img
        src={powerText}
        alt="Heading text"
        className={"absolute top-[42%] centered-image w-[40%]"}
      />
      <p className="paragraph absolute top-[52%] centered-image w-[57%] text-white ">
        BRUH has a 2.5% transfer fee on all on-chain transfers. <br />
        <br />
        This fee will be used in 3 ways: <br />
        1% will be dedicated to burning $BRUH <br />
        1% will go towards the buying and burning off 10 Solana tokens voted on
        by our community. <br />
        0.5% will go back into the project. This will be for prizes, rewards,
        staking, and to find builders looking to become our new sidekicks.
      </p>
      <img
        src={communityText}
        alt="Heading text"
        className={"absolute top-[70%] centered-image w-[53%]"}
      />
  <p className="paragraph absolute top-[80%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12 text-white text-lowercase text-center">
  The first 10 frens that our community will vote on and support are : <br />
  Static: JUP, WEN, BOK, FLUXB, All <br />
  Voted on by the community: BERN, WIF, CHONKY, GUAZ, BRUH (double burn) <br />
</p>

  
      {isVisible && (
        <>
          <div className="flex justify-center absolute left-1/2 transform -translate-x-1/2 top-[86%] centered-image w-[6%] ">
            <img src={asset1} alt="Asset 1" className="mx-12 animate-bounce-in" />
            <img src={assest2} alt="Asset 2" className="mx-12 animate-bounce-in" />
            <img src={assest3} alt="Asset 3" className="mx-12 animate-bounce-in" />
            <img src={assest4} alt="Asset 4" className="mx-12 animate-bounce-in" />
            <img src={assest5} alt="Asset 5" className="mx-12 animate-bounce-in" />
          </div>
          <div className="flex justify-center absolute top-[92%] centered-image w-[6%]">
            <img src={assest6} alt="Asset 6" className="mx-12 animate-bounce-in" />
            <img src={assest7} alt="Asset 2" className="mx-12 animate-bounce-in" />
            <img src={assest8} alt="Asset 3" className="mx-12 animate-bounce-in" />
            <img src={assest9} alt="Asset 4" className="mx-12 animate-bounce-in" />
            <img src={assest10} alt="Asset 5" className="mx-12 animate-bounce-in" />
          </div>
        </>
      )}
    </div>
  );
};

export default Buy;
