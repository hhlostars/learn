import React, { useReducer } from 'react'
import { TasksContext, TasksDispatchContext } from './TaskContext'

export function TasksProvider({ children }) {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);
  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
}

// let nextId = 3;
const initialTasks = [
  { id: 0, text: 'Philosopher’s Path', done: true },
  { id: 1, text: 'Visit the temple', done: false },
  { id: 2, text: 'Drink matcha', done: false }
];

function tasksReducer(tasks, action) {
  switch (action.type) {
    case 'add':
      return [...tasks, {
        id: action.id,
        text: action.text,
        done: false
      }]
    case 'changed':
      return tasks.map(task => {
        return task.id === action.task.id ? action.task : task
      })
    case 'deleted':
      return tasks.filter(task => task.id !== action.id)
    default:
      return tasks
  }
}