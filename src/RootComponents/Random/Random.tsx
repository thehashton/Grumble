import React from "react";
import "./random.scss";
import { gql } from "apollo-boost";
import { ApolloProvider, Query } from "react-apollo";
import { client } from "../..";
import { EateryItem } from "../Eatery/EateryItem";

const EATERY_QUERY = gql`
  {
    eateries {
      id
      name
      address
      foodType
    }
  }
`;

export const Random: React.SFC = () => {
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

            return (
              <EateryItem
                key={randomEatery.id}
                id={randomEatery.id}
                name={randomEatery.name}
                address={randomEatery.address}
                foodType={randomEatery.foodType}
              />
            );
          }}
        </Query>
      </ApolloProvider>
    </div>
  );
};

export default Random;
