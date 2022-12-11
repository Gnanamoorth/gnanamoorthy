function array_func() {
  const cars = ["Safori", "Jackwar", "Audi", "Bmw"];
  /* add */
  cars[0] = "Ford"
  /* push */
  cars.push("musk","Tata");
  /* poo */
  cars.pop("");
  /* array using for-loop */
  let length = cars.length;
  let text = "<ul>"
  for (let i = 0; i < length; i++) {
    text += "<li>" + cars[i] + "</li>";
  }
  text += "</ul>";
  elem = document.getElementById("array").innerHTML = cars + "</br>" + length + "</br>" + cars[cars.length - 1] + "<br>" + text;
}

/* array for each */
function array_for() {
  const person = ["jawahar", 'kishore', 'mustab', 'balaji']
  person.sort();
  person.reverse();
  const marks = [90, 60, 40, 100, 50, 80]
  marks.sort(function (a, b) { return a - b });
  const cars = ["Safori", "Jackwar", "Audi", "Bmw"];
  const car1 = ["Google", "microsoft", "firefox", "chrome"]
  /* contact */
  const combine = cars.concat(car1, "github");
  /* splice slice */
  let splice = combine.splice(2, 3, "one", "two")
  let slice = combine.slice(1, 4);
  /* shit unshift add delete */
  cars.shift();
  cars.unshift("royal enfeild");
  cars[0] = "Eneild"
  delete cars[1];
  let txt = "<ul>";
  cars.forEach(myFunctions);
  document.getElementById("array-foreach").innerHTML = txt + "<br>" + cars.toString() + "<br>" + cars.join("*") + "<br>" + combine + "<br>" + slice + "<br>" + person + "<br>" + marks;
  txt = "</ul>";
  function myFunctions(value) {
    txt += "<li>" + value + "</li>";
  }
}
/*  array map */
function maping() {
  const myArr = Array.from("ABCDEFG");
  const houseNumber = [10, 40.6, 50, 1, 4, 6];
  const keys = houseNumber.entries();
  let key_values = "";
  for (let x of keys) {
    key_values += x + "<br>"
  }
  houseNumber.sort(function (a, b) { return a - b });
  const housenumber1 = houseNumber.map(maping_function => Math.ceil(maping_function * 2));
  const houseNumber2 = houseNumber.filter(i => i > 18);
  const houseNumber3 = houseNumber.reduce((total, value) => total + value);
  const houseNumber4 = houseNumber.every(message => message < 51);
  const houseNumber5 = houseNumber.some(messages => messages > 10);
  const houseNumber6 = houseNumber.find(i => i > 40);
  const houseNumber7 = houseNumber.findIndex(i => i > 16);
  const covid_stages = ["stage1", "stage2", "stage3", "stage4"]
  const testing = covid_stages.includes("stage5")
  document.getElementById("map").innerHTML = housenumber1 + "<br>" + houseNumber2 + "<br>" + houseNumber3 + "<br>" + houseNumber4 + "<br>" + houseNumber5 + "<br>" + houseNumber6 + "<br>" + houseNumber7 + "<br>" + myArr + "<br>" + key_values + "<br>" + testing;
}
/* call function */
function call_function() {
  const person = {
    fullName: function (country, state) {
      return this.firstName + " " + this.lastName + " " + country + " " + state;
    }
  }
  const person1 = {
    firstName: "gnana",
    lastName: "moorthy"
  }
  const person2 = {
    firstName: "gnanavel",
    lastName: "vengatesan"
  }
  const member = {
    firstName: "kannan",
    lastName: "subburayan"
  };
  let bind_function = person.fullName.bind(member, "india", "Karnataka");
  document.getElementById("caling").innerHTML = person.fullName.call(person1, "india", "TamilNadu") + "<br> <br>" + bind_function();
  document.getElementById("calings").innerHTML = person.fullName.apply(person2, ["india", "TamilNadu"]);
}

const person = {
  firstName: ["gnana", "gnanamoorthy"],
  lastName: ["moorthy", "vengatesan"],
  age: 22,
  gender: "male",
  fullname() {
    return this.firstName[1] + " " + this.lastName[1];
  }
}
console.log(typeof (person) + " " + person.fullname());

