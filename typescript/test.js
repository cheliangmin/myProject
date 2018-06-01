var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log('hell0.');
var a = 1;
var b = 'zhang';
var c = "\n\t<div>Yo, " + b + "</div>\n\t";
var d = ['a', 'b', '1'];
function hello(name) {
    if (name === void 0) { name = 'lyh'; }
    return 'hello ' + name;
}
console.log(hello());
var hello2 = function (name) { return "hello " + name; };
console.log(hello2(1));
var obj = { e: 1, f: 2 };
var add = function (_a) {
    var e = _a.e, f = _a.f;
    return e + f;
};
console.log(add(obj));
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.greet = function () {
        return this.name + "\u5411\u4F60\u95EE\u597D";
    };
    return Person;
}());
console.log(new Person('小米').greet());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, major) {
        var _this = _super.call(this, name) || this;
        _this.major = major;
        return _this;
    }
    Student.prototype.greet = function () {
        return this.major + "\u7CFB\u7684" + this.name + "\u5411\u4F60\u95EE\u597D";
    };
    return Student;
}(Person));
console.log(new Student('小马', '哲学').greet());
