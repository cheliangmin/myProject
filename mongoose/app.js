const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/shuoshuo');

const Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

const usersSchema = new Schema({
    author: ObjectId,
    username: String,
    password: String,
    registDate: Date,
    avatar:String
});

var users = mongoose.model('users', usersSchema);
var d1 = new Date();
users.find(function (err, users) {
    if (err) return console.error(err);
    console.log(users);
    var d2 = new Date();
    console.log(parseInt(d2-d1));
});