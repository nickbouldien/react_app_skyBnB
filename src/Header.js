import React, { Component } from 'react';
import { Grid, Navbar, Jumbotron, Button, Row, Col, FormGroup, ControlLabel, FormControl, HelpBlock} from 'react-bootstrap';
import logo from './logo.svg';

class Header extends Component {
  render() {
    return (
      <div>
      <Navbar inverse fixedTop>
        <Grid>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">React App</a>
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
          <h2>Welcome to React</h2>
          <h4 name="nick">Hello</h4>
          <img src={logo} className="App-logo" alt="logo" />
          <h4>by nick</h4>
        </Grid>
      </Jumbotron>
    </div>


    )
  }
}




export default Header;
