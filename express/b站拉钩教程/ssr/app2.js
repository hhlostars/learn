var express = require('express');
var app = express();
const path = require('path')

// view engine setup
// 当渲染 .art结尾的文件时， 使用express-art-template
app.engine('html', require('express-art-template'));
app.set('view options', {
    debug: true
});
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

// 托管静态资源
app.use('/public', express.static(path.join(__dirname, '/public')))

const todos = [
  { id: 1, title: "one" },
  { id: 2, title: "two" },
  { id: 3, title: "three" },
  { id: 4, title: "four" }
]
// routes
app.get('/', function (req, res) {
    res.render('index', {
        foo: "bar",
        todos
    });
});

app.listen(3000, () => console.log(`Example app listening on port port!`))