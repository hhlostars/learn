import React, { Component, createContext } from 'react';
import './index.css'

const myContext = createContext()
const { Provider } = myContext

function B(props) {
  console.log(props);
  return(
    <div className='child'>
      <h2>我是B组件</h2>
      <h4>我接收到{props.name}</h4>
      <C></C>
    </div>
  )
}

function C() {
  const num = React.useContext(myContext)
  return (
    <div className='grand'>
      <h2>我是C组件</h2>
      <h2>{num}</h2>
    </div>
  )
}

export default function A() {
  return (
    <div className='parent'>
      <h2>我是A组件</h2>
      <Provider value={29}>
        <B name='tom'></B>
      </Provider>

    </div>
  );
}


// class B extends Component {
//   render() {
//     return (
//       <div className='child'>
//         <h2>我是B组件</h2>
//         <h4>我接收到</h4>
//         <C></C>
//       </div>
//     );
//   }
// }

// class C extends Component {
//   static contextType = myContext
//   render() {
//     return (
//       <div className='grand'>
//         <h2>我是C组件</h2>
//         <h2>{this.context}</h2>
//       </div>
//     );
//   }
// }

// export default class A extends Component {
//   state = {

//   }
//   render() {
//     return (
//       <div className='parent'>
//         <h2>我是A组件</h2>
//         <Provider value={18}>
//           <B name='tom'></B>
//         </Provider>
//       </div>
//     );
//   }
// }
