function array_func() {
  const cars = ["Safori", "Jackwar", "Audi", "Bmw"];
  /* add */
  cars[0] = "Ford"
  /* push */
  cars.push("musk");
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
  document.getElementById("array-foreach").innerHTML = txt + "<br>" + cars.toString() + "<br>" + cars.join("*") + "<br>" + combine + "<br>" + slice + "<br>" + person + "<br>" + marks[0];
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
  myFirst();
  setTimeout(mySecond, 3000);
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

    if (x == 0) {
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