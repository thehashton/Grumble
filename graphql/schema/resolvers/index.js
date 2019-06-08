import { mergeResolvers } from "merge-graphql-schemas";

import User from "./User/";
import Eatery from "./Eatery/";

const resolvers = [User, Eatery];

export default mergeResolvers(resolvers);