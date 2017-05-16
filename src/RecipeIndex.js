import React, { Component } from 'react';
import { Grid, Navbar, Jumbotron, Button, Row, Col, FormGroup, ControlLabel, FormControl, HelpBlock} from 'react-bootstrap';

import { Link } from 'react-router-dom';
import Recipes from './store/Recipes';

class RecipeIndex extends Component {
    //new stuff
    componentWillMount() {
      this.setState({recipes: Recipes})
    }
    render(){
      let list = this.state.recipes.map(recipe =>
        <li key={recipe.id}>
          <Link to={`/recipes/${recipe.id}`} >
            {recipe.name}
          </Link>
        </li>
      )
    return (
      <ul>
        { list }
      </ul>
    );
  }
}

export default RecipeIndex;
