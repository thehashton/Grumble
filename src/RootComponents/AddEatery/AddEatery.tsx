import React, { Component } from 'react';
import './addEatery.scss';
import { ApolloProvider, Mutation } from 'react-apollo';
import { client } from '../..';
import { gql } from 'apollo-boost';

const EATERY_MUTATION = gql`
    mutation addEatery ($name: String!, $address: String!, $foodType: String!){
      addEatery(name: $name, address: $address, foodType: $foodType) {
        id
        name
        address
        foodType
      }
    }
  `;

export default class AddEatery extends Component {
  state = {
    id: '',
    name: '',
    address: '',
    foodType: ''
  }

    render() {
      const { name, address, foodType } = this.state
        return (
            <>
            <ApolloProvider client={client}>
              <h1>add eatery</h1>
                <form action="submit" className={'addEateryForm'}>
                <div className={"foodtype-wrapper"}>
                  <span>Food Type: </span>
                  <select name="foodType" id="foodType" value={foodType}  onChange={e => this.setState({ foodType: e.target.value })}>
                    <option value="Pizza">Pizza</option>
                    <option value="Chicken">Chicken</option>
                    <option value="Indian">Indian</option>
                    <option value="Chinese">Chinese</option>
                    <option value="English">English</option>
                    <option value="Chips">Fish & Chips</option>
                    <option value="Kebab">Kebab</option>
                    <option value="Carribean">Carribean</option>
                    <option value="Vietnamese">Vietnamese</option>
                    <option value="Thai">Thai</option>
                  </select>
                </div>
                  <p>Name: </p>
                  <input
                    type="text"
                    placeholder={"Name"}
                    value={name}
                    onChange={e => this.setState({ name: e.target.value })}
                    />
                  <p>Address: </p>
                  <input
                    type="text"
                    placeholder={"Address"}
                    value={address}
                    onChange={e => this.setState({ address: e.target.value })}
                    />

                  <Mutation mutation={EATERY_MUTATION} variables={{ name, address, foodType}}>
                  {(eateryMutation: any) =>
                    <button className={'button'} onClick={eateryMutation}>Submit</button>
                    }
                </Mutation>
                </form>
            </ApolloProvider>
            </>
        )
    }
}
