import React from "react";
import MapDirections from "../MapDirections";
import "./EateryItem.scss";

type EateryItemProps = {
  id?: any;
  name?: any;
  description?: any;
  address?: any;
  city?: any;
  postCode?: any;
  businessHours?: any;
  foodType?: any;
  dogFriendly?: any;
  childFriendly?: any;
  veganFriendly?: any;
  vegetarianFriendly?: any;
  distanceFromUser?: any;
  onClick?: any;
};

export const EateryItem: React.FC<EateryItemProps> = props => {
  return (
    <div className="Eatery" key={props.id}>
      <h3 className="name">{props.name}</h3>
      <p className="description">{props.description}</p>
      <p className="address">
        {props.address}, <span className="city">{props.city}</span>,{" "}
        <span className="postCode">{props.postCode}</span>
      </p>
      <p className="businessHours">{props.businessHours}</p>
      <p className="type">{props.foodType}</p>
      <p className="dogFriendly">{props.dogFriendly}</p>
      <p className="childFriendly">{props.childFriendly}</p>
      <p className="vegan">{props.veganFriendly}</p>
      <p className="vegaterian">{props.vegetarianFriendly}</p>
      <p className="distanceFromUser">{props.distanceFromUser} miles</p>
      <MapDirections
        eateryAddress={props.address}
        eateryPostCode={props.postCode}
      />
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
