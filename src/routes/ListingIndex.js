// Menu.js (recipe/restaurant)

import React, { Component } from 'react';
// import { Grid, Navbar, Jumbotron, Button, Row, Col, FormGroup, ControlLabel, FormControl, HelpBlock} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import listings from '../store/Listings';

class ListingIndex extends Component {
  constructor(props){
    super(props)
    this.state = {
      listings: listings.getAllLocations()
    }
  }
    componentWillMount() {
      listings.on('change', function(){
        this.setState({ listings: listings.getAllLocations()})
      }.bind(this))
      console.log('mounting on "change"');
    }
    render(){
      let list = this.state.listings.map(listing =>
        // <li key={listing.id}>
        //   <Link to={`/listings/${listing.id}`} >
        //     {listing.name}
        //     <br />
        //   </Link>
        //   <img src={listing.image} />
        // </li>
        <div className="col" key={listing.id}>
          <Link to={`/listings/${listing.id}`} >
            {listing.name}
            <br />
          </Link>
          <img src={listing.image} alt={listing.name}/>
        </div>
      )
    return (

      // <ul>
      //   { list }
      // </ul>

      <div className="flex-grid">
        {list}
      </div>


    );
  }
}

export default ListingIndex;
