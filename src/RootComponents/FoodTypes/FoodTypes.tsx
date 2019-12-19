import React, { useState } from "react";
import "./FoodTypes.scss";
import { ApolloProvider, Query } from "react-apollo";
import { gql } from "apollo-boost";
import axios from "axios";
import { getDistanceFromLatLonInKm } from "../../utils/distanceCalculator";

import { client } from "../..";
import { EateryItem } from "../Eatery/EateryItem";
let eateriesData: any = {};

const EATERY_QUERY = gql`
  {
    eateries {
      id
      name
      description
      address
      city
      postCode

      phoneNumber
      businessHours
      foodType
      veganFriendly
      vegetarianFriendly
      halal
      kosher
      dogFriendly
      childFriendly
      ethical
      alcohol
      price
      website
    }
  }
`;

const FOODTYPE_QUERY = gql`
  query foodTypeQuery($foodType: String!) {
    getFoodType(foodType: $foodType) {
      id
      name
      description
      address
      city
      postCode
      phoneNumber
      businessHours
      foodType
      veganFriendly
      vegetarianFriendly
      halal
      kosher
      dogFriendly
      childFriendly
      ethical
      alcohol
      price
      website
    }
  }
`;

type foodTypeFilterProps = {
  foodTypeName: string;
  setFoodType(arg: string): void;
};

export const FoodTypes: React.FC = () => {
  const [foodType, setFoodType] = useState("");
  const usersPostcode = localStorage.getItem("postCode");
  const usersLatitude = localStorage.getItem("lat");
  const usersLongitude = localStorage.getItem("long");
  const [state, setState] = React.useState({
    userPostCode: "",
    eateryPostCode: ""
  });

  return (
    <div className="food-types">
      <ul className="food-type-list">
        <FoodTypeFilter foodTypeName={"Italian"} setFoodType={setFoodType} />
        <FoodTypeFilter foodTypeName={"Burger"} setFoodType={setFoodType} />
        <FoodTypeFilter foodTypeName={"Pizza"} setFoodType={setFoodType} />
        <FoodTypeFilter foodTypeName={"Chicken"} setFoodType={setFoodType} />
        <FoodTypeFilter foodTypeName={"Indian"} setFoodType={setFoodType} />
        <FoodTypeFilter foodTypeName={"Chinese"} setFoodType={setFoodType} />
        <FoodTypeFilter foodTypeName={"English"} setFoodType={setFoodType} />
        <FoodTypeFilter
          foodTypeName={"Fish & Chips"}
          setFoodType={setFoodType}
        />
        <FoodTypeFilter foodTypeName={"Kebab"} setFoodType={setFoodType} />
        <FoodTypeFilter foodTypeName={"Curry"} setFoodType={setFoodType} />
        <FoodTypeFilter foodTypeName={"Carribean"} setFoodType={setFoodType} />
        <FoodTypeFilter foodTypeName={"Vietnamese"} setFoodType={setFoodType} />
      </ul>
      <div className={"EateryWrapper"}>
        <ApolloProvider client={client}>
          <Query query={EATERY_QUERY}>
            {({ loading, data }: any) => {
              if (loading) return "Loading...";
              const { eateries } = data;

              // sorts by distance
              eateries.sort(
                (a: any, b: any) =>
                  parseFloat(a.distance) - parseFloat(b.distance)
              );
              return eateries.map((eatery: any) => {
                // User Location
                axios
                  .get("https://api.postcodes.io/postcodes/" + eatery.postCode)
                  .then(function(eateryLocation) {
                    // handle success
                    const eateryLocData = eateryLocation.data.result;
                    const eateryLocationRes = {
                      eateryLocation: {
                        lat: eateryLocData.latitude,
                        long: eateryLocData.longitude,
                        city: eateryLocData.nuts,
                        region: eateryLocData.region,
                        country: eateryLocData.country
                      }
                    };
                    Object.assign(eateriesData, eateryLocationRes);

                    // Calculates distance between user and eatery
                    var eateryDistance =
                      getDistanceFromLatLonInKm(
                        Number(usersLatitude),
                        Number(usersLongitude),
                        eateryLocData.latitude,
                        eateryLocData.longitude
                      ) / 1.609; //converts distance from km to miles

                    // Assigns calculated distance in miles to eatery.distance
                    eatery.distance = eateryDistance;
                  })
                  .catch(function(error: any) {
                    // handle error
                    console.log(error);
                  })
                  .finally(function() {
                    // always executed
                  });

                return (
                  <>
                    {eatery.foodType === foodType && (
                      <EateryItem
                        key={eatery.id}
                        id={eatery.id}
                        name={eatery.name}
                        description={eatery.description}
                        address={eatery.address}
                        city={eatery.city}
                        postCode={eatery.postCode}
                        businessHours={eatery.businessHours}
                        veganFriendly={
                          eatery.veganFriendly === true
                            ? "Vegan friendly"
                            : "Not Vegan friendly"
                        }
                        vegetarianFriendly={
                          eatery.vegetarianFriendly === true
                            ? "Vegetarian friendly"
                            : "Not Vegetarian friendly"
                        }
                        dogFriendly={
                          eatery.dogFriendly === true
                            ? "Dog friendly"
                            : "Not Dog friendly"
                        }
                        childFriendly={
                          eatery.childFriendly === true
                            ? "Child friendly"
                            : "Not Child friendly"
                        }
                        distanceFromUser={eatery.distance.toFixed(2)}
                      />
                    )}
                  </>
                );
              });
            }}
          </Query>
        </ApolloProvider>
      </div>
    </div>
  );
};

const FoodTypeFilter: React.FunctionComponent<foodTypeFilterProps> = props => {
  return (
    <li
      className="food-type-item"
      onClick={async () => {
        const { data } = await client.query({
          query: FOODTYPE_QUERY,
          variables: { foodType: props.foodTypeName }
        });
        props.setFoodType(props.foodTypeName);
      }}
    >
      {props.foodTypeName}
    </li>
  );
};

export default FoodTypes;
