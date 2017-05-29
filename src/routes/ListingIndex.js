// Menu.js (recipe/restaurant)

import React, { Component } from 'react';
// import { Grid, Navbar, Jumbotron, Button, Row, Col, FormGroup, ControlLabel, FormControl, HelpBlock} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import listings from '../store/Listings';
import {createLocation} from '../actions/ListingActions';

class ListingIndex extends Component {
  constructor(props){
    super(props)
    this.state = {
      newLocationName: 'hawaii beach house',
      listings: listings.getAllLocations()
    }
  }
    componentWillMount() {
      listings.on('change', function(){
        this.setState({ listings: listings.getAllLocations()})
      }.bind(this))
      console.log('mounting on "change"');
    }

    handleAddLocation(){
      console.log('handling');
      createLocation(this.state.newLocationName)
    }

    handleNewLocationNameChange(e){
      this.setState({
        newLocationName: e.target.value
      })
    }

    // handleSubmit(args){
    //   console.log(args);
    // }
    render(){
      let list = this.state.listings.map(listing =>
        <div className="col" key={listing.id}>
          <Link to={`/listings/${listing.id}`} >
            {listing.name}
            {/* {listing.city} */}
            <br />
          </Link>
          <img src={listing.image} alt={listing.name}/>
        </div>
      )
    return (
      <div>
        <h3>Locations</h3>

        <div className="flex-grid">
          {list}
        </div>
        <br />
        <Link to='/add'>Add listing page</Link>
      </div>

    );
  }
}

export default ListingIndex;


// <li key={listing.id}>
//   <Link to={`/listings/${listing.id}`} >
//     {listing.name}
//     <br />
//   </Link>
//   <img src={listing.image} />
// </li>
