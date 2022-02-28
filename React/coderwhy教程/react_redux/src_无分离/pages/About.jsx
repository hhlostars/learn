import React from 'react';

import {subAction} from '../store/action'

// import { connect } from '../utils/connect'
import { connect } from 'react-redux'

function About(props) {
  const {counter, sub} = props
  // console.log(props);
  return (
    <div>
      <h2>About</h2>
      <h3>当前计数:{counter}</h3>
      <button onClick={() => sub(1)}>-1</button>
      <button onClick={() => sub(5)}>-5</button>
    </div>
  );
}

const mapStateToProps = state => ({
  counter: state.counter
})

const mapDispatchToProps = dispatch => ({
  sub: (num) => {
    dispatch(subAction(num))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(About)