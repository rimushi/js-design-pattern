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

--------------------- 
作者：allenliu6 
来源：CSDN 
原文：https://blog.csdn.net/allenliu6/article/details/53082816 
版权声明：本文为博主原创文章，转载请附上博文链接！
