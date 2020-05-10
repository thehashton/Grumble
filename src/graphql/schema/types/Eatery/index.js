module.exports = `
  type Eatery {
    id: String!
    name: String!
    description: String
    businessHours: String
    address: String!
    city: String!
    postCode: String!
    phoneNumber: String
    foodType: String!
    veganFriendly: Boolean
    vegetarianFriendly: Boolean
    halal: Boolean
    kosher: Boolean
    dogFriendly: Boolean
    childFriendly: Boolean
    ethical: Boolean
    website: String
    alcohol: Boolean
    price: String
  }
  type Query {
    eatery(id: String!): Eatery
    eateries: [Eatery]
    getFoodType(foodType: String): [Eatery]
  }
  type Mutation {
    addEatery(id: String, name: String!, description: String!, businessHours: String, address: String!, city: String!, postCode: String!, phoneNumber: String, foodType: String!, veganFriendly: Boolean, vegetarianFriendly: Boolean, halal: Boolean, kosher: Boolean, dogFriendly: Boolean, childFriendly: Boolean, ethical: Boolean, alcohol: Boolean, price: String, website: String): Eatery
    editEatery(id: String, name: String, description: String, businessHours: String, address: String, city: String!, postCode: String!, phoneNumber: String, foodType: String, veganFriendly: Boolean, vegetarianFriendly: Boolean, halal: Boolean, kosher: Boolean, dogFriendly: Boolean, childFriendly: Boolean, ethical: Boolean, alcohol: Boolean, price: String, website: String): Eatery
    deleteEatery(id: String, name: String, description: String, businessHours: String, address: String, city: String!, postCode: String!, phoneNumber: String, foodType: String, veganFriendly: Boolean, vegetarianFriendly: Boolean, halal: Boolean, kosher: Boolean, dogFriendly: Boolean, childFriendly: Boolean, ethical: Boolean, alcohol: Boolean, price: String, website: String): Eatery
  }
`;
