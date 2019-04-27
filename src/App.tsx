import React, { Component } from 'react';
import './App.css';
import Home from './RootComponents/Home';
import Header from './components/Global/Header';
import ApolloClient from "apollo-boost";

class App extends Component {
  render() {

    const client = new ApolloClient({
      uri: "https://localhost:4000/graphql"
    });

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
