import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Content from './Content';
import Recipes from './Recipes';
import Head from './Head';
import Places from './Places';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      recipes: [
        {name: 'meatballs'},
        {name: 'Mac & Cheese'},
        {name: 'pizza'}
      ]
    }
  }


  render() {
    return (
      <div className="App">

        <div>
          <Header/>
        </div>

        <div>
          <Head  />
        </div>

        <div>
          <Places />
        </div>

        <div>
          <Recipes recipes={this.state.recipes}/>
        </div>

        <div>
          <Content />
        </div>

      </div>

    );
  }
}

export default App;
