const { ApolloServer } = require('apollo-server-lambda');

const { typeDefs } = require('./lib/typeDefs');
const { resolvers } =require('./lib/resolvers');

const lambda = newApolloServer({
  typeDefs,
  resolvers,
  playground: true,
  introspection: true
);

exports.handler = lambda.createHandler({
  cors: {
    origin: '*',
    credentials: true
  }
});