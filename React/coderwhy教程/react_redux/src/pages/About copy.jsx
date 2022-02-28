import React, {useState} from 'react';

import store from '../store'

import {subAction} from '../store/action'

export default function About() {
  const [counter, setCounter] = useState(store.getState().counter)

  function sub(num) {
    store.dispatch(subAction(num))
  }

  React.useEffect(() => {
    store.subscribe(() => {
      setCounter(store.getState().counter)
    })
  }, [])

  return (
    <div>
      <h2>About</h2>
      <h3>当前计数:{counter}</h3>
      <button onClick={() => {sub(1)}}>-1</button>
      <button onClick={() => {sub(5)}}>-5</button>
    </div>
  );
}
