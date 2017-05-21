import React, { Component } from 'react';
import Listings from './store/Listings';
import { Link } from 'react-router-dom';

class ListingDetail extends Component {
  constructor(props){
    super(props)
    this.state = {
      listings: Listings
    }
  }

  componentWillMount(){
    debugger;
    const id= this.props.match.params.id //damn

    this.setState({listingId: id})
    let listing = this.state.listings.find(listing => listing.id===parseInt(id))
    if(listing){
      this.setState({listing: listing})
    }
  }

  render() {
    return (
      <div>
        <Link to='/'>Home</Link>
        <h2>{this.state.listing.name}</h2>
        <img src={this.state.listing.image} />
        <p>{this.state.listing.address}</p>
        <p>{this.state.listing.city}, {this.state.listing.state}</p>
        <p>{this.state.listing.description}</p>
      </div>
    )
  }
}

export default ListingDetail;
