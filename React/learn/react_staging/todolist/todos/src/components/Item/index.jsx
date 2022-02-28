import React, { Component } from 'react';

import './index.css'

class Index extends Component {

  handleDelete = (id) => {
    // console.log(this.props);
    
    // console.log(window.confirm('确定删除吗'));
    if (window.confirm('确定删除吗')) {
      this.props.deleteTodo(id)
    }
    // return
  }

  handleChange = (id, done) => {
    // console.log(e);
    this.props.updateTodo(id, done)
  }

  render() {
    const {todo} = this.props
    return (
      <li>
        <label>
          <input type="checkbox" checked={todo.done} onChange={(e) => this.handleChange(todo.id, e.target.checked)}/>
          <span>{todo.name}</span>
        </label>
        <button className="btn btn-danger" style={{ display: 'none' }} onClick={() => this.handleDelete(todo.id)}>删除</button>
      </li>
    );
  }
}

export default Index;
