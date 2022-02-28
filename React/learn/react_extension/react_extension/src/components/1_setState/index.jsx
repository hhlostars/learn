import React, { Component } from 'react';

export default class index extends Component {
  state = {
    count: 0
  }

  add = () => {
    // const {count} = this.state
    // 对象形式的
    // this.setState({count: count+1}, () => {
    //   console.log(this.state.count);
    // })

    // 函数形式的
    // this.setState((state, props) => {
    //   console.log(state, props);
    //   return { count: count + 1 }
    // })
    // 简写
    this.setState(state => ({count: state.count + 1}))
    console.log('12行的输出', this.state.count);
  }

  render() {
    return (
      <div>
        <h1>当前和为{this.state.count}</h1>
        <button onClick={this.add}>Add</button>
      </div>
    );
  }
}
