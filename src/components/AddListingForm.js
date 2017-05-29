import React, { Component } from 'react';
// import { Grid, Navbar, Jumbotron, Button, Row, Col, FormGroup, ControlLabel, FormControl, HelpBlock} from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import listings from '../store/Listings';
// import {createLocation} from '../actions/ListingActions';

class AddListingForm extends Component {
  constructor(props){
    super(props)
    this.state = props.newListingData
  }
  submitForm(event){
    this.props.onSubmit(this.state)
    event.preventDefault();
    console.log('handle submit in the form');
  }
  // handleNewLocationNameChange(){
  //   console.log('handling name change');
  // }
  // handleAddLocation(){
  //   console.log('hanlding add location');
  // }
  handleChange(event){
    let target = event.target;
    let attribute = target.name;

    this.setState({ [attribute]: target.value}, ()=>{
    console.log(this.state)
    })
  }

  render(){
      return (
        <div>
          <Link to='/'>Home</Link>

          <h5>Add a location listing</h5>
          <form onSubmit={this.submitForm.bind(this)}>
            <label
              htmlFor={this.props.name}>
              Name
            </label>
            <input
              name='name'
              type='text'
              placeholder="Hawaii Beach House"
              value={this.state.name}
              onChange={this.handleChange.bind(this)}
            />
            <br />
            <label
              htmlFor={this.props.city}>
              City
            </label>
            <input
              name='city'
              type='text'
              placeholder="Maui"
              value={this.state.city}
              onChange={this.handleChange.bind(this)}
            />
            <br />
            <label
              htmlFor={this.props.state}>
              State
            </label>
            <input
              name='state'
              type='text'
              placeholder="HI"
              value={this.state.state}
              onChange={this.handleChange.bind(this)}
            />
            <br />
            <label
              htmlFor={this.props.description}>
              Description
            </label>
            <textarea
              name='description'
              placeholder="This house is right on the beach..."
              value={this.state.description}
              onChange={this.handleChange.bind(this)}
            />
            <br />
            <label
              htmlFor={this.props.image}>
              Image
            </label>
            <input
              name='image'
              type='text'
              placeholder="/images/image2.jpg"
              value={this.state.image}
              onChange={this.handleChange.bind(this)}
            />
            <br />
            <button
              type='submit'
              value='Submit'
              // onClick={this.handleAddLocation.bind(this)}
              >Add Location</button>
          </form>
        </div>
      )
    }
  }

export default AddListingForm;
