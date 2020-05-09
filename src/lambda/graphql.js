const { ApolloServer } = require('apollo-server-lambda');

const { typeDefs } = require('../../graphql/schema/types');
const { resolvers } =require('../../graphql/schema/resolvers');

const lambda = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
  introspection: true
});

exports.handler = lambda.createHandler({
  cors: {
    origin: '*',
    credentials: true
  }
});