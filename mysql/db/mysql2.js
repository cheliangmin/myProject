// get the client
const mysql = require('mysql2');
 
// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'test'
});
 
// execute will internally call prepare and query
connection.execute(
  'SELECT * FROM `t_user` WHERE `name` = ? AND `age` > ?',
  ['张三', 3],
  function(err, results, fields) {
    console.log(results); // results contains rows returned by server
   // console.log(fields); // fields contains extra meta data about results, if available
 
    // If you execute same statement again, it will be picked form a LRU cache
    // which will save query preparation time and give better performance
  }
);

exports.queryAllData = function(tableName,callback){
  connection.query(
    'SELECT * FROM `'+tableName+'`',
    function(err, results, fields) {
      callback(err,results);
    }
  );
}