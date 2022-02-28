// import {Component} 的形式不是 结构赋值
// 而是在暴露的过程中应用了 export class Component 的形式
import React, { Component } from 'react'
import Hello from './components/Hello/Hello'

class App extends Component {
  render() {
    return (
      <div>
        <Hello />
      </div>
    )
  }
}

export default App;
