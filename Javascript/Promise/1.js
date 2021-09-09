const fs = require('fs')

var tem = 1
async function fn() {
  let a = await setTimeout(() => {
    return 33
  }, 100);
}

fn().then((res) =>{
  console.log(res);
  console.log(tem);
})