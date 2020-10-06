import React, { Component } from "react";
import "./App.scss";
import { Switch, Route } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import Home from "./pages/Home";
import Header from "./components/Global/Header";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import { AuthPage } from "./pages/AuthPage/AuthPage";
import WrongRoute from "./components/WrongRoute";
import News from "./pages/News";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Header />
          <main className={"container"}>
            <React.Fragment>
              <Route
                render={({ location }) => (
                  <TransitionGroup>
                    <CSSTransition
                      key={location.key}
                      timeout={200}
                      classNames="fade"
                    >
                      <Switch location={location}>
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/account" component={AuthPage} />
                        <Route path="/faq" component={FAQ} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/news" component={News} />
                        <Route component={WrongRoute} />
                      </Switch>
                    </CSSTransition>
                  </TransitionGroup>
                )}
              />
            </React.Fragment>
          </main>
        </div>
      </div>
    );
  }
}

const NoRoutePage: React.FC = () => <></>;

export default App;
