import React from 'react'
import './button.scss';
const noodles = '../assets/images/noodles.png';

export const HeroLogo: React.SFC = () => {

  return (
    <div className="hero-logo">
      <a href="/"><img src={noodles} alt="Place to Eat" className="logo" /></a>
    </div>
  )
};

export default HeroLogo;