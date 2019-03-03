import React from 'react'
import './FoodTypes.scss';

export const FoodTypes: React.SFC = () => { 

  return (
    <div className="food-types">
        <h1>Food Types</h1>
<ul className="food-types">
  <li className="food-type">Pizza</li>
  <li className="food-type">Chicken</li>
  <li className="food-type">Indian</li>
  <li className="food-type">Chinese</li>
  <li className="food-type">English</li>
</ul>
    </div>
  )
};

export default FoodTypes;
