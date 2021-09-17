const express = require('express')
const app = express()
const fs = require('fs')
const template = require('art-template')
const port = 3000

const foo = "foo"

const todos = [
  { id: 1, title: "one" },
  { id: 2, title: "two" },
  { id: 3, title: "three" },
  { id: 4, title: "four" }
]

app.get('/', (req, res) =>
  fs.readFile('./views/index.html', 'utf-8',(err, data) => {
    if (err) {
      return res.status(404).send('404 NOT FOUND.')
    }
    
    // 字符串替换
    // let str = ''
    // todos.forEach(todo => {
    //   str += `<li>${todo.title}</li>`
    // })
    // console.log(typeof(data));
    // const ret = data.replace('^_^', str)
    // res.end(ret)

    const ret = template.render(data, {
      foo,
      todos
    })

    res.end(ret)
  })
)

app.listen(port, () => console.log(`Example app listening on port port!`))