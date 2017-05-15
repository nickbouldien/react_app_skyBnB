import React, { Component } from 'react';
import { Grid, Navbar, Jumbotron, Button, Row, Col, FormGroup, ControlLabel, FormControl, HelpBlock} from 'react-bootstrap';


class Recipes extends Component {

  render() {

    let recipes = this.props.recipes.map((recipe) =>
      <li key={recipe.name}>{recipe.name}</li>
    )

    return (
      <ul>
        {recipes}
      </ul>
    );
  }
}

export default Recipes;
