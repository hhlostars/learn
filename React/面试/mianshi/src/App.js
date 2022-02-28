import React, { Component } from 'react'

class StateDemo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }
  render() {
    console.log('render', this.state.count);
    return <div>
      <p>{this.state.count}</p>
      <button onClick={this.increase}>累加</button>
    </div>
  }
  increase = () => {
    this.setState({
      count: this.state.count + 1
    })
    // 异步的，拿不到最新值
    console.log('increase方法count', this.state.count)

    // setTimeout 中 setState 是同步的
    // setTimeout(() => {
    //   this.setState({
    //     count: this.state.count + 1
    //   })
    //   // 同步的，可以拿到
    //   console.log('count in setTimeout', this.state.count)
    // }, 0)
  }

  bodyClickHandler = () => {
    // this.setState({
    //   count: this.state.count + 1
    // })
    // // 可以取到最新值
    // console.log('count in body event', this.state.count)
  }

  componentDidMount() {
    // 自己定义的 DOM 事件，setState 是同步的
    // document.body.addEventListener('click', this.bodyClickHandler)
  }
  componentWillUnmount() {
    // 及时销毁自定义 DOM 事件
    // document.body.removeEventListener('click', this.bodyClickHandler)
  }
}

export default class App extends Component {
  render() {
    return (
      <div>
        App
        <StateDemo></StateDemo>
      </div>
    )
  }
}

