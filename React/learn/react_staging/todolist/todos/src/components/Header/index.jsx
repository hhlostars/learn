import React, { Component } from 'react';
import './index.css'

class Index extends Component {
  handleKeyDown = (e) => {
    if (e.code !== 'Enter') return
    let input = e.target.value.trim()
    if (input === '') {
      alert('不能输入空')
      return
    }
    this.props.addTodo(input)
    e.target.value = ''
  }
  render() {
    return (
      <div className="todo-header">
        <input type="text" placeholder="请输入你的任务名称，按回车键确认" onKeyDown={this.handleKeyDown} />
      </div>
    );
  }
}

export default Index;
