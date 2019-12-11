import React from "react";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import "./PostCodeChecker.scss";
import axios from "axios";
import store from "../../../runtime/store/store";
import { setPostCode } from "../../../runtime/store/actions";

type PostCodeCheckerProps = {
  postCode?: string;
};

export const PostCodeChecker: React.SFC<PostCodeCheckerProps> = props => {
  const dispatch = useDispatch<Dispatch<any>>();
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
    console.log(localStorage.getItem("postCode"));
  }

  // Make a request for a postcode
  axios
    .get("https://api.postcodes.io/postcodes/" + "NG3 7FX")
    .then(function(response) {
      // handle success
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
