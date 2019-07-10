// 原型模式 （Prototype pattern）：通俗点讲就是创建一个
// 共享的原型，并通过拷贝这些原型创建新的对象。用于创建
// 重复的对象，这种类型的设计模式属于创建型模式

// 因为不是构造函数，所以不用大写
var someCar = {
    drive: function () { },
    name: '马自达 3'
};
// 使用Object.create创建一个新车x
var anotherCar = Object.create(someCar);
anotherCar.name = '丰田佳美';


/*===================或者用以下方式实现原型模式===================*/

// var vehiclePrototype = {
//     init: function (carModel) {
//         this.model = carModel;
//     },
//     getModel: function () {
//         console.log('车辆模具是：' + this.model);
//     }
// };

// function vehicle(model) {
//     function F() { };
//     F.prototype = vehiclePrototype;
//     var f = new F();
//     f.init(model);
//     return f;
// }
// var car = vehicle('福特Escort');
// car.getModel();


//把属性和方法都放到原型上，但与构造函数模式不同的是，新对象的这些属性和方法是由所有实例共享的。

/*===================或者用以下方式实现原型模式===================*/
// 　  function Person(){

// 　　}

// 　　Person.prototype.name = 'Nicholas';
// 　　Person.prototype.age = 29;
// 　　Person.prototype.job = 'Software Engineer';
// 　　Person.prototype.sayName = function() {
// 　　　　alert(this.name);
// 　　}

// 　　var person1 = new Person();
// 　　person1.sayName();//"Nicholas"　　

// 　　var person2 = new Person(); 
// 　　person2.sayName(); //"Nicholas" 

// 　　alert(person1.sayName == person2.sayName); //true