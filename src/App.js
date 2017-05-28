import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Header from './components/Header';
import ListingIndex from './routes/ListingIndex';
import ListingDetail from './routes/ListingDetail';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">

          <div>
            <Header/>
          </div>

          <div>
            <Route exact path="/" component={ListingIndex} />
            <Route path="/recipes/:id" component={ListingDetail} />
          </div>

        </div>
    </Router>
    );
  }
}

export default App;
