import React, { Component } from 'react';
import store from '../../redux/store'

// import { incAction, decAction, asyncAction } from '../../redux/count_action'

class Count extends Component {
  state = {
    // sum: 0
  }

  componentDidMount() {

  }

  increment = () => {
    // const {sum} = this.state
    const { value } = this.selectEle
    // this.setState({sum: sum + value * 1})
    // store.dispatch({ type: 'increment', data: value * 1 })
    // store.dispatch(incAction(value * 1))
    this.props.add(value * 1)
  }

  decrement = () => {
    const { value } = this.selectEle
    // store.dispatch({ type: 'decrement', data: value * 1 })
    // store.dispatch(decAction(value * 1))
    this.props.dec(value * 1)
  }

  incrementIfOdd = () => {
    const sum = store.getState()
    const { value } = this.selectEle
    if (sum % 2 === 1) {
      // store.dispatch({ type: 'decrement', data: value * 1 })
      // store.dispatch(incAction(value * 1))
      this.props.add(value * 1)
    }
  }

  incrementAsync = () => {
    const { value } = this.selectEle
    // store.dispatch(asyncAction(value * 1, 300))
    this.props.asyncAdd(value * 1)
  }

  render() {
    // const { sum } = this.state
    return (
      <div>
        <h1>当前和为 {this.props.data} </h1>
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
