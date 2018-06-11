var cradle = require('cradle');
var db = new(cradle.Connection)().database('chelm');

db.exists(function (err, exists) {
    if (err) {
      console.log('error', err);
    } else if (exists) {
      console.log('the chelm is with you.');
    } else {
      console.log('database does not exists.');
      db.create();
      /* populate design documents */
    }
  });

db.save('che', {
    name: 'che',
    password: '123'
}, function (err, res) {
    if (err) {
        // Handle error
        console.log("保存失败：" + err);
    } else {
        // Handle success
        console.log("保存成功：" + res);
    }
});

// db.get('729bfb815cd9267a51c7f6c0f9003d59',function (err, doc) {
//     console.log(doc);
// });
// 
db.view('chelm/all', function (err, res) {
  console.log(res);
      // res.forEach(function (row) {
      //     console.log("%s is on the %s side of the chelm.", row.name, row.password);
      // });
  });