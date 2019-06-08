import React from 'react'
import './FoodTypes.scss';
import { ApolloProvider, Query } from "react-apollo";
import { gql } from 'apollo-boost';
import { client } from '../..';

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

          <ApolloProvider client={client}>
            <Query query={EATERY_QUERY}>
              {({loading, data} : any) => {
                if (loading) return "Loading...";
                const { eateries } = data;
                return eateries.map((eatery: any) => <h1>{eatery.name}</h1>)
              }}
            </Query>
          </ApolloProvider>
    </div>
  )

};

export default FoodTypes;
