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

