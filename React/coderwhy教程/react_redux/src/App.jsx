import React, { Component } from 'react';
import Home from './pages/Home'
import About from './pages/About'
import Test from './pages/Test';

class App extends Component {
  render() {
    return (
      <div>
        <Home></Home>
        <About></About>
        <Test></Test>
      </div>
    );
  }
}

export default App;
