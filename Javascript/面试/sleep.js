function sleep(timeout) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, timeout);
  })
}

// sleep(1000).then()

// for(let i = 0; i < 5; i++) {
//   sleep(1000 * i).then(res => {
//     console.log(i);
//   })
// }


(async () => {
  for(let i = 0; i < 5; i++) {
    await sleep(1000 * i)
    console.log(i);
  }
})()


