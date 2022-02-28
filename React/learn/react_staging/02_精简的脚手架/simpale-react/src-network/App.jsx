import React, { Component } from 'react';
import axios from 'axios'

class App extends Component {

  getStuData = () => {
    // 因为跨域请求不能回来
    axios.get('http://localhost:3000/api1/students').then(res => {
      console.log(res);
    })
  }

  getCarData = () => {
    // 因为跨域请求不能回来
    axios.get('http://localhost:3000/api2/cars').then(res => {
      console.log(res);
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.getStuData}>点击我获取学生数据</button>
        <button onClick={this.getCarData}>点击我获取汽车数据</button>
      </div>
    );
  }
}

export default App;
