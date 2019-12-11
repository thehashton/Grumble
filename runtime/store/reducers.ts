import { SET_POSTCODE } from "./constants/action-types";

const initialState = {
    eateries: [],
    postCode: ""
};
function rootReducer(state = initialState, action: any) {
    if (action.type === SET_POSTCODE) {
        return Object.assign({}, state, {
            postCode: action.payload
        });
    }
    return state;
}
export default rootReducer;