import React, { Component } from 'react';

class Head extends Component {

  constructor(props){
    super(props)
    this.state = {
      person: "chef"
    }
  }
  render() {
      return (

        <h1 key={this.state.person}>{this.state.person}</h1>

      )
  }
}

export default Head;
