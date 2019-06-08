import React from 'react'
import './FoodTypes.scss';
export const FoodTypes: React.SFC = () => {

  //TODO add GraphQL food types data
  return (
    <div className="food-types">
          <ul className="food-type-list">
            <li className="food-type-item">Pizza</li>
            <li className="food-type-item">Chicken</li>
            <li className="food-type-item">Indian</li>
            <li className="food-type-item">Chinese</li>
            <li className="food-type-item">English</li>
            <li className="food-type-item">Fish & Chips</li>
            <li className="food-type-item">Kebab</li>
            <li className="food-type-item">Curry</li>
            <li className="food-type-item">Carribean</li>
          </ul>
    </div>
  )

};

export default FoodTypes;
