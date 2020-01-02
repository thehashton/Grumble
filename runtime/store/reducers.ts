import { SET_EATERY_POSTCODE, SET_EATERY_ADDRESS, SET_USER_LAT, SET_USER_LONG } from "./constants/action-types";
import { initialState } from "./store";

function rootReducer(state = initialState, action: any) {
    if (action.type === SET_EATERY_POSTCODE) {
        return Object.assign({}, state, {
            currentEateryPostCode: action.payload
        });
    } else if (action.type === SET_EATERY_ADDRESS) {
        return Object.assign({}, state, {
            currentEateryAddress: action.payload
        });
    } else if (action.type === SET_USER_LAT) {
        return Object.assign({}, state, {
            currentUserLat: action.payload
        });
    } else if (action.type === SET_USER_LONG) {
        return Object.assign({}, state, {
            currentUserLong: action.payload
        });
    }
    return state;
}

export default rootReducer;