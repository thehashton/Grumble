import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route } from 'react-router-dom';
import ApolloClient from "apollo-boost";

export const client  = new ApolloClient({
    uri: "http://localhost:4000/graphql"
});

ReactDOM.render(
    <BrowserRouter>
        <Route path="/" component={App} />
    </BrowserRouter>,
    document.getElementById('root')
);

serviceWorker.unregister();
