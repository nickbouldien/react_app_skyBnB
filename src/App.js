import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Header from './Header';
import Content from './Content';
import Head from './Head';
import Places from './Places';
import RecipeIndex from './RecipeIndex';
import RecipeDetail from './RecipeDetail';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">

          <div>
            <Header/>
          </div>

          <div>
            <Route exact path="/" component={RecipeIndex} />
            <Route path="/recipes/:id" component={RecipeDetail} />
          </div>

        </div>
    </Router>
    );
  }
}

export default App;
