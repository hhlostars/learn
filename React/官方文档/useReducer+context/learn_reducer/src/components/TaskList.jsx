import React, { useState, useContext, memo } from 'react'
import { TasksContext, TasksDispatchContext } from './TaskContext';


function Task({ task }) {
  const [isEidting, setIsEidting] = useState(false)
  const dispatch = useContext(TasksDispatchContext);
  let editContext
  if (isEidting) {
    editContext = (
      <>
        {/* <input type="text" value={task.text} onChange={e => onChangeTask({...task, text: e.target.value})} /> */}
        <input type="text" value={task.text} onChange={e => dispatch({ type: 'changed', task: {...task, text: e.target.value}})} />
        <button onClick={() => setIsEidting(false)}>Save</button>
      </>
    )
  } else {
    editContext = (
      <>
        {task.text}
        <button onClick={() => setIsEidting(true)}>Edit</button>
      </>
    )
  }
  return (
    <span>
      <input type="checkbox" checked={task.done} onChange={e => { dispatch({ type: 'changed', task: { ...task, done: e.target.checked } }) }}></input>
      {editContext}
      <button onClick={e => dispatch({ type: 'deleted', id: task.id })}>Delete</button>
    </span>

  )
}

// const TaskList = memo(({ tasks, onChangeTask, onDeleteTask }) => {
const TaskList = memo(() => {
  const tasks = useContext(TasksContext);

  return (
    <ul>
      {
        tasks.map(task => {
          return (
            <li key={task.id}>
              <Task task={task} ></Task>
            </li>
          )
        })
      }
    </ul>
  )
})

export default TaskList