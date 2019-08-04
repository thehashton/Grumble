import React from "react";
import "./Login.scss";

export const Login: React.FunctionComponent = () => {
  return (
    <form className="login">
      <div className="form-control">
        <label className={"label"} htmlFor={"email"}>
          Email:
        </label>
        <input type="email" placeholder={"Email address"} id={"email"} />
      </div>
      <div className="form-control">
        <label className={"label"} htmlFor={"password"}>
          Password:
        </label>
        <input type="password" placeholder={"Enter password"} />
      </div>
      <button type={"button"} className={"button"}>
        Signup
      </button>
      <button type={"submit"} className={"button"}>
        Login
      </button>
    </form>
  );
};

export default Login;
