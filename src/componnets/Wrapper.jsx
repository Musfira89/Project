// WrapperComponent.jsx
import React from 'react';
import Origin from './Origin/Origin';
import Slider from './Slider/Slider';
import Token from './Token/Token';
import Buy from './Buy/Buy';

const Wrapper = () => {
  return (
    <div className="relative">
   
      <Slider />
      <Origin />
      <Token />

    </div>
  );
};

export default Wrapper;
