import React from "react";
import "./EateryItem.scss";

export const EateryItem: React.SFC<any> = props => {
  return (
    <div className="Eatery" key={props.id}>
      <h3 className="name">{props.name}</h3>
      <p className="address">{props.address}</p>
      <p className="type">{props.foodType}</p>
    </div>
  );
};
