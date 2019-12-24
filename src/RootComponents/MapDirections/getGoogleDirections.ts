export let eateryMapUrlParam: string;

const getGoogleDirections = (userPostCode: any, currentEateryAddress: any, currentEateryPostCode: any ) => {
    eateryMapUrlParam = `https://www.google.com/maps/dir/${userPostCode}/${currentEateryAddress}+${currentEateryPostCode}`.replace(/\s/g, '+');
}

export default getGoogleDirections;