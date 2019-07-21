import { SUBMIT_EATERY } from "./constants/action-types";


export function submitEatery(payload: any) {
    return { type: SUBMIT_EATERY, payload }
};