import React from 'react';
import ReactDOM from 'react-dom'


export default function Demo() {
  console.log('demo');
  // 状态 更新状态的方法
  const [sum, addSum] = React.useState(0)
  function add() {
    addSum(sum + 1)
    // addSum((sum) => {
    //   return sum + 1
    // })
  }
  const [name, setName] = React.useState('tom')
  function changeName() {
    setName('jack')
  }

  // 不传数组 检测所有人
  // 数组有检测的意思
  // 传空数组 都不检测 相当于 compondidMount
  React.useEffect(() => {
    const timer = setInterval(() => {
      addSum((sum) => {
        return sum + 1
      })
    }, 10000);
    return () => {
      clearInterval(timer)
    }
  },[])

  function unmount() {
      ReactDOM.unmountComponentAtNode(document.getElementById('root'))
  }

  const myRef = React.useRef()
  function show() {
    console.log(myRef.current.value);
  }
  return (
    <div>
      <h2>和为{sum}</h2>
      <h2>我的名字{name}</h2>
      <button onClick={add}>添加1</button>
      <button onClick={changeName}>改名</button>
      <button onClick={unmount}>卸载组件</button>
      <br />
      <input ref={myRef} type="text" />
      <button onClick={show}>点击提示数据</button>
    </div>
  );
}
