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