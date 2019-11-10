import React, { Component } from "react";
import "./App.scss";
import { Switch, Route } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import Home from "./RootComponents/Home";
import Header from "./components/Global/Header";
import About from "./RootComponents/About";
import FAQ from "./RootComponents/FAQ";
import Contact from "./RootComponents/Contact";
import { AuthPage } from "./pages/AuthPage/AuthPage";

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
                        <Route component={NoRoutePage} />
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

const NoRoutePage: React.FC = () => <p>404</p>;

export default App;
