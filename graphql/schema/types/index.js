import { mergeTypes } from "merge-graphql-schemas";

import User from "./User/";

const typeDefs = [User]; //add more types here in the future

export default mergeTypes(typeDefs, { all: true });