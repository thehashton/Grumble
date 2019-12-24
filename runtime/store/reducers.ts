import { SET_POSTCODE, SET_EATERY_POSTCODE, SET_EATERY_ADDRESS } from "./constants/action-types";
import store, { initialState } from "./store";

function rootReducer(state = initialState, action: any) {
    if (action.type === SET_EATERY_POSTCODE) {
        return Object.assign({}, state, {
            currentEateryPostCode: action.payload
        });
    } else if (action.type === SET_EATERY_ADDRESS) {
        return Object.assign({}, state, {
            currentEateryAddress: action.payload
        });
    }
    return state;
}

export default rootReducer;