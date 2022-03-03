// 1. export 声明语句
// export const name = "why"
// export const age = 18

const name = 'why'
const age = 18
const a = 'abc'

// 2. 导出和声明分开
export {
  name,
  age,
  // a as default
}

// 3.导出起别名
// export {
//   name as fName,
//   age
// }

export default a
