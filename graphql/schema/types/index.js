import { mergeTypes } from "merge-graphql-schemas";

import User from "./User/";
import Eatery from "./Eatery/";

const typeDefs = [User, Eatery]; //add more types here in the future

export default mergeTypes(typeDefs, { all: true });