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


