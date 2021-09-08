const mongoose = require('mongoose');
const { dbUri } = require('../config/config.default')

mongoose.connect(dbUri);

const Cat = mongoose.model('Cat', { name: String });

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  // we're connected!
  console.log('Mongodb连接成功');
});

module.exports = {
  User: mongoose.model('User', require('./user')),
  Article: mongoose.model('Article', require('./article')),
}