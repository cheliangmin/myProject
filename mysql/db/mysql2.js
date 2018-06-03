// get the client
const mysql = require('mysql2');
 
// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
    password:'root',
    port:'3308',
  //authentication_string: 'root',
  database: 'test',
    //typeCast解决datetime取比存时间少8小时的问题
    //timezone connection option is not supported by Node-MySQL2. You can emulate this by using typeCast option instead:
    typeCast: function (field, next) {
        if (field.type == 'DATETIME') {
            return new Date(field.string() + 'Z') // can be 'Z' for UTC or an offset in the form '+HH:MM' or '-HH:MM'
        }
        return next();
    }
});
const config = {
    //...
    typeCast: function (field, next) {
        if (field.type == 'DATETIME') {
            return new Date(field.string() + 'Z') // can be 'Z' for UTC or an offset in the form '+HH:MM' or '-HH:MM'
        }
        return next();
    }
}
exports.queryAllData = function(tableName,callback){
  connection.query(
    'SELECT * FROM `'+tableName+'`',
    function(err, results, fields) {
      callback(err,results);
    }
  );
}
exports.execSql = function(sql,condictionArray,callback){
  connection.execute(
    sql,
    condictionArray,
    function(err, results, fields) {
      callback(err,results);
    }
  );
}
// execute will internally call prepare and query
// connection.execute(
//   'SELECT * FROM `t_user` WHERE `name` = ? AND `age` > ?',
//   ['张三', 3],
//   function(err, results, fields) {
//     console.log(results); // results contains rows returned by server
//    // console.log(fields); // fields contains extra meta data about results, if available
 
//     // If you execute same statement again, it will be picked form a LRU cache
//     // which will save query preparation time and give better performance
//   }
// );



// // simple query
// connection.query(
//   'SELECT * FROM `table` WHERE `name` = "Page" AND `age` > 45',
//   function(err, results, fields) {
//     console.log(results); // results contains rows returned by server
//     console.log(fields); // fields contains extra meta data about results, if available
//   }
// );
 
// // with placeholder
// connection.query(
//   'SELECT * FROM `table` WHERE `name` = ? AND `age` > ?',
//   ['Page', 45],
//   function(err, results) {
//     console.log(results);
//   }
// );
// 
//  
// execute will internally call prepare and query
// connection.execute(
//   'SELECT * FROM `table` WHERE `name` = ? AND `age` > ?',
//   ['Rick C-137', 53],
//   function(err, results, fields) {
//     console.log(results); // results contains rows returned by server
//     console.log(fields); // fields contains extra meta data about results, if available
 
//     // If you execute same statement again, it will be picked form a LRU cache
//     // which will save query preparation time and give better performance
//   }
// );