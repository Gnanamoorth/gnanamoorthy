const person = {
    friends: [{
        name: "guru",
        age: 22
    }, person2 = {
        name: "balaji",
        age: 22
    },
    ],
    firstName: "bala",
    lastName: "balaji",
    age: 22
};
person.friends[1].name = "gnanavel";
person.friends.push({
    name: "gnana moorthy",
    age: 29
})
console.log(person.friends);
person["age"] = 25
console.log(person)
/* variable key words let var const */
let a = `hello,world
i am gnanamoorthy`
console.log(a);
let $ = 101;
console.log($);

const z = 60;
{
    const z = 80;
}
{
    const z = 40;
}
console.log(z)

carNmae = "TATA";
console.log(carNmae)

const cars = ["TATA", "Safarie", "Renault", "BMW"]
console.log(cars.toString())
let values = Object.entries(person);
console.log(values)
const one = [1, 2, 3, 4, 5]
let combine = one.concat(cars);
combine.splice(3, 0, "lemone")
console.log(combine.toString());

const array_function = function () {
    console.log("hello i am a guru friend gnanamoorthy")
}
const array = [6, 7, 8, 9, 10, array_function(),
    function (a, b) {
        return a * b;
    }];
console.log(one[5]);
console.log(array[6](10, 10));

var stringArray = new Array("one", "two", "three", "four","five");
for (i = 0; i < stringArray.length; i+=2) {
    console.log(stringArray[i]);
}

let age= 18;

if (age>21){
    console.log(`your are eligilble to vote`)
}
else if(age>=18 && age>17){
    console.log("i think next year your are eligbel to vote")
}
else if(age>19 || age>19){
    console.log("yes your eligible")
}
else{
    console.log(`your not eligilbel to vote`)
}

var check= age>=18?"can vote":"can't vote";
console.log(check);
let foo=( null&&25) ?? 22;
console.log(foo)
/* not clear */
if(test=function(){
    return 2*10;
}>=16){
    console.log("func is correct");
}
else{
    console.log("please enter the number");
}

if(test=function (){
    return 10*2;
} >=16){
    console.log("func is correct");
}
else{
    console.log("please enter the number");
}

test=function hello1 (){
    return 10*1
}
test2=function hello2 (){
    return 10*5
}
test3=function hello3 (){
    return 1*10
}

if(test()>=16||(test()>=30||test3()>=11)){
    console.log("func is correct");
}
else if(test2()>=16 && test2()>=30){
    console.log("the second func is correct")
}
else{
    console.log("func is wrong");
}
/* using if else */

 function conditions_check(){
    let test1=document.getElementById("check").value;
    let test2;
   document.getElementById("call").style.color = "red";
   document.getElementById("call").style.fontSize ="20px";
    if(test1 ==="1" ){
        test2="All the best Today is your best day";
       
    }
    document.getElementById("call").innerHTML = test2;
} 
let volvo="car";
let x="volvo"+(16+16);
console.log(x)

/*functions */
function first_func(parameter1,parametr2){
   return parameter1+parametr2;
}
let h=first_func(2,4)
console.log(h)
/* new function */

let gnanavel=(a,b,c) => a>b||(b>a&&a>c)? "hello":"world";
console.log(gnanavel(2,5,1));