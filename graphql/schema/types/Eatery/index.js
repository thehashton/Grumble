module.exports = `
  type Eatery {
    id: String!
    name: String!
    address: String!
    foodType: String!
  }
  type Query {
    eatery(id: String!): Eatery
    eateries: [Eatery]
  }
  type Mutation {
    addEatery(id: String, name: String!, address: String!, foodType: String!): Eatery
    editEatery(id: String, name: String, address: String, foodType: String): Eatery
    deleteEatery(id: String, name: String, address: String, foodType: String): Eatery
    getFoodType(foodType: String): [Eatery]
  }
`;
