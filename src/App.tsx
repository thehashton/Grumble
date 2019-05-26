import React, { Component } from 'react';
import './App.scss';
import Home from './RootComponents/Home';
import Header from './components/Global/Header';
import { Switch, Route } from 'react-router-dom';
import About from './RootComponents/About';
import Account from './RootComponents/Account';
import FAQ from './RootComponents/FAQ';
import Contact from './RootComponents/Contact';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

class App extends Component {
  render() {

    return (
      <div className="App">
          <div className="App-header">
            <Header />

            <Route render={({location}) => (
              <TransitionGroup>
                <CSSTransition
                  key={location.key}
                  timeout={200}
                  classNames="fade"
                  >
                    <Switch location={location}>
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/account" component={Account} />
                        <Route path="/faq" component={FAQ} />
                        <Route path="/contact" component={Contact} />
                    </Switch>
                  </CSSTransition>
              </TransitionGroup>
            )} />

          </div>
        </div>
    );
  }
}

export default App;
