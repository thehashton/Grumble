import React from "react";
import "./EateryItem.scss";

export const EateryItem: React.SFC<any> = props => {
  return (
    <div className="Eatery" key={props.id}>
      <h3 className="name">{props.name}</h3>
      <p className="address">{props.address}</p>
      <p className="type">{props.foodType}</p>
      {props.foodType && (
        <img
          className={"foodTypeIcon"}
          src={"../assets/icons/" + props.foodType + ".svg"}
          alt={props.foodType}
          title={props.foodType}
        />
      )}
    </div>
  );
};
