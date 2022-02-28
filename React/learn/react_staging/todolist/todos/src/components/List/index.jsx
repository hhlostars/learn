import React, { Component } from 'react';
import Item from '../Item'

import './index.css'

class Index extends Component {
  
  render() {
    const { todoList, deleteTodo, updateTodo } = this.props
    console.log(todoList);
    return (
      <ul className="todo-main">
        {todoList.map(todo => {
          return <Item todo={todo} key={todo.id} deleteTodo={deleteTodo} updateTodo={updateTodo}></Item>
        })}
      </ul>
    );
  }
}

export default Index;
