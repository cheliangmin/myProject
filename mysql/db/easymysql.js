var Client = require('easymysql');
 
var mysql = Client.create({
  'maxconnections' : 10
});
 
mysql.addserver({
  'host' : 'localhost',
  'user' : 'root',
  'password' : 'root'
});
mysql.addserver({
  'host' : 'localhost',
  'user' : 'root',
  'password' : 'root'
});
mysql.on('busy', function (queuesize, maxconnections, which) {
  // XXX: write log and monitor it
});
 
mysql.query('SHOW DATABASES', function (error, res) {
  console.log(res);
});
 
// bind params
mysql.query({
  sql: 'select * from t_user where user =:user',
  params: {user: '张三'}
}, function (err, rows) {
  console.log(rows);
});