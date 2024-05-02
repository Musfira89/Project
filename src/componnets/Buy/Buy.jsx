import React from 'react'
import BuyCloud from '../../assets/buy.png';
import './buy.css';

const Buy = () => {
  return (
    <div className="relative">
      <div className="background"></div>
      <img
        src={BuyCloud}
        alt="Heading text"
        className="absolute top-[16%] w-[68%]"
      />
      </div>
  )
}

export default Buy
