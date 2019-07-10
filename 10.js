//用函数来封装以特定接口创建对象的细节，工厂模式解决了重复实例化的问题 
function  creatPerson(name,age) {
    var o = {};
    o.name = name;
    o.age = age;
    o.sayName = function () {
        console.log(this.name);
    };
    return o;
}
var person1 = creatPerson("nike",29);
console.log(person1);



