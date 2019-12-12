import React from "react";
import "./PostCodeChecker.scss";
import axios from "axios";
import store from "../../../runtime/store/store";
import { setPostCode } from "../../../runtime/store/actions";

type PostCodeCheckerProps = {
  postCode?: string;
  userLocation?: {};
};

export const PostCodeChecker: React.SFC<PostCodeCheckerProps> = props => {
  const usersPostcode = localStorage.getItem("postCode");
  const [state, setState] = React.useState({
    userPostCode: ""
  });

  function handleChange(evt: any) {
    setState({ userPostCode: evt.target.value });
  }

  function submitPostCode(event: any) {
    event.preventDefault();
    store.dispatch(setPostCode(state.userPostCode));
    localStorage.setItem("postCode", state.userPostCode);
  }

  let userLocObj: any = {};
  axios
    .get("https://api.postcodes.io/postcodes/" + usersPostcode)
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
    })
    .catch(function(error: any) {
      // handle error
      console.log(error);
    })
    .finally(function() {
      // always executed
    });

  return (
    <form action="" onSubmit={submitPostCode} className={"PostCodeChecker"}>
      <input
        value={state.userPostCode}
        type="text"
        className={"input"}
        onChange={handleChange}
      />
      <button className={"button"} type="submit">
        Check
      </button>
    </form>
  );
};

export default PostCodeChecker;
