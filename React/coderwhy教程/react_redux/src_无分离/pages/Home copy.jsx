import React, { useState } from 'react';

import store from '../store'

import { addAction } from '../store/action'


export default function Home() {
  const [counter, setCounter] = useState(store.getState().counter)

  function add(num) {
    console.log(num);
    store.dispatch(addAction(num))
  }

  React.useEffect(() => {
    store.subscribe(() => {
      // console.log(222);
      setCounter(store.getState().counter)
    })
  }, [counter])

  return (
    <div>
      <h2>Home</h2>
      <h3>当前计数:{counter}</h3>
      <button onClick={() => {add(1)}}>+1</button>
      <button onClick={() => {add(5)}}>+5</button>
    </div>
  );
}
