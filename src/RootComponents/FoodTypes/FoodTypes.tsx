import React, { Component, useState } from "react";
import "./FoodTypes.scss";
import { ApolloProvider, Query } from "react-apollo";
import { gql } from "apollo-boost";

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

const FOODTYPE_QUERY = gql`
  query foodTypeQuery($foodType: String!) {
    getFoodType(foodType: $foodType) {
      id
      name
      address
      foodType
    }
  }
`;

type foodTypeFilterProps = {
  foodTypeName: String;
};

export const FoodTypes: React.SFC = () => {
  return (
    <div className="food-types">
      <ul className="food-type-list">
        <FoodTypeFilter foodTypeName={"Italian"} />
        <FoodTypeFilter foodTypeName={"Pizza"} />
        <FoodTypeFilter foodTypeName={"Chicken"} />
        <FoodTypeFilter foodTypeName={"Indian"} />
        <FoodTypeFilter foodTypeName={"Chinese"} />
        <FoodTypeFilter foodTypeName={"English"} />
        <FoodTypeFilter foodTypeName={"Fish & Chips"} />
        <FoodTypeFilter foodTypeName={"Kebab"} />
        <FoodTypeFilter foodTypeName={"Curry"} />
        <FoodTypeFilter foodTypeName={"Caribbean"} />
      </ul>
      <div className={"EateryWrapper"}>
        <ApolloProvider client={client}>
          <Query query={EATERY_QUERY}>
            {({ loading, data }: any) => {
              if (loading) return "Loading...";
              const { eateries } = data;
              return eateries.map((eatery: any) => (
                <EateryItem
                  key={eatery.id}
                  id={eatery.id}
                  name={eatery.name}
                  address={eatery.address}
                  foodType={eatery.foodType}
                />
              ));
            }}
          </Query>
        </ApolloProvider>
      </div>
    </div>
  );
};

const FoodTypeFilter: React.FunctionComponent<foodTypeFilterProps> = props => {
  const [foodType, setFoodType] = useState(props.foodTypeName);
  return (
    <li
      className="food-type-item"
      onClick={async () => {
        const { data } = await client.query({
          query: FOODTYPE_QUERY,
          variables: { foodType: props.foodTypeName }
        });
        setFoodType(foodType);
      }}
    >
      {foodType}
    </li>
  );
};

export default FoodTypes;
