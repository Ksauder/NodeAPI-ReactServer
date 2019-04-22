import React, { Component } from 'react';
import {Navbar, Nav, Button} from 'react-bootstrap';
import Axios from 'axios';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import 'react-router';

import './App.css';
import './components/foodtrucks/css/foodtrucks.css';
import NewTruck from './components/foodtrucks/NewTruck';
import About from './components/foodtrucks/About';
import Contact from './components/foodtrucks/Contact';
import Dashboard from './components/foodtrucks/Dashboard';
import EditTruck from './components/foodtrucks/EditTruck';


class App extends Component {

  addTruck = (e) => {
    console.log(e.target);

  }

  editTruck = (e) => {

  }
  
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <h1 id="title">Food Trucks</h1>
          <nav className='foodtrucks-header' >
            <Link to='/'>Dashboard</Link>
            <Link to='/newtruck'>New Truck</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
          </nav>
          <div className="foodtrucks-display">
            <Route exact path="/" render={(props) => <Dashboard {...props}/>} />
            <Route path="/newtruck" render={(props) => <NewTruck {...props} onSubmit={this.addTruck} />} />
            <Route path="/edit/:id" render={(props) => <EditTruck {...props} />} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
