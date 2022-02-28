import React, { Component } from 'react';
import './index.css'

class Idnex extends Component {
  
  render() {
    const {doneNum, allNum} = this.props
    
    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" checked={doneNum === allNum} onChange={this.props.handleCheckAll}/>
        </label>
        <span>
          <span>已完成{doneNum}</span> / 全部{allNum}
        </span>
        <button className="btn btn-danger" onClick={this.props.clearAllDone}>清除已完成任务</button>
      </div>
    );
  }
}

export default Idnex;
