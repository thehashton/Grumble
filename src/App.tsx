import React, { Component } from 'react';
import './App.css';
import Home from './RootComponents/Home';
import Buttons from './components/Home/Buttons'

class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="App-header">
            <Home />
          </div>
        </div>
    );
  }
}

export default App;
