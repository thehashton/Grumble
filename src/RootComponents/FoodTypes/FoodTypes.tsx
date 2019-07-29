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
  foodTypeName: string;
  setFoodType(arg: string): void;
};

export const FoodTypes: React.SFC = () => {
  const [foodType, setFoodType] = useState("");
  return (
    <div className="food-types">
      <ul className="food-type-list">
        <FoodTypeFilter foodTypeName={"Italian"} setFoodType={setFoodType} />
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
        <FoodTypeFilter foodTypeName={"Caribbean"} setFoodType={setFoodType} />
      </ul>
      <div className={"EateryWrapper"}>
        <ApolloProvider client={client}>
          <Query query={EATERY_QUERY}>
            {({ loading, data }: any) => {
              if (loading) return "Loading...";
              const { eateries } = data;
              return eateries.map((eatery: any) => (
                <>
                  {eatery.foodType === foodType && (
                    <EateryItem
                      key={eatery.id}
                      id={eatery.id}
                      name={eatery.name}
                      address={eatery.address}
                      foodType={eatery.foodType}
                    />
                  )}
                </>
              ));
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
