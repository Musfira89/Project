import React from "react";
import "./origin.css";
import OriginText from "../../assets/origin-text.png";
import OriginCat from "../../assets/originCat.png";

const Origin = () => {
  return (
    <div className="origin-wrapper">
    <div className="relative">
      <div className="origin-bg"></div>

      {/* Heading text image */}
      <img
        src={OriginText}
        alt="Heading text"
        className="absolute top-[20%] left-[3%] w-[20%] "
      />
      <p className="paragraph absolute top-[38%] left-[13%] w-1/2 ">
        With the opportunity for a first start the community has upgraded Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Mollitia dolorem
        similique, eaque voluptas tempore blanditiis quia autem asperiores,
        natus deleniti minima omnis nemo dolorum harum dolores neque dolore
        ratione quibusdam! Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Mollitia dolorem similique, eaque voluptas tempore blanditiis quia
        autem asperiores, natus deleniti minima omnis nemo dolorum harum dolores
        neque dolore ratione quibusdam! eaque voluptas tempore blanditiis quia
        autem asperiores, natus deleniti minima omnis nemo dolorum
       
      </p>
      <img
        src={OriginCat}
        alt="Heading text"
        className="absolute top-[31%] right-[12%] w-[23%] "
      />
    </div>
    </div>
  );
};

export default Origin;
