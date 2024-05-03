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

import "./buy.css";

const Buy = () => {
  const [isTextVisible, setIsTextVisible] = useState(false);
  const [isCatVisible, setIsCatVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const textElement = document.querySelector(".buy-text");
      const catElement = document.querySelector(".buy-cat");
      const textRect = textElement.getBoundingClientRect();
      const catRect = catElement.getBoundingClientRect();

      setIsTextVisible(textRect.top < window.innerHeight * 0.99);
      setIsCatVisible(catRect.top < window.innerHeight * 0.99);
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
        className={`buy-text absolute top-[2%] left-[7%] w-[30%] ${
          isTextVisible ? "animate-bounce-in" : ""
        }`}
      />
      <p className="paragraph absolute top-[11%] left-[15%] w-[42%] text-white ">
        With the opportunity for a first start the community has upgraded Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Mollitia dolorem
        similique, eaque voluptas tempore blanditiis quia autem asperiores,
        natus deleniti minima omnis nemo dolorum harum dolores neque dolore
        ratione quibusdam! Lorem ipsum dolor
      </p>
      <img
        src={BuyCat}
        alt="Cat"
        className={`buy-cat absolute top-[15%] right-[12%] w-[23%] ${
          isCatVisible ? "animate-bounce-in" : ""
        }`}
      />
      <button className="paragraph absolute top-[32%] left-[14%] w-[15%] bg-red-700 text-white p-3 flex items-center justify-center ">
        <img src={icon} alt="Link icon" className="mr-2 w-[14%]" />{" "}
        {/* Use the custom icon image */}
        Buy on Jupiter
      </button>
      <img
        src={power}
        alt="Cloud"
        className="absolute top-[27%] w-[95%] centered-image"
      />
      <img
        src={powerText}
        alt="Heading text"
        className={"absolute top-[36%] centered-image w-[40%]"}
      />
      <p className="paragraph absolute top-[45%] centered-image w-[55%] text-white text-lowercase ">
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
        className={"absolute top-[60%] centered-image w-[53%]"}
      />
      <p className="paragraph absolute top-[66%] centered-image w-[55%] text-white text-lowercase ">
        BRUH has a 2.5% transfer fee on all on-chain transfers. <br />
        <br />
        This fee will be used in 3 ways: <br />
        1% will be dedicated to burning $BRUH <br />
      </p>
      <div className="flex justify-center absolute left-1/2 transform -translate-x-1/2 top-[75%] centered-image w-[12%] ">
        <img src={asset1} alt="Asset 1" className="mx-12" />
        <img src={assest2} alt="Asset 2" className="mx-12" />
        <img src={assest3} alt="Asset 3" className="mx-12" />
        <img src={assest4} alt="Asset 4" className="mx-12" />
        <img src={assest5} alt="Asset 5" className="mx-12" />
      </div>
      <div className="flex justify-center absolute top-[83%] centered-image w-[15%] transform -translate-x-1/2">
        <img src={assest6} alt="Asset 6" className="mx-12" />
        <img src={assest2} alt="Asset 2" className="mx-12" />
        <img src={assest3} alt="Asset 3" className="mx-12" />
        <img src={assest4} alt="Asset 4" className="mx-12" />
        <img src={assest5} alt="Asset 5" className="mx-12" />
      </div>
    </div>
  );
};

export default Buy;
