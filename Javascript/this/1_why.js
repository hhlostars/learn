// 为什么使用this
function identify() {
  return this.name.toUpperCase()
}

function speak() {
  var greeting = `hello, i am ` + identify.call(this);
  console.log(greeting);
}

var me = {
  name: 'Kyle'
}

var you = {
  name: 'Reader'
}

console.log(identify.call(me));
console.log(identify.call(you));

speak.call(you)
speak.call(me)

// 若不使用this
// 用 context 去