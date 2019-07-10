# javascript 设计模式示例库

## Index

1. [构造函数模式](#1构造函数模式) | [source](https://github.com/rimushi/js-design-pattern/blob/master/demo1.js)
1. [模块化模式](#2模块化模式) | [source](https://github.com/rimushi/js-design-pattern/blob/master/demo2.js)
1. [暴露模块模式](#3暴露模块模式) | [source](https://github.com/rimushi/js-design-pattern/blob/master/demo3.js)
1. [单例模式](#4单例模式) | [source](https://github.com/rimushi/js-design-pattern/blob/master/demo4.js)
1. [观察者模式](#5观察者模式) | [source](https://github.com/rimushi/js-design-pattern/blob/master/demo5.js)
1. [中介者模式](#6中介者模式) | [source](https://github.com/rimushi/js-design-pattern/blob/master/demo6.js)
1. [原型模式](#7原型模式) | [source](https://github.com/rimushi/js-design-pattern/blob/master/demo7.js)
1. [命令模式](#8命令模式) | [source](https://github.com/rimushi/js-design-pattern/blob/master/demo8.js)
1. [外观模式](#9外观模式) | [source](https://github.com/rimushi/js-design-pattern/blob/master/demo9.js)
1. [工厂模式](#10工厂模式) | [source](https://github.com/rimushi/js-design-pattern/blob/master/demo10.js)
1. [装饰者模式](#11装饰者模式) | [source](https://github.com/rimushi/js-design-pattern/blob/master/demo11.js)
1. [享元模式](#12享元模式) | [source](https://github.com/rimushi/js-design-pattern/blob/master/demo12.js)
---

## 1构造函数模式

``` bash
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
```


## 2模块化模式

``` bash
var testModule = (function(){
	//私有成员并非它们表面上看上去那么具有扩展性。
	var counter = 0;
	return{
	   addCounter: function() {
	   	  return ++counter;
	   },
	   resetCounter: function() {
	   	  counter = 0;
	   	  return counter;
	   }
	}
})();

console.log(testModule.addCounter());
console.log(testModule.resetCounter());

```

## 3暴露模块模式

``` bash
var myRevealingModule = function () {

        var privateCounter = 0;

        function privateFunction() {
            privateCounter++;
            console.log("abc");
        }

        function publicFunction() {
            publicIncrement();
        }

        function publicIncrement() {
            privateFunction();
        }

        function publicGetCount(){
          return privateCounter;
        }

        // Reveal public pointers to
        // private functions and properties       

        return {
            start: publicFunction,
            increment: publicIncrement,
            count: publicGetCount
        };

    }();

myRevealingModule.start();

```

## 4单例模式

``` bash
// 单例构造函数
function CreateSingleton (name) {
    this.name = name;
    this.getName();
};

// 获取实例的名字
CreateSingleton.prototype.getName = function() {
    console.log(this.name)
};
// 单例对象(通过代理类来实现单例)
var Singleton = (function(){
    var instance;
    return function (name) {
        if(!instance) {
            instance = new CreateSingleton(name);
        }
        return instance;
    }
})();

// 创建实例对象1
var a = new Singleton('a');
// 创建实例对象2
var b = new Singleton('b');

console.log(a===b);

```

## 5观察者模式

``` bash
// 观察者模式也可以称为订阅模式
var merchants = {};
// 定义预定列表
merchants.orderList = {};
// 将增加的预订者添加到预定客户列表中
merchants.listen = function(id, info) {
    if(!this.orderList[id]) {
        this.orderList[id] = [];
    }
    this.orderList[id].push(info);
    console.log('预定成功')
};
//发布消息
merchants.publish = function() {
    var id = Array.prototype.shift.call(arguments);
    var infos = this.orderList[id];
    // 判断是否有预订信息
    if(!infos || infos.length === 0) {
        console.log('您还没有预订信息!');
        return false;
    }
    // 如果有预订信息，则循环打印
    for (var i = 0, info; info = infos[i++];) {
        console.log('尊敬的客户：');
        //使用fn.apply(this, arguments));来保证传进有参函数也可以执行并得到结果
        info.apply(this, arguments);
        console.log('已经到货了');
    }
};
// 定义一个预订者customerA，并指定预定信息
var customerA = function() {
    console.log('黑色至尊版一台');
};
// var customerB = function() {
//     console.log('红色至尊版一台');
// };

// customerA 预定手机，并留下预约电话
merchants.listen('15888888888', customerA); 
// merchants.listen('15888888888', customerB); 

// 商家发布通知信息
merchants.publish('15888888888');
/**
   尊敬的客户：
   黑色至尊版一台
   已经到货了
 */

```

## 6中介者模式

``` bash
var Plane = function(name) {
  this.name = name;
}

Plane.prototype.send = function(msg, to){
  tower.send(msg, to);   // 飞机不是把信息直接发给飞机，而是发给塔台
}

Plane.prototype.receive = function(msg){
  console.log(this.name + '[接受到]' + msg);
}


var tower = {
  // planes: {},
  regedit: function(p){
    // this.planes[p.name] = p;
    console.log(p);
  },  
  send: function(msg, to){  
    // console.log(this.planes[to.name]);
    // this.planes[to.name].receive(msg);
    to.receive(msg);
  }
};

var p1 = new Plane('p1');
var p2 = new Plane('p2');

tower.regedit(p1);
tower.regedit(p2);
p1.send('我要降落', p2);

```

## 7原型模式

``` bash
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

```

## 8命令模式

``` bash
// 命令模式的主要用途是让命令的接收者和命令发送者消除耦合
// 发送者 
 var setCommond = function(fn) {      
    fn() 
 }; 
 // 执行命令者 
 var menu = { 
     reFresh: function() { 
        console.log("刷新"); 
     }, 
     add: function() { 
        console.log("增加"); 
     }, 

     delete: function() { 
        console.log("删除"); 
     } 

 }; 
 // 9命令对象 
 var commondObj = function(reciver) {
     return function() { 
        reciver.reFresh(); 
     } 

 }; 
 var commondObj1 = commondObj(menu); 
 setCommond(commondObj1);

```

## 9外观模式

``` bash
// 门面模式
// 适配器模式是将一个对象包装起来以改变其接口，而外观模式是将一群对象包装起来以简化其接口。
// 适配器是将接口转换为不同接口，而外观模式是提供一个统一的接口来简化接口。

function CPU() {
  this.startup = function () {
    console.log("启动CPU");
  };
}
function Memory() {
  this.startup = function () {
    console.log("启动Memory");
  };
}
function Disk() {
  this.startup = function () {
    console.log("启动Disk");
  };
}
function Computer() {
  var cpu, memory, disk;
  cpu = new CPU();
  memory = new Memory();
  disk = new Disk();
  this.start = function () {
    cpu.startup();
    memory.startup();
    disk.startup();
  }
}

computer = new Computer();
computer.start();

```



## 10工厂模式

``` bash
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

```

## 11装饰者模式

``` bash
// 给对象动态添加职责的方式就是装饰者模式，
// 能够在不改变原对象的情况下，在运行的时候给对象添加新的职责。
// 与继承相比，装饰者是一种更轻便灵活的做法。

//原始的飞机类
var Plan = function(){};
Plan.prototype.fire = function(){
    console.log('发射普通子弹,');
};
//装饰类
var MissileDecorator = function(plan){
    this.plan = plan;
}
MissileDecorator.prototype.fire = function () {
    this.plan.fire();
    console.log('发射导弹!');
};
var plan = new MissileDecorator( new Plan() );
plan.fire();//发射普通子弹,发射导弹!


/*===================或者用ES7的装饰器decorator实现===================*/


// @testable
// class MyTestableClass {
//   //...
// }
// function testable(target) {
//   target.isTestable = true;
// }
// MyTestableClass.isTestable // true


/*===================目标类的prototype对象上添加属性，因此就可以在实例上调用。修饰类重写第一示例==================*/

// function MissileDecorator(target){
//     let method = target.prototype.fire;
//     target.prototype.fire = function(...args){
//         method.apply(target.prototype,...args);
//         console.log('发射导弹!');
//     }
// }
// //修饰类
// @MissileDecorator
// class Plan{//原始的飞机类
//     fire(){
//         console.log('发射普通子弹,');
//     }
// }

// new Plan().fire();//发射普通子弹,发射导弹!

```

## 12享元模式

``` bash
var Model = function( sex, underwear ){
    this.sex = sex;
    this.underwear = underwear;
};
 
Model.prototype.takePhoto = function(){
    console.log( 'sex=' + this.sex + 'underwear=' +this.underwear );
};
 
for( var i = 1; i <= 50; i++ ){
    var maleModel = new Model( 'male', 'underwear' + i);
    male.takePhoto();
}
 
for( var i = 1; i <= 50; i++ ){
    var femaleModel = new Model( 'female', 'underwear' + i);
    female.takePhoto();
}

```