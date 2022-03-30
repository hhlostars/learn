import React, { Component } from 'react';

export default class Test extends Component {

  handleEvent = function () {
    console.log('this', this);
    console.log('event');
  }

  render() {
    return (
      <div>
        <button onClick={this.handleEvent}>事件监听</button>
      </div>
    );
  }
}
