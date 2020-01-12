import React from "react";
import "./PostCodeChecker.scss";
import axios from "axios";

import store from "../../../runtime/store/store";
import { setPostCode } from "../../../runtime/store/actions";
import Locator from "../../components/Global/Locator";
import { userLocationCookie } from "../../utils/userLocationCookie";

// User Post Code from Local Storage
export const userPostCode = localStorage.getItem("postCode");

export const PostCodeChecker: React.FC = () => {
  const usersPostcode = localStorage.getItem("postCode");
  const [state, setState] = React.useState({
    userPostCode: ""
  });

  const enterPostCode = () => {};

  function handleChange(evt: any) {
    setState({ userPostCode: evt.target.value });
  }

  let userLocObj: any = {};

  axios
    .get("https://api.postcodes.io/postcodes/" + state.userPostCode)
    .then(function(userLocation) {
      // handle success
      const usrLocData = userLocation.data.result;
      const userLocationRes = {
        userLocation: {
          lat: usrLocData.latitude,
          long: usrLocData.longitude,
          city: usrLocData.nuts,
          region: usrLocData.region,
          country: usrLocData.country
        }
      };
      Object.assign(userLocObj, userLocationRes);
      localStorage.setItem("lat", userLocationRes.userLocation.lat);
      localStorage.setItem("long", userLocationRes.userLocation.long);
    })
    .catch(function(error: any) {
      // handle error
      console.log(error);
    })
    .finally(function() {
      // always executed
    });

  function submitPostCode(event: any) {
    event.preventDefault();
    store.dispatch(setPostCode(state.userPostCode));
    localStorage.setItem("postCode", state.userPostCode);
    userLocationCookie(localStorage.getItem("postCode"));

    // Gives 5 seconds for lat/long to come back from postcodes.io API
    setTimeout(() => {
      window.location.reload();
    }, 3000);
  }
  return (
    <>
      {localStorage.getItem("postCode") === null ? (
        <form action="" onSubmit={submitPostCode} className={"PostCodeChecker"}>
          <input
            value={state.userPostCode}
            type="text"
            className={"input"}
            onChange={handleChange}
          />
          <button className={"button"} onClick={enterPostCode} type="submit">
            Check
          </button>
          <Locator />
        </form>
      ) : (
        <h1>post code entered</h1>
      )}
    </>
  );
};

export default PostCodeChecker;
