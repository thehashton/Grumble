import React, { Component } from "react";
import "./AuthPage.scss";

export class AuthPage extends React.Component {
  state = {
    isLogin: true
  };

  constructor(props: any) {
    super(props);
    this.emailEl = React.createRef();
    this.passwordEl = React.createRef();
  }

  emailEl: React.RefObject<any>;
  passwordEl: React.RefObject<any>;

  switchModeHandler = () => {
    this.setState((prevState: any) => {
      return { isLogin: !prevState.isLogin };
    });
  };

  submitHandler = (event: any) => {
    event.preventDefault();
    const email = this.emailEl.current.value;
    const password = this.passwordEl.current.value;

    if (email.trim().length === 0 || password.trim().length === 0) {
      return;
    }

    let requestBody = {
      query: `
                query {
                    login(email: "${email}", password: "${password}") {
                            userId
                            token
                            tokenExpiration
                    }
                }
            `
    };

    if (!this.state.isLogin) {
      requestBody = {
        query: `
                mutation {
                    createUser(id: "", email: "${email}", password: "${password}") {
                        id
                        email
                        password
                    }
                }
                `
      };
    }

    fetch("http://localhost:4000/graphql", {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error("Failed!");
        }
        return res.json();
      })
      .then(resData => {
        console.log(resData);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <form className="login" onSubmit={this.submitHandler}>
        <div className="form-control">
          <label className={"label"} htmlFor={"email"}>
            Email:
          </label>
          <input
            type="email"
            placeholder={"Email address"}
            id={"email"}
            ref={this.emailEl}
          />
        </div>
        <div className="form-control">
          <label className={"label"} htmlFor={"password"}>
            Password:
          </label>
          <input
            type="password"
            placeholder={"Enter password"}
            ref={this.passwordEl}
          />
        </div>
        <button type={"submit"} className={"button"}>
          Login
        </button>
        <button
          type={"button"}
          className={"button"}
          onClick={this.switchModeHandler}
        >
          Switch to {this.state.isLogin ? "Signup" : "Login"}
        </button>
      </form>
    );
  }
}

export default AuthPage;
