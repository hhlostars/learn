import React, { Component } from 'react';

import { connect } from 'react-redux'

import { createAddPersonAction } from '../../redux/actions/person'
// import { incAction, decAction, asyncAction} from '../../redux/actions/count'

class Person extends Component {
  addPerson = () => {
    const name = this.nameNode.value
    const age = this.ageNode.value
    // this.props
    // console.log('props',this.props);
    const arr = this.props.data
    const id = arr[0].id + 1
    // console.log(id);
    this.props.addPerson({id: id, name, age})
  }

  render() {
    return (
      <div>
        <h2>我是Person组件</h2>
        <input ref={c => {this.nameNode = c}} type="text" placeholder='请输入名字'/>
        <input ref={c => this.ageNode = c} type="text" placeholder='请输入年龄'/>
        <button onClick={this.addPerson}>添加</button>
        <ul>
          {this.props.data.map((p) => {
            return <li key={p.id}>{p.name}-{p.age}</li>
          })}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.person
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addPerson: (p) => {
      // redux 加法
      dispatch(createAddPersonAction(p))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Person)
