class person1{
    constructor(fname,lname,age){
        this.fname=fname;
        this.lname=lname;
        this.age=age;
      
    }
    previous(){
        return [this.fname,this.lname];
    }
  }
  class person2 extends person1{
    #baseprice;
    #maxtaxs;
    constructor(fname,lname,gender){
        super(fname,lname)
        this.gender=gender;
        this.#baseprice=1000;
        this.#maxtaxs=100;
  
    }
    present(){
        return this.previous()+" " +this.gender+`available packet money in my hand is ${this.#baseprice}`;
    }
    #maxtax(){
        return this.previous()+" " +this.gender+`available packet money in my hand is ${this.#baseprice} 
  The tax charge amount is ${this.#maxtaxs}`;
    }
    gettaxamount(){
        console.log(`${this.#maxtax()}`)
    }
  }
  const persons=new person2("gnanan","moorthy","male")
  console.log(persons.present());
  console.log(persons.gettaxamount()) 
  /* two */
  clas= class rectangle{
    constructor(height,width){
        this.heights=height;
        this.widths=width;
    }
    
    calculation(){
        return this.heights*this.widths
    }
    
    get area(){
        return this.calculation();
    }
    set change(value){
        return this.heights=value;
    }
  }
  const square=new clas (2,2)
  console.log(square.area)
  square.change=4;
  console.log(square.area);
  /* same variable name given to class */
  var emp=class{
    constructor(id,name){
        this.id=id;
        this.name=name;
    } 
    show(){
        return this.id
    }
}
  var newemp1=new emp(12,"gnanamoorthy");
  var newemp2=new emp(11,"balaji");
  console.log(newemp1.show());
  console.log(newemp2.show());
  var emp=class {
    constructor(id,name){
        this.id=id;
        this.name=name;
    } 
    show(){
        return this.id
    }
}
  var newemp1=new emp(12,"gnanamoorthy");
  var newemp2=new emp(11,"balaji");
  console.log(newemp1.show());
  console.log(newemp2.show());