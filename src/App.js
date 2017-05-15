import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Content from './Content';

class App extends Component {
  render() {
    return (
      <div className="App">

        <div>
          <Header />
        </div>

        <div>
          <Content />
        </div>

      </div>

    );
  }
}

export default App;
