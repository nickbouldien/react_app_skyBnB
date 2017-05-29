import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Header from './components/Header';
import ListingIndex from './routes/ListingIndex';
import ListingDetail from './routes/ListingDetail';
import AddListing from './routes/AddListing';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App" >

          <div>
            <Header/>
          </div>

          <div>
            <Route exact path="/" component={ListingIndex} />
            <Route exact path="/listings/:id" component={ListingDetail} />
            <Route path="/add" component={AddListing} />
          </div>

        </div>
    </Router>
    );
  }
}

export default App;
