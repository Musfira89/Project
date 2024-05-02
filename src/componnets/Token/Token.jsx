import React from 'react'
import TokenText from '../../assets/fonts/token.png';
import TokenCloud from '../../assets/token0.png'
import './token.css'

const Token = () => {
  return (
    <div className="relative">
      <div className="token-bg "></div>
      <img
        src={TokenText}
        alt="Heading text"
        className="absolute top-[7%] w-[55%] centered-image "
      />
       <img
        src={TokenCloud}
        alt="Heading text"
        className="absolute top-[16%] w-[68%] centered-image "
      />
       <p className="paragraph absolute top-[38%] left-[28%] w-1/2 ">
         
      </p>

    </div>
  )
}

export default Token
