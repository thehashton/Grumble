import React from "react";
import "./Login.scss";

export const Login: React.FunctionComponent = () => {
  return (
    <form className="login">
      <span className={"label"}>Email:</span>
      <input type="email" placeholder={"Email address"} />
      <span className={"label"}>Password:</span>
      <input type="password" placeholder={"Enter password"} />
      <button type={"submit"} className={"button"}>
        Login
      </button>
    </form>
  );
};

export default Login;
