import React from 'react';

import { Provider } from 'react-redux'
import initStore from './store'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import HomePage from './pages/Home'
import FaqPage from './pages/Faq'
import ProfilePage from './pages/Profile'
import ServicePage from './pages/Services'
import LoginPage from './pages/Login'
import RegisteredPage from './pages/Register'

import Sidebar from './components/Sidebar'
import Navbar from 'components/Navbar'

const store = initStore()

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Navbar id="navbar-clone" />
        <Sidebar />
        <Switch>
        <Route path="/register">
            <RegisteredPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/services">
            <ServicePage />
          </Route>
          <Route path="/profile">
            <ProfilePage />
          </Route>
          <Route path="/faq">
            <FaqPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>  
      
    </Provider>
  );
}

export default App;
