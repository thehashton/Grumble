import React from "react";
import getGoogleDirections, { eateryMapUrlParam } from "./getGoogleDirections";
import "./MapDirections.scss";
import store from "../../../runtime/store/store";
import {
  setEateryPostCode,
  setEateryAddress
} from "../../../runtime/store/actions";
const userPostCode = localStorage.getItem("postCode");

type MapDirectionsProps = {
  eateryAddress: any;
  eateryPostCode: any;
};

const MapDirectionsClick = (eateryAddress: any, eateryPostCode: any) => {
  store.dispatch(setEateryPostCode(eateryPostCode));
  store.dispatch(setEateryAddress(eateryAddress));
  getGoogleDirections(
    userPostCode,
    store.getState().currentEateryAddress,
    store.getState().currentEateryPostCode
  );
};

export const MapDirections: React.FC<MapDirectionsProps> = props => {
  return (
    <div className={"MapDirections"}>
      <button
        type="button"
        className={"MapDirections"}
        onMouseEnter={() =>
          MapDirectionsClick(props.eateryAddress, props.eateryPostCode)
        }
        onClick={() => window.open(eateryMapUrlParam, "_blank")}
      >
        Directions
      </button>
    </div>
  );
};

export default MapDirections;
