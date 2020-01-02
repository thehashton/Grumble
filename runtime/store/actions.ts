import { SUBMIT_EATERY, SET_POSTCODE, SET_EATERY_POSTCODE, SET_EATERY_ADDRESS, SET_USER_LAT, SET_USER_LONG } from "./constants/action-types";

export const submitEatery = (eatery: any) => {
    return { type: SUBMIT_EATERY, eatery }
};

export const setPostCode = (postCode: string) => {
    return   {
        type: SET_POSTCODE,
        payload: postCode
    }
}

export const setEateryPostCode = (eateryPostCode: any) => {
    return   {
        type: SET_EATERY_POSTCODE,
        payload: eateryPostCode
    }
}

export const setEateryAddress = (eateryAddress: any) => {
    return   {
        type: SET_EATERY_ADDRESS,
        payload: eateryAddress
    }
}

export const setUserLat = (userLat: string) => {
    return   {
        type: SET_USER_LAT,
        payload: userLat
    }
}

export const setUserLong = (userLong: string) => {
    return   {
        type: SET_USER_LONG,
        payload: userLong
    }
}