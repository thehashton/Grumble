import { createStore } from "redux";
import rootReducer from "./reducers";

export const initialState = {
    user: null,
    isLoggedIn: false,
    currentEateryPostCode: [],
    currentEateryAddress: [],
    postCode: "",
    lat: "1.1",
    long: "1.1"
};

const store = createStore(rootReducer, initialState);
export default store;