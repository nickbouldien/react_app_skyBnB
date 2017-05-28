import React, { Component } from 'react';
import { Grid, Navbar, Jumbotron } from 'react-bootstrap';
// Button, Row, Col, FormGroup, ControlLabel, FormControl, HelpBlock
import logo from './logo.svg';

class Header extends Component {
  render() {
    return (
      <div>
      <Navbar inverse fixedTop>
        <Grid>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">skyBnB</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Navbar.Collapse>
            <Navbar.Text>
              <Navbar.Link href="#">Home</Navbar.Link>
            </Navbar.Text>
            <Navbar.Text>
              <Navbar.Link href="#about">About</Navbar.Link>
            </Navbar.Text>
          </Navbar.Collapse>
        </Grid>
      </Navbar>
      <Jumbotron>
        <Grid>
          <h2>skyBnB</h2>
          <img src={logo} className="App-logo" alt="logo" />
        </Grid>
      </Jumbotron>
    </div>


    )
  }
}




export default Header;
