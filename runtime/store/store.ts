import { createStore } from "redux";
import rootReducer from "./reducers";

export const initialState = {
    user: null,
    isLoggedIn: false,
    currentEateryPostCode: [],
    currentEateryAddress: [],
    postCode: ""
};

const store = createStore(rootReducer, initialState);
export default store;