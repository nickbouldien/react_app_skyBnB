
// Menu.js (recipe/restaurant)

import React, { Component } from 'react';
// import { Grid, Navbar, Jumbotron, Button, Row, Col, FormGroup, ControlLabel, FormControl, HelpBlock} from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import listings from '../store/Listings';
import {createLocation} from '../actions/ListingActions';
import AddListingForm from '../components/AddListingForm';

class AddListing extends Component {
  constructor(props){
    super(props)
    this.state = {
      // newLocationName: 'hawaii beach house',
      // listings: listings.getAllLocations(),
      newListingData: {
        name: '',
        address: '',
        city: '',
        state: '',
        description: '',
        image: ''
      }
    }
  }
  // handleSubmit(){
  //   console.log('handle nick submit');
  // }
  newListingUpdate(newListingData){
    this.setState({newListingData: newListingData}, ()=>{
      console.log('state after ' , this.state);
      createLocation(this.state)
    })
    // call function in action? createLocation??
  }
  // handleNewLocationNameChange(){
  //   console.log('handling name change');
  // }
  // handleAddLocation(){
  //   console.log('hanlding add location');
  // }
  render(){
      return (
        <div>
          <AddListingForm
            newListingData={this.state.newListingData}
            onSubmit={this.newListingUpdate.bind(this)}
          />
          {/* //   <Link to='/'>Home</Link>
          //
          //   <h5>Add a location</h5>
          //   <form onSubmit={this.handleSubmit.bind(this)}>
          //     <label>Name</label>
          //     <input
          //       name="name"
          //       value={this.state.newLocationName}
          //       onChange={this.handleNewLocationNameChange.bind(this)}
          //     />
          //     <br />
          //     <br />
          //     <label>city</label>
          //     <input
          //       name="name"
          //       value={this.state.newLocationName}
          //       onChange={this.handleNewLocationNameChange.bind(this)}
          //     />
          //     <br />
          //     <button
          //       type='submit'
          //       onClick={this.handleAddLocation.bind(this)}>Add Location</button>
          //
          //   </form> */}
        </div>

      )
  }
}
export default AddListing;
