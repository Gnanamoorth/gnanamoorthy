function cal_head() {
    const operator= prompt("enter the math operators which you want (+,-,*,/):");
    const number1=parseFloat(prompt("enter the first value:"))
    const number2=parseFloat(prompt("enter the second value:"));
    let result;

    if (operator=="+") {
        result =number1+number2;
    }
    else if (operator=="-") {
        result =number1-number2;
    }
    else if (operator=="*") {
        result =number1-number2;
    }
    else{
        result = number1/number2;
    }
    document.getElementById("calculator").innerHTML="The Result is"+" "+result;
}