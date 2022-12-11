const maping=new Map([
    [
        ["hello","world"],
        ["gnana","moorthy"]
        ],
        ["apple",300]
    ]);
   
    maping.delete("apple");
    console.log(maping.get("apples"));
    console.log(maping.size);
    console.log(maping.has("apples"));
    console.log(maping.keys(),maping.values(),maping.entries());
    maping.set("apples",300).set("bannana",10).set("grap",160);
    maping.forEach(functions);
    function functions(keys,values,map){
        console.dir(keys+" "+values+" "+map);
    }
    console.dir(maping)
    function gnanan(name){
        console.log(`${name}`)
    }
    function moorthy(callbacks){
         let person={
            fullname:"gnanamoorthy"
        }
        callbacks(person.fullname);
    }
    moorthy(gnanan);
/* map */
function maps() {
    let artist = ["Beyonce", "Bruno Mars", "Taylor Swift"];
    const newartist = artist.map(function (art) {
        return art + " " + "the best"
    });
    return newartist;
}
console.dir(maps());
console.dirxml(JSON.stringify(maps()));

/* map filter */
let studentRecords = [
    { name: 'John', id: 123, marks: 98 },
    { name: 'Baba', id: 101, marks: 23 },
    { name: 'John', id: 200, marks: 45 },
    { name: 'Wick', id: 115, marks: 75 },]
let totalMarks = studentRecords.map((stu) => {
    if (stu.marks < 50) {
        stu.marks += 15;
    }
    return stu;
}).filter(stus => {
    if (stus.marks > 50) {
        return stus;
    }
});
console.log(totalMarks);