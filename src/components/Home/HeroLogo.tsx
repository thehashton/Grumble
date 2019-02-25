import React from 'react'
import './button.scss';
import { Link, BrowserRouter as BrowserRouter } from 'react-router-dom';
const noodles = '../assets/images/noodles.png';

export const HeroLogo: React.SFC = () => { 

  return (
    <BrowserRouter>
      <div className="hero-logo">
      <Link to="/"><img src={noodles} alt="Place to Eat" className="logo"/></Link>
      </div>
    </BrowserRouter>
  )
};

export default HeroLogo;