declare global {
    interface navigator {}
}

export const getCurrentPosition = () => {
    navigator.geolocation.getCurrentPosition((e) => {
        localStorage.setItem("lat", e.coords.latitude.toString());
        localStorage.setItem("long", e.coords.longitude.toString());
    })
}

export default getCurrentPosition;