function call_back() {
  function myDisplayer(some) {
    document.getElementById("call").innerHTML = some;
  }
  function myFirst() {
    myDisplayer("Hello");
  }
  function mySecond() {
    myDisplayer("Goodbye");
  }
  setInterval(myFirst,1000);
  setInterval(mySecond,2000);
}
function main_function() {
  function one(somes) {
    document.getElementById("call_fn").innerHTML = somes;
  }
  function calculator(num1, num2) {
    let sum = num1 + num2;
    return sum;
  }
  let result = calculator(5, 10);
  one(result);
}
function timeintervel() {
  setInterval(myFunction, 1000);
  function myFunction() {
    let d = new Date();
    document.getElementById("settimeinterval").innerHTML =
      d.getHours() + ":" +
      d.getMinutes() + ":" +
      d.getSeconds() + ":" + d.getMilliseconds();
  }
}
/* promises */
function myleveljs() {
  function firstTest(some) {
    document.getElementById("promise").innerHTML = some;
  }
  let myPromise = new Promise(function (myResolve, myReject) {
    let x = 0;

    if (x == 1) {
      myResolve ("ok");
    }
    else {
      myReject("Error");
    }
  });
  myPromise.then(
    function (value) {firstTest(value); },
    function (error) {firstTest(error); }
  );
}

function promise_time() {
  const myPromise = new Promise(function(myResolve, myReject) {
  setTimeout(function(){ myResolve("I love You !!"); }, 3000);
});

myPromise.then(function(value) {
  document.getElementById("promise-timedelay").innerHTML = value;
});
}
/* class */
function clas_fn() {
  class car{
    constructor(name,year){
      this.names=name;
      this.years=year;
    }
    age(){
      let dates=new Date();
      return dates.getFullYear()-this.years;
    }
  }
  const mycar=new car("ford",2000); 
  const mycar2=new car("TATA",2021);
  document.getElementById("class").innerHTML=mycar.names+" "+mycar.age() +"<br>"+Object.values(mycar2);
}
/* class using extend */
function exten (){
  class person{
    constructor(name,year){
      this.name = name;
      this.year = year;
    }
    present(){
      return this.name+this.year;
    }
  }
  class person2 extends person{
    constructor(name,year,gender){
      super(name,year);
      this.gender=gender;
    }
    show(){
      return this.present()+this.gender;
    }
  }
  let myperson=new person2 ("gnanamoorthy",2001,"male");
 document.getElementById("extent").innerHTML=myperson.show();
}
/* get and set method */

class office {
  constructor(f,l,e,a){
    this.firstName=f;
    this.lastName=l;
    this.email=e;
    this.age=a;
  }
  get display(){
    return [this.firstName, this.lastName,this.email,this.age];
  }
  set emails (value){
    this.email=value;
  }
  set lastName_change(value){
    this.lastName=value;
  }
}
let offices=new office("gnana","moorhy","xyz@gmail.com",21)
console.log(offices.display);
offices.emails="moorthygnana@1234gmail.com";
console.log(offices.display);
offices.lastName_change="vel";
console.log(offices.display+typeof(offices));

class google{
  constructor(h){
    this.h=h;
    this.w=h;
  }
  static create(a,b){
    return  a===b;
  }
}
let chromes =new google(1);
let yooho =new google(4);
console.log(google.create(chromes,yooho));

class home {
  constructor(entrence,hall,kitchen,room){
    this.entrence =entrence;
    this.hall =hall;
    this.kitchen = kitchen;
    this.room = room;
  }
  present(){
    return this.entrence
  }
}
class home2 extends home{
  constructor(entrence,balkanee) {
    super(entrence)
    this.balkanee=balkanee;
  }
   show(){
    return this.present()+" "+this.balkanee;
  }
}
let accesoreys=new home2("one","one");
console.log(accesoreys.show());

var count1 = 5;
var myTimer =  setInterval(function () {
  console.log(count1);
  count1 -= 1;
  if (count1 <= 0) {
    clearInterval(myTimer);
  }
}, 1000);

/*  */
/*console.log("Welcome to Programiz!");
const person={
    friends:[{ 
        multiple:[1,2,3,4,5,],
        name:"guru",
        age:22
    },person2={ 
        name:"balaji",
        age:22
    },
     ],
    firstName:"bala",
    lastName:"balaji",
    age:22
};
console.log(person.friends[0].multiple[2])
console.log(person.friends[1]["name"]="moorthy")
console.log(Object.values(person.friends[1]["name"]))

let x=10;
x*=5
console.log(x)
let b=100
b+=3
z=Math.pow(b,2)
console.log(z)
let c=[2,1,5]
let d=[4,1,5]
console.log(c[2]===d[2],c[0]===d[0])
console.log(c[0]!==d[0],c[1]!==d[1])
console.log(x>>=4)
console.log(x<<=6)
console.log(x>>>=3)
var a=10
var a &&=10*/