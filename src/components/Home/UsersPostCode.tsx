import React from "react";
import "./UsersPostCode.scss";
import { getCurrentPosition } from "../../utils/getCurrentPosition";
import { boolean } from "@storybook/addon-knobs";

type UsersPostCodeProps = {
  userPostCode: any;
};

export const UsersPostCode: React.FC<UsersPostCodeProps> = props => {
  const [state, setState] = React.useState({
    editingState: false,
    userPostCodeState: props.userPostCode,
    newPostCode: ""
  });

  const handleChange = (value?: any) => {
    state.newPostCode = value;
    console.log(value);
  };

  const editingState = (e: any) => {
    setState({ editingState: true });
    console.log(state.editingState);
  };

  const leavingEditingState = () => {
    setState({ editingState: false });
    console.log(state.editingState);
  };

  const handleCrossEvent = () => {
    localStorage.removeItem("postCode");
    location.reload();
  };

  const handleTickEvent = () => {
    localStorage.setItem("postCode", state.newPostCode);
    getCurrentPosition();

    // Gives 5 seconds for lat/long to come back from postcodes.io API
    setTimeout(() => {
      location.reload();
    }, 5000);
  };

  return (
    <div
      className={`UsersPostCode ` + `${state.editingState ? `active` : `NOT`}`}
    >
      <input
        type="text"
        className={"userPostCodeInput"}
        placeholder={state.userPostCodeState}
        value={state.userPostCodeState}
        onMouseLeave={() => leavingEditingState()}
        onClick={e => editingState(e)}
        onChange={e => handleChange(e.target.value)}
      />

      <div className={"UsersPostCode__editingState"}>
        <button
          className={
            `UsersPostCode__tick ` + `${state.editingState ? `active` : `NOT`}`
          }
          type={"button"}
          onClick={() => handleTickEvent()}
        >
          ✔
        </button>
        <button
          className={
            `UsersPostCode__cross ` + `${state.editingState ? `active` : `NOT`}`
          }
          type={"button"}
          onClick={() => handleCrossEvent()}
        >
          ✘
        </button>
      </div>
    </div>
  );
};

export default UsersPostCode;
