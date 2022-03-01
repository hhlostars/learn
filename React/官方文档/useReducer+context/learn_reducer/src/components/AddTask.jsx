import React, { useState, useContext, memo } from 'react'
import { TasksContext, TasksDispatchContext } from './TaskContext';

let nextId = 3
const AddTask = memo(({ onAddTask }) => {
  const [text, setText] = useState('')
  const dispatch = useContext(TasksDispatchContext);
  return (
    <div>
      <input value={text} placeholder='Add' onChange={e => setText(e.target.value)} />
      <button onClick={() => {
        dispatch({
          type: 'add',
          id: nextId++,
          text: text,
        }); setText('');
      }}>ADD TASK</button>
    </div>
  )
})

export default AddTask