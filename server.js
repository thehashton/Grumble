var express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const opn = require('opn');


var typeDefs = [`
    type Query {
        hello: String
    }

    schema {
        query: Query
    }
`];

var resolvers = {
    Query: {
        hello(root) {
            return 'world';
        }
    }
};

var app = express();

const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app });

app.listen(4000, () => 
    console.log('Now browse to localhost:4000/graphql'),
    opn('http://localhost:4000/graphql')
);