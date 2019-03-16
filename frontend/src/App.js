import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import Forum from './components/Forum';
import User from './components/User';
import Login from './components/Login';
import Post from './components/Post';

import Navigation from './components/Navigation';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/forum" component={Forum} />
            <Route path="/user" component={User} exact />
            <Route path="/login" component={Login} exact />
            <Route path="/post" component={Post} exact />
          </Switch>

        </div>
      </BrowserRouter>
    );
  }
}



export default App;



