import React from "react";
import "./UsersPostCode.scss";

type UsersPostCodeProps = {
  userPostCode: any;
};

export const UsersPostCode: React.FC<UsersPostCodeProps> = props => {
  const [state, setState] = React.useState({
    userPostCodeState: props.userPostCode,
    newPostCode: ""
  });

  const [editState, editSetState] = React.useState({
    editingState: false
  });

  const handleChange = (value?: any) => {
    state.newPostCode = value;
  };

  const editingState = (e: any) => {
    editSetState({ editingState: true });
  };

  const leavingEditingState = () => {
    // editSetState({ editingState: false });
  };

  const handleCrossEvent = () => {
    editSetState({ editingState: false });
    localStorage.removeItem("postCode");
    location.reload();
  };

  const handleTickEvent = () => {
    localStorage.setItem("postCode", state.newPostCode);

    // Gives 5 seconds for lat/long to come back from postcodes.io API
    setTimeout(() => {
      location.reload();
    }, 5000);
  };

  return (
    <div
      className={
        `UsersPostCode ` + `${editState.editingState ? `active` : `NOT`}`
      }
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
            `UsersPostCode__tick ` +
            `${editState.editingState ? `active` : `NOT`}`
          }
          type={"button"}
          onClick={() => handleTickEvent()}
        >
          ✔
        </button>
        <button
          className={
            `UsersPostCode__cross ` +
            `${editState.editingState ? `active` : `NOT`}`
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
