import React, { Component } from 'react';
 import listings from '../store/Listings';
import { Link } from 'react-router-dom';

class ListingDetail extends Component {
  constructor(props){
    super(props)
    this.state = {
      listings: listings.getAllLocations() //,
      // listingId: id,
      // listing: listing
    }
  }

  componentWillMount(){
    // debugger;
    console.log('mounting details');
    //console.log(this.state.listings);
    const id = this.props.match.params.id //damn
    //console.log(id);

    this.setState({ listingId: id })
    let listing = this.state.listings.find(listing => listing.id === parseInt(id, 10))
    if(listing){
      this.setState({ listing: listing })
    }
  }

  render() {
    // debugger;
    //console.log(this.state.listings);
    //console.log(this.state);
    return (
      <div>
        <Link to='/'>Home</Link>
        <h2>{this.state.listing.name}</h2>
        <img src={this.state.listing.image} alt={this.state.listing.name} />
        <p>{this.state.listing.address}</p>
        <p>{this.state.listing.city}, {this.state.listing.state}</p>
        <p>{this.state.listing.description}</p>
      </div>
    )
  }
}
window.state = ListingDetail
// window.ListingDetail = ListingDetail
export default ListingDetail;
