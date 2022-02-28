import React, { Component } from 'react';
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'

import './App.css'

export default class App extends Component {
  state = {
    todoList: [
      { id: 1, name: '写代码', done: true },
      { id: 2, name: '看书', done: true },
      { id: 3, name: '看电影', done: true },
      { id: 4, name: '摸鱼', done: false },
    ]
  }

  // 接受添加todo的回调
  addTodo = (todo) => {
    const { todoList } = this.state
    console.log(todo);
    let obj = {
      id: todoList[todoList.length - 1].id + 1,
      name: todo,
      done: false
    }
    let tempTodoList = todoList
    tempTodoList.push(obj)
    // console.log(obj);
    this.setState({ todoList: tempTodoList })
  }

  deleteTodo = (id) => {
    const newTodoList = this.state.todoList.filter(x => x.id !== id)
    this.setState({ todoList: newTodoList })
  }

  updateTodo = (id, done) => {
    const newTodoList = this.state.todoList.map(todo => {
      if (todo.id === id) {
        // let done = !todo.done
        return { ...todo, done }
      } else {
        return todo
      }
    })
    this.setState({ todoList: newTodoList })
  }

  handleCheckAll = () => {
    const { todoList } = this.state
    const doneNum = todoList.reduce((pre, cur) => pre + (cur.done ? 1 : 0), 0)
    let newTodoList
    if (todoList.length === doneNum) {
      newTodoList = todoList.map(todo => {
        return { ...todo, done: false }
      })
    } else {
      newTodoList = todoList.map(todo => {
        return { ...todo, done: true }
      })
    }
    this.setState({todoList: newTodoList})
  }

  //clearAllDone用于清除所有已完成的
  clearAllDone = () => {
    //获取原来的todos
    const { todoList } = this.state
    //过滤数据
    const newTodos = todoList.filter((todoObj) => {
      return !todoObj.done
    })
    //更新状态
    this.setState({ todoList: newTodos })
  }

  render() {
    const { todoList } = this.state
    const doneNum = todoList.reduce((pre, cur) => pre + (cur.done ? 1 : 0), 0)
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo}></Header>
          <List todoList={todoList} deleteTodo={this.deleteTodo} updateTodo={this.updateTodo}></List>
          <Footer doneNum={doneNum} allNum={todoList.length} handleCheckAll={this.handleCheckAll} clearAllDone={this.clearAllDone}></Footer>
        </div>
      </div>
    );
  }
}
