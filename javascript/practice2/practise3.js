let persons={
    first:"gnanamoorthy",
    last:"vengatesan"
}
function person2 (){
    return this.first+ " "+this.last;
}
console.log(person2.call(persons))

const person=["kavin","suresh","all"]
console.log(person)
person[0]=persons
console.log(person)
person.sort();
person.reverse()
console.log(person)
/* Array_map */

const person1_marks = [100, 126, 137, 87, 160, 140];
person1_marks[0] = 190;
console.log(person1_marks[0])
const array = new Array(20, 30, 70, 50);
array[0] = 10;
array.push(60);
array.splice(1, 0, 20)
console.log(array, array.length, array.sort(function (a, b) { return b - a }), typeof (array));


let text = '';
for (i = 0; i < array.length; i++) {
    if (array[i] === 20) {
        continue;
    }
    text += " " + array[i];
};
console.log(text);



/* call back */

function orderpizza(type, name, username, callback, timing, place, location) {
    console.log(`your pizza is orderd`);
    setTimeout(function () {
        let msg = `your ${type} of ${name} is prepared and delivred within`
        callback(msg + timing, {
            place: place
        }, {
            appartment: location,
            doornumber: ["214/3", "14 th floor"]
        }
        );
        setTimeout(() => {
            let succes = `you pizza is successfully deliverd ${username}`
            console.log(`${succes} `);
        }, 1000);
    }, 1000);
}
orderpizza("nonveg", "Double Chees", "gnanamoorthy", function (message, places, yourlocations) {
    console.log(message, places, yourlocations);
}, "30 minutes", "poonamalle", "Golden Opulance");
/* call back 2 */
function orderpizza2(type, name, locations, callback) {
    console.dir("pizza is ordered")
    setTimeout(() => {
        let msg = `${type} ${name}`;
        callback(msg, {
            location: locations,
        });
    }, 2000)
}
function getUserID(username, callback) {
    setTimeout(() => {
        callback(username, {
            age: ['33']
        })
    }, 2000);
}
const order = orderpizza2("veg", "chees double", "kk", function (messages, locations) {
    console.log(messages + " ", locations);
    getUserID("kannan", (userinfo, age) => {
        console.log(userinfo, age);
    })
})
function timeouts() {
    console.log("Hello Gnanamoorthy")
}
setTimeout(timeouts,100)

setTimeout(function () { myfunctions("hello"); }, 3000)

function myfunctions(value) {
    console.log(value);
}
var members = ["John Doe", "Sam Smith", "Allie Cartel"];
function addNewMember(newUser,callback) {
  setTimeout(function () {
    members.push(newUser);
    console.log("Member Added");
    callback();
  }, 200);
}

function getAllMembers() {
  setTimeout(function () {
    console.log("Members are:");
    console.log(members);
  }, 100);
}

addNewMember("Alpha",getAllMembers);

