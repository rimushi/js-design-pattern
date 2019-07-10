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
 // 命令对象 
 var commondObj = function(reciver) {
     return function() { 
        reciver.reFresh(); 
     } 

 }; 
 var commondObj1 = commondObj(menu); 
 setCommond(commondObj1);