
// Menu.js (recipe/restaurant)

import React, { Component } from 'react';
// import { Grid, Navbar, Jumbotron, Button, Row, Col, FormGroup, ControlLabel, FormControl, HelpBlock} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import listings from '../store/Listings';
import {createLocation} from '../actions/ListingActions';

class AddListing extends Component {
  constructor(props){
    super(props)
    this.state = {
      newLocationName: 'hawaii beach house',
      listings: listings.getAllLocations()
    }
  }
  handleSubmit(){
    console.log('handle submit');
  }
  render(){
      return (
        <div>
          <Link to='/'>Home</Link>

          <h5>Add a location</h5>
          <form onSubmit= {this.handleSubmit.bind(this)}>
            <label>Name</label>
            <input
              name="name"
              value={this.state.newLocationName}
              onChange={this.handleNewLocationNameChange.bind(this)}
            />
            <label>city</label>
            <input
              name="name"
              value={this.state.newLocationName}
              onChange={this.handleNewLocationNameChange.bind(this)}
            />
            <button
              type='submit'
              onClick={this.handleAddLocation.bind(this)}>Add Location</button>

          </form>
        </div>

      )
  }
}
