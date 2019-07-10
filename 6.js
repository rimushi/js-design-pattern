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