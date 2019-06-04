export default `
  type Eatery {
    id: String!
    name: String!
    address: String!
    foodType: String!
    email: String!
    telephone: String!
  }
  type Query {
    eatery(id: String!): Eatery
    eateries: [Eatery]
  }
  type Mutation {
    addEatery(id: String!, name: String!, address: String!, foodType: String!, email: String, telephone: String): Eatery
    editEatery(id: String, name: String, address: String, foodType: String, email: String, telephone: String): Eatery
    deleteEatery(id: String, name: String, address: String, foodType: String, email: String, telephone: String): Eatery
  }
`;
