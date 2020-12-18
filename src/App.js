import React from 'react';
import './App.css';


import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


import Menu from './Menu/Menu';
import Hero from './Hero/Hero';
import HomePage from './HomePage/HomePage';
import Footer from './Footer/Footer';
import AboutPage from './AboutPage/AboutPage';
import LoginPage from './LoginPage/LoginPage';
import LogoutButton from './LoginPage/LogoutButton';
import Profile from './LoginPage/Profile';
import Login from './LoginPage/Login'
import { useAuth0 } from '@auth0/auth0-react';
import Signup from './LoginPage/Signup';
import Dashboard from './Dashboard/Dashboard';
import Inputs from './Dashboard/Inputs';

// getChartData = () => {

// }

function App() {

  const {isLoading } = useAuth0();

  if (isLoading) return <div className="loading">Loading...</div>

  return (
    <Router>
      <Menu/>
      <Hero/>
      <div className="mainContainer">
        <Switch>
          <Route path="/about">
            <AboutPage/>
          </Route>
          <Route path="/login">
            <Login/>
            <LoginPage/>
            <Signup/>
            <LogoutButton/>
            <Profile />
          </Route>
          <Route path="/dashboard">
          <Inputs/>
            <Dashboard/>
          </Route>
          <Route path="/">
            <HomePage/>
          </Route>
        </Switch>
      </div>
      <Footer/>
      </Router>
  );
}

export default App;
