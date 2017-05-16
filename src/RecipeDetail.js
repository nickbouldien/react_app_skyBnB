import React, { Component } from 'react';
import Recipes from './store/Recipes';
import { Link } from 'react-router-dom';

class RecipeDetail extends Component {
  constructor(props){
    super(props)
    this.state = {
      recipes: Recipes
    }
  }

  componentWillMount(){
    const id= this.props.match.params.id //damn
    this.setState({recipeId: id})
    let recipe = this.state.recipes.find(listing => listing.id===parseInt(id))
    if(recipe){
      this.setState({recipe: recipe})
    }
  }

  render() {
    return (
      <div>
        <Link to='/'>Home</Link>
        <h2>{this.state.recipe.name}</h2>
        <img src={this.state.recipe.image} />
        <p>{this.state.recipe.address}</p>
        <p>{this.state.recipe.city}, {this.state.recipe.state}</p>
        <p>{this.state.recipe.description}</p>
      </div>
    )
  }
}

export default RecipeDetail;
