const { mergeTypes } = require("merge-graphql-schemas");

const User = require("./User/");
const Eatery = require("./Eatery/");

const typeDefs = [User, Eatery];

module.exports = mergeTypes(typeDefs, { all: true });