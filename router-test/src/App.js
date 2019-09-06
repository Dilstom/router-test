import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Directory from './Directory';
import Profile from './Profile';
import { Switch, Route } from 'react-router-dom';

import { getAllEmployees } from './Employee';

const allEmpl = getAllEmployees();
class App extends Component {
 constructor() {
  super();
  this.state = {
   allEmpl: allEmpl,
  };
 }

 render() {
  return (
   <div className="App">
    <Header />
    <Switch>
     <Route exact path="/" component={Home} />
     <Route exact path="/directory" component={Directory} />
     <Route exact path="/directory/:id" component={Profile} />
    </Switch>
   </div>
  );
 }
}

export default App;
