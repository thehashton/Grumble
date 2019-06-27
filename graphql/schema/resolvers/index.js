const { mergeResolvers } = require("merge-graphql-schemas");

const User = require("./User/");
const Eatery = require("./Eatery/");

const resolvers = [User, Eatery];

module.exports = mergeResolvers(resolvers);
