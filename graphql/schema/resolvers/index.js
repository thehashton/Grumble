const { mergeResolvers } = require("merge-graphql-schemas");

const User = require("./User");
const Auth = require("./Auth/auth");
const Eatery = require("./Eatery");

const resolvers = [User, Eatery];

module.exports = mergeResolvers(resolvers);