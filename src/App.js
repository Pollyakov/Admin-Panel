import React from 'react';
import './App.css';
import {Switch, Route, HashRouter } from 'react-router-dom';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import Statistics from './Pages/Statistics';


class App extends React.Component {
  render() {
    return (
     
        <HashRouter>
          <Switch>
            <Route exact path="/">
               <Login />
            </Route>
            <Route exact path="/dashboard">
              <Dashboard />
            </Route>
            <Route exact path="/statistics">
                <Statistics/>
            </Route>
           </Switch>
          </HashRouter>

   
        

    );
  }
}
export default App;
