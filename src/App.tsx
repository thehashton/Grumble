import React, { Component } from 'react';
import './App.css';
import Home from './RootComponents/Home';
import Header from './components/Global/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="App-header">
            <Header />
            <Home />
          </div>
        </div>
    );
  }
}

export default App;
