import React, { Component } from 'react';
import { Grid, Navbar, Jumbotron } from 'react-bootstrap';
// Button, Row, Col, FormGroup, ControlLabel, FormControl, HelpBlock
import logo from './logo.svg';

class Footer extends Component {
  render() {
    return (
      <div id="about" className="footer">
        <hr />
        Contact us! ||
        Phone: 865-111-2233 ||
        Email: help@skybnb.com
      </div>
    )
  }
}

export default Footer;
