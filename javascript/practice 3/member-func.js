/* using prototype */
function person1(){
    var name="gnanamoorthy";
    person1.prototype.displayperson=function(){
        console.log(name)
    }
}
var person=new person1();
person.displayperson();

/* using this */
function person2(){
    var name="gnanamoorthy";
    this.displayperson=function(){
        console.log(name)
    }
}
var person=new person2();
person.displayperson();