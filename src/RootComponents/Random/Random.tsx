import React from "react";
import "./random.scss";
import { gql } from "apollo-boost";
import axios from "axios";
import { ApolloProvider, Query } from "react-apollo";

import { client } from "../..";
import { EateryItem } from "../Eatery/EateryItem";
import { getDistanceFromLatLonInKm } from "../../utils/distanceCalculator";

const uuidv4 = require("uuid/v4");
export let eateryGlobalData = {};

const EATERY_QUERY = gql`
  {
    eateries {
      id
      name
      address
      city
      postCode
      foodType
    }
  }
`;

export const Random: React.SFC = () => {
  const usersLatitude = localStorage.getItem("lat");
  const usersLongitude = localStorage.getItem("long");
  let eateriesData: any = {};

  return (
    <div className="random">
      <ApolloProvider client={client}>
        <Query query={EATERY_QUERY}>
          {({ loading, data }: any) => {
            if (loading) return "Loading...";
            const { eateries } = data;
            const randomItem = function(obj: any) {
              var keys = Object.keys(obj);
              return obj[keys[(keys.length * Math.random()) << 0]];
            };
            const randomEatery = randomItem(eateries);

            eateryGlobalData = randomEatery;

            // User Location
            axios
              .get(
                "https://api.postcodes.io/postcodes/" + randomEatery.postCode
              )
              .then(function(eateryLocation: any) {
                // handle success
                const eateryLocData = eateryLocation.data.result;
                const eateryLocationRes = {
                  eateryLocation: {
                    lat: eateryLocData.latitude,
                    long: eateryLocData.longitude,
                    postCode: eateryLocData.postcode,
                    city: eateryLocData.nuts,
                    region: eateryLocData.region,
                    country: eateryLocData.country
                  }
                };
                Object.assign(eateriesData, eateryLocationRes);

                // Calculates distance between user and eatery
                let eateryDistance = (
                  getDistanceFromLatLonInKm(
                    Number(usersLatitude),
                    Number(usersLongitude),
                    eateryLocData.latitude,
                    eateryLocData.longitude
                  ) / 1.609
                ).toFixed(2); //converts distance from km to miles

                // Assigns calculated distance in miles to eatery.distance
                randomEatery.distance = eateryDistance;
              })
              .catch(function(error: any) {
                // handle error
                console.log(error);
              })
              .finally(function() {
                // always executed
              });

            return (
              <EateryItem
                key={uuidv4()}
                id={randomEatery.id}
                name={randomEatery.name}
                address={randomEatery.address}
                city={randomEatery.city}
                postCode={randomEatery.postCode}
                foodType={randomEatery.foodType}
                distanceFromUser={randomEatery.distance}
              />
            );
          }}
        </Query>
      </ApolloProvider>
    </div>
  );
};

export default Random;
