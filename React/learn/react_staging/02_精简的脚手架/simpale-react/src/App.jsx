import React, { Component } from 'react';
import Search from './Search'
import List from './List'

class App extends Component {
  render() {
    return (
      <div className="container">
        <Search></Search>
        <List></List>
      </div>
    );
  }
}

export default App;
