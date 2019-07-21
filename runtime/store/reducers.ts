import { SUBMIT_EATERY } from "./constants/action-types";
const initialState = {
    eateries: []
};
function rootReducer(state = initialState, action: any) {
    if (action.type === SUBMIT_EATERY) {
        return Object.assign({}, state, {
            articles: state.eateries.concat(action.payload)
        });
    }
    return state;
}
export default rootReducer;