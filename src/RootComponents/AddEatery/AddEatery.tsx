import React, { Component } from 'react';
import { Mutation } from "react-apollo";
import gql from 'graphql-tag';

const ADD_EATERY = gql`
  mutation {
    addEatery(id: "", name: "Hungry Pumpkin", address:"Stoney Street", foodType: "Italian") {
      id
      name
      address
      foodType
    }
  }
`;

const GET_EATERY = gql`
    query {
        eateries {
        id
        name
        address
        foodType
    }
  }
`;


export default class AddEatery extends Component {
    render() {
        let input: any;
        return (
            <div>
                <h1>add eatery</h1>
                <Mutation mutation={ADD_EATERY}
                update={(cache: any, { data: { addEatery } }: any) => {
                    const { eateries } = cache.readQuery({ query: GET_EATERY });
                    cache.writeQuery({
                      query: GET_EATERY,
                      data: { todos: eateries.concat([addEatery]) },
                    });
                  }}
                >
                    {(addEatery: any, { data }: any) => (
                        <div>
                        <form
                            onSubmit={e => {
                            e.preventDefault();
                            addEatery({ variables: { type: input.value } });
                            input.value = "";
                            }}
                        >
                            <input
                            ref={node => {
                                input = node;
                            }}
                            />
                            <button type="submit">Add Todo</button>
                        </form>
                        </div>
                    )}
                </Mutation>
            </div>
        )
    }
}
