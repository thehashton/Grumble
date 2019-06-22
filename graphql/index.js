const express               = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const app = express();
const mongoose = require('mongoose');
const url = "mongodb://harry:Sophie777@ds052968.mlab.com:52968/lunch";
// const { typeDefs, resolvers } = require("./schema/index");

mongoose.Promise = global.Promise;
mongoose.connect(url, { useNewUrlParser: true });
mongoose.connection.once('open', () => console.log(`Connected to mongo at ${url}`));

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => 'hello',
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
});
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000/graphql`)
);