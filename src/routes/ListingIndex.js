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
        // <li key={recipe.id}>
        //   <Link to={`/recipes/${recipe.id}`} >
        //     {recipe.name}
        //     <br />
        //   </Link>
        //   <img src={recipe.image} />
        // </li>
        <div className="col" key={recipe.id}>
          <Link to={`/recipes/${recipe.id}`} >
            {recipe.name}
            <br />
          </Link>
          <img src={recipe.image} />
        </div>
      )
    return (

      // <ul>
      //   { list }
      // </ul>

      <div className="flex-grid">
        {list}
      </div>


    );
  }
}

export default RecipeIndex;
