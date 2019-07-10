function Person( name, age) {
	this.name = name;
	this.age = age;
}

Person.prototype.toSay = function() {
	return "Hello everyOne; my name is" + this.name + " " + this.age;
}

var  ben = new Person("Ben", 30);
var  sun = new Person("Sun", 26);

console.log(ben);
console.log(sun.toSay());
// 创建自定义的构造函数意味着将来可以将它的实例标识为一种特定的类型；而这正是构造函数模式胜过工厂模式的地方。