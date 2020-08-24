import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Switch, Route } from 'react-router-dom';


class App extends React.Component {
  render() {
    return (
      <div>
          <Switch>
          <Route exact path="/">
          </Route>
          <Route exact path="/login">
          </Route>
          </Switch>

      </div>
        

    );
  }
}
export default App;
