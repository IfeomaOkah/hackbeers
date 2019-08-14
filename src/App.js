import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import AllBeers from './pages/AllBeers';
import Landing from './Pages/Landing';
import Home from './Pages/Home';
import Signup from './Components/Signup';
import Login from './Pages/Login';
import ProtectedRoute from './Components/ProtectedRoute';

import './App.css';


export default class App extends Component {
  constructor(props){
    super(props)
    this.state = { loggedInUser: null };
  }

  getTheUser= (userObj) => {
    this.setState({
      loggedInUser: userObj
    })
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={AllBeers} />
          <Route exact path="/home" component={Home} /> 
          <Route path="/auth/login" component={Login} />
          <Route path="/auth/signup" component={Signup} />
          <ProtectedRoute 
            redirectUrl='/' 
            path="/home" 
            component={Home}
          />
        </Switch>
      </div>
    );
  
  }
}



