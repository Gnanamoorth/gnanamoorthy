let persone = new Promise((resolve,fullfile, reject) => {
    let x = 1 + 2;
    if (x >= 6) {
        resolve("success");
    }
    else if(x>2){
        fullfile("nothing")
    }
    else {
        reject("Fail")
    }
});
persone.then(
    function (message) {
        console.dir( message)
    })
    .catch(function(message){
        console.log(message)
    })
    .catch(function (message) {
        console.log( message);
    })
/* promise 2 */
let promise = new Promise(function (resolve, reject) {
    setTimeout(function () { resolve("hello"); }, 5000)
});

promise.then(function (values) {
    console.log(values)
})