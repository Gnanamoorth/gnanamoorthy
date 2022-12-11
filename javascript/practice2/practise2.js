const person={
    2:"helll",
    "name":"gnanan",
    age:21,
    withinobject:{
        one:"two",
        two:"three"
    },
    newd(){
        return accepting = this.age>=22 ? 'is accepting applications' : "is not currently accepting applications";
    },
};
const person2={
    fname:"gnana",
    lname:"moorthy",
}
function add (a,b){
    return this.age+ a+b+this.name;
}
console.log(person.name);
console.log(person["name"]);
console.log(add.call(person,5,4));
console.log(add.apply(person,[5,4]));
bind_func =add.bind(person,5,4);
console.log(bind_func()); 

const new_ob= Object.create(person);
console.log(add.bind(person,5,4));
console.log(person.withinobject.one="hello")
console.log(Object.assign(person,person2))
console.log(person.newd())

function functions (x,y){
    if(y===undefined){
        y=2;
    }
    return x*y;
}
console.log(functions(4))

let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
 };
 let order = (fruit_name, call_production) =>{

    setTimeout(function(){
  
      console.log(`${stocks.Fruits[fruit_name]} was selected`)
  
  // Order placed. Call production to start
     call_production();
    },2000)
  };
  let production = () =>{

    setTimeout(()=>{
      console.log("production has started")
      setTimeout(()=>{
        console.log("The fruit has been chopped")
        setTimeout(()=>{
          console.log(`${stocks.liquid[0]="venila"} and ${stocks.liquid[1]} Added`)
          setTimeout(()=>{
            console.log("start the machine")
            setTimeout(()=>{
              console.log(`Ice cream placed on ${stocks.holder[1]}`)
              setTimeout(()=>{
                console.log(`${stocks.toppings[0]} as toppings`)
                setTimeout(()=>{
                  console.log("serve Ice cream")
                },2000)
              },3000)
            },2000)
          },1000)
        },1000)
      },2000)
    },0000)
  };

  order(0, production);