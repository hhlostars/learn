import React, { Component } from 'react';

class Count extends Component {
  state = {
    sum: 0
  }

  increment = () => {
    const {sum} = this.state
    const {value} = this.selectEle
    this.setState({sum: sum + value * 1})
  }

  decrement = () => {
    const {sum} = this.state
    const {value} = this.selectEle
    this.setState({sum: sum - value * 1})
  }

  incrementIfOdd = () => {
    const {sum} = this.state
    const {value} = this.selectEle
    if(sum % 2 === 1) {
      this.setState({ sum: sum + value * 1 })
    }
  }

  incrementAsync = () => {
    const {sum} = this.state
    const {value} = this.selectEle
    setTimeout(() => {
      this.setState({ sum: sum + value * 1 })
    }, 500)
  }

  render() {
    const { sum } = this.state
    return (
      <div>
        <h1>当前和为 {sum} </h1>
        <select ref={c => this.selectEle = c}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.incrementIfOdd}>和为奇数再相加</button>
        <button onClick={this.incrementAsync}>异步加</button>
      </div>
    );
  }
}

export default Count;
