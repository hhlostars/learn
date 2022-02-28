
import { incAction, decAction, asyncAction} from '../../redux/count_action'
import {connect} from 'react-redux'

import React, { Component } from 'react';

class Count extends Component {

  componentDidMount() {

  }

  increment = () => {
    const { value } = this.selectEle
    this.props.add(value * 1)
  }

  decrement = () => {
    const { value } = this.selectEle
    this.props.dec(value * 1)
  }

  incrementIfOdd = () => {
    const sum = this.props.data
    const { value } = this.selectEle
    if (sum % 2 === 1) {
      this.props.add(value * 1)
    }
  }

  incrementAsync = () => {
    const { value } = this.selectEle
    // store.dispatch(asyncAction(value * 1, 300))
    this.props.asyncAdd(value * 1)
  }

  render() {
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

// a函数的返回值作为状态 传递给了UI组件
function mapStateToProps(state) {
  return {
    data: state
  }
}

function mapDispatchToProps(dispatch) {
  return {
    add: (num) => {
      // redux 加法
      dispatch(incAction(num))
    },
    dec: (num) => {
      // redux 加法
      dispatch(decAction(num))
    },
    asyncAdd: (num) => {
      // redux 加法
      dispatch(asyncAction(num, 1000))
    },
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Count)