import React from 'react';
import './App.css';
import { Switch, Route, HashRouter } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import Statistics from './Pages/Statistics';
import UserManagement from './Pages/UserManagement';


class App extends React.Component {
  render() {
    return (

      <HashRouter>
        <Switch>
          
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route exact path="/UserManagement">
            <UserManagement />
          </Route>
          <Route exact path="/statistics">
            <Statistics />
          </Route>

        </Switch>
      </HashRouter>





    );
  }
}
export default App;
