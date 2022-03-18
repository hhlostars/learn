const fs = require('fs')
const { resolve } = require('path')

function readFile(fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, 'utf8', (err, data) => {
      // if(err) {
      //   reject(err)
      // } else {
      //   resolve(data)
      // }
      if (err) return reject(error);
      resolve(data);
    })
  })
}

const gen = (function * () {
  const f1 = yield readFile( __dirname + '/test.txt')
  const f2 = yield readFile(__dirname + '/test2.txt')
  // console.log(f1.toString());
  // console.log(f2.toString());
})()



// console.dir(gen);
gen.next().value.then(res => {
  console.log(res);
})
// console.log(gen.next());
// console.log(gen.next());

// function * foo () {
//   yield setTimeout(() => {
//     console.log(123);
//   }, 1000);
// }
// function * foo () {
//   yield new Promise((resolve, reject) => {
//     // resolve(123)
//     setTimeout(() => {
//       resolve(123)
//     }, 1000);
//   })
// }

// console.log(foo().next())
// console.log(readFile(__dirname + '/test.txt').then());

// fs.readFile(__dirname + '/test.txt', 'utf8', (err, data) => {
//   if (err) {
//     console.error(err)
//     return
//   }
//   console.log(data)
// })
