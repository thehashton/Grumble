const ApolloServerLambda = require('apollo-server-lambda').ApolloServer();

const typeDefs = require("./schema/types");
const resolvers = require("./schema/resolvers");

const createLambdaServer = () => {
    return new ApolloServerLambda({
      typeDefs,
      resolvers,
      introspection: true,
      playground: true,
    });
}

module.exports = createLambdaServer;
