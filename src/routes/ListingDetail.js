import React, { Component } from 'react';
// import listings from '../store/Listings';
import { Link } from 'react-router-dom';

class listingDetail extends Component {
  // constructor(props){
  //   super(props)
  //   this.state = {
  //     listings: listings.getAllLocations()
  //   }
  // }

  componentWillMount(){
    //debugger;
    const id = this.props.match.params.id //damn

    this.setState({ listingId: id })
    let listing = this.state.listings.find(listing => listing.id === parseInt(id, 10))
    if(listing){
      this.setState({ listing: listing })
    }
  }

  render() {
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

export default listingDetail;
