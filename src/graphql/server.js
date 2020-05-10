const ApolloServerLambda = require('apollo-server-lambda').ApolloServer;
const { gql } = require('apollo-server-lambda');

const typeDefs = require("./schema/types");
const resolvers = require("./schema/resolvers");

require('@babel/polyfill/noConflict');

export const createLambdaServer = () => {
    return new ApolloServerLambda({
      typeDefs,
      resolvers,
      introspection: true,
      playground: true,
    });
}