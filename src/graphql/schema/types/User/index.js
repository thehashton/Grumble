module.exports = `
  type User {
    id: ID!
    email: String!
    password: String
  }

  type AuthData {
    userId: ID!
    token: String!
    tokenExpiration: Int!
  }

  input UserInput {
    email: String!
    password: String!
  }

  type Query {
    user(id: String!): User
    users: [User]
    login(email: String!, password: String!): AuthData!
  }

  type RootMutation {
    createUser(userInput: UserInput): User
  }

  type Mutation {
    createUser(id: String, email: String!, password: String!): User
    editUser(id: String, email: String): User
    deleteUser(id: String, email: String): User
  }
`;
