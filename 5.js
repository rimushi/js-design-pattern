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