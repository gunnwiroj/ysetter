import React, { Component } from 'react';
import './App.css';
import {Route, Switch } from 'react-router-dom';
import ChildForm from './components/ChildForm';
import ParentForm from './components/ParentForm';
import index from './components/index';
import Nav from './components/nav';
import Supplier from './components/Supplier';
import Camp from './components/Camp';
import Search from './components/Search'
class App extends Component {
  render() {
    return (
      <div className="App">
          <Nav/>
          <Switch>
            <Route exact path="/" component={index}/>
            <Route path="/childform" component={ChildForm}/>
            <Route path="/parentform" component={ParentForm}/>
            <Route path="/supplier" component={Supplier}/>
            <Route path="/camp" component={Camp}/>
            <Route path="/search" component={Search}/>
          </Switch>
      </div>
    );
  }
}

export default App;
