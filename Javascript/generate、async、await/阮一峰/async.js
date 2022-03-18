async function timeout(value, ms) {
  try {
    var res = await new Promise((resolve,reject) => {
      setTimeout(() => {
        reject(value)
      }, ms);
    });
  } catch (error) {
    console.log('error', error);
  }
  
  console.log(res);
}

timeout('hello', 1000)