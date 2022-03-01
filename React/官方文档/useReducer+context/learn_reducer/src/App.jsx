
import React, { useReducer, memo } from 'react'
import AddTask from './components/AddTask'
import TaskList from './components/TaskList'

import {TasksProvider} from './components/Provider'

// let nextId = 3;
// const initialTasks = [
//   { id: 0, text: 'Philosopher’s Path', done: true },
//   { id: 1, text: 'Visit the temple', done: false },
//   { id: 2, text: 'Drink matcha', done: false }
// ];




const App = memo(() => {
  // const [tasks, dispatch] = useReducer(reducer, initialTasks)
  // console.log(tasks);

  // function handleAddTask(text) {
  //   dispatch({
  //     type: 'add',
  //     id: ++nextId,
  //     text: text
  //   })
  // }

  // function handleChangeTask(task) {
  //   console.log(task);
  //   dispatch({
  //     type: 'changed',
  //     task
  //   })
  // }

  // function handleDeleteTask(id) {
  //   dispatch({
  //     type: 'deleted',
  //     id
  //   })
  // }

  return (
    <TasksProvider>
      
        <h1>Day off in Kyoto</h1>
        {/* <AddTask onAddTask={handleAddTask}></AddTask>
        <TaskList
          tasks={tasks}
          onChangeTask={handleChangeTask}
          onDeleteTask={handleDeleteTask}
        ></TaskList> */}
        <AddTask></AddTask>
        <TaskList></TaskList>
      
    </TasksProvider>
  )
})

// function reducer(tasks, action) {
//   switch (action.type) {
//     case 'add':
//       return [...tasks, {
//         id: action.id,
//         text: action.text,
//         done: false
//       }]
//     case 'changed':
//       return tasks.map(task => {
//         return task.id === action.task.id ? action.task : task
//       })
//     case 'deleted':
//       return tasks.filter(task => task.id !== action.id)
//     default:
//       return tasks
//   }
// }

export default App

// import { useReducer } from 'react';
// import AddTask from './components/AddTask';
// import TaskList from './components/TaskList';

// export default function TaskApp() {
//   const [tasks, dispatch] = useReducer(
//     tasksReducer,
//     initialTasks
//   );

//   function handleAddTask(text) {
//     dispatch({
//       type: 'added',
//       id: nextId++,
//       text: text,
//     });
//   }

//   function handleChangeTask(task) {
//     dispatch({
//       type: 'changed',
//       task: task
//     });
//   }

//   function handleDeleteTask(taskId) {
//     dispatch({
//       type: 'deleted',
//       id: taskId
//     });
//   }

//   return (
//     <>
//       <h1>Day off in Kyoto</h1>
//       <AddTask
//         onAddTask={handleAddTask}
//       />
//       <TaskList
//         tasks={tasks}
//         onChangeTask={handleChangeTask}
//         onDeleteTask={handleDeleteTask}
//       />
//     </>
//   );
// }

// function tasksReducer(tasks, action) {
//   switch (action.type) {
//     case 'added': {
//       return [...tasks, {
//         id: action.id,
//         text: action.text,
//         done: false
//       }];
//     }
//     case 'changed': {
//       return tasks.map(t => {
//         if (t.id === action.task.id) {
//           return action.task;
//         } else {
//           return t;
//         }
//       });
//     }
//     case 'deleted': {
//       return tasks.filter(t => t.id !== action.id);
//     }
//     default: {
//       throw Error('Unknown action: ' + action.type);
//     }
//   }
// }

// let nextId = 3;
// const initialTasks = [
//   { id: 0, text: 'Philosopher’s Path', done: true },
//   { id: 1, text: 'Visit the temple', done: false },
//   { id: 2, text: 'Drink matcha', done: false }
// ];