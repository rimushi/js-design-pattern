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

