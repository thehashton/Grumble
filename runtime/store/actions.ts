import { SUBMIT_EATERY, SET_POSTCODE } from "./constants/action-types";


export const submitEatery = (eatery: any) => {
    return { type: SUBMIT_EATERY, eatery }
};

export const setPostCode = (postCode: string) => {
    return   {
        type: SET_POSTCODE,
        payload: postCode
    }
}