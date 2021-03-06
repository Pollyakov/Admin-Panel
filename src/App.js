import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Tab, TabPanel, Tabs, TabList } from "react-web-tabs";
import ReactDOM from "react-dom";
import "react-web-tabs/dist/react-web-tabs.css";

// import { Switch, Route, HashRouter } from 'react-router-dom';
// import Dashboard from './Pages/Dashboard';
import Statistics from './Pages/Statistics';
import UserManagement from './Pages/UserManagement';
import MealsManagement from './Pages/MealsManagement';
import Notifications from './Pages/Notifications';
import LogPanel from './Pages/LogPanel';
import ServerInfo from './Pages/ServerInfo';


class App extends React.Component {
  render() {
    return (
      <Tabs defaultTab="vertical-tab-one" vertical className="vertical-tabs">
      <TabList>
        <Tab tabFor="vertical-tab-one">Dashboard</Tab>
        <Tab tabFor="vertical-tab-two">Statistics</Tab>
        <Tab tabFor="vertical-tab-three">User Management</Tab>
        <Tab tabFor="vertical-tab-four">Meals Management</Tab>
        <Tab tabFor="vertical-tab-five">Log Panel</Tab>
        <Tab tabFor="vertical-tab-six">Notifications</Tab>
        <Tab tabFor="vertical-tab-seven">Server Info</Tab>
      </TabList>

      <TabPanel tabId="vertical-tab-one">
        <p>Dashboard content</p>
      </TabPanel>

      <TabPanel tabId="vertical-tab-two">
        <p><Statistics/></p>
      </TabPanel>

      <TabPanel tabId="vertical-tab-three">
        <p><UserManagement/></p>  
      </TabPanel>

      <TabPanel tabId="vertical-tab-four">
        <p><MealsManagement/></p>
      </TabPanel>

      <TabPanel tabId="vertical-tab-five">
        <p><LogPanel/></p>
      </TabPanel>

      <TabPanel tabId="vertical-tab-six">
        <p><Notifications/></p>
      </TabPanel>

      <TabPanel tabId="vertical-tab-seven">
        <p><ServerInfo/></p>
      </TabPanel>

    
    </Tabs> 
    );
  }
}
export default App;
