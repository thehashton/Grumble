import { mergeTypes } from "merge-graphql-schemas";

import User from "./User/";
import Eatery from "./Eatery/";

const typeDefs = [User, Eatery];

export default mergeTypes(typeDefs, { all: true });