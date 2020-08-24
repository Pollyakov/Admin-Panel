import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Switch, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import Statistics from './Pages/Statistics';


class App extends React.Component {
  render() {
    return (
      <div>
          <Switch>
            <Route exact path="/">
               <Login/>
            </Route>
            <Route exact path="/login">
              <Dashboard/>
            </Route>
            <Route exact path="/">
                <Statistics/>
               <Login/>
            </Route>
          </Switch>

      </div>
        

    );
  }
}
export default App;
