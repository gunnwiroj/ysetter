import React, { Component } from 'react';
import './App.css';
import {Route, Switch } from 'react-router-dom';
import ChildForm from './components/ChildForm';
import ParentForm from './components/ParentForm';
import index from './components/index';
import Nav from './components/nav';
import Supplier from './components/Supplier';
class App extends Component {
  render() {
    return (
      <div className="App">
          <Nav/>
          <Switch>
            <Route exact path="/" component={index}/>
            <Route path="/childform" component={ChildForm}/>
            <Route path="/parentform" component={ParentForm}/>
            <Route path="/Supplier" component={Supplier}/>
          </Switch>
      </div>
    );
  }
}

export default App;
