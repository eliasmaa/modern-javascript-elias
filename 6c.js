//oppg.1
function convertToCelsius(a) {
    return (a-32)*5/9;
}

let fah=convertToCelsius(60)
console.log(fah);

//oppg.2

function calculateAge(a, b) {
return b-a
}

let alder=calculateAge(2009,2025)
console.log(alder)

//oppg.3 
function calculate(a, b, operator) {
    if (operator === "+") return a + b;
    if (operator === "-") return a - b;
    if (operator === "*") return a * b;
    if (operator === "/") return a / b;
}
console.log(calculate(5, 3, "+"));
console.log(calculate(5, 3, "-")); 


//oppg.4
function isEven(a) {
    if(a % 2 === 0) {
        return true
    }
    else {
        return false
    }
}

console.log(isEven(6));
console.log(isEven(5));


//oppg.5
function FindMax(a, b) {
    if(a > b) {
        return a + " er større"
    }
    else {
        return b + " er større"
    }
}

console.log(FindMax(2,7))

console.log(FindMax(8,3))

//oppg.6


function calculateTax(a) {
    if(a < 50000) {
        return a * 0.1;
    }
    else if(a > 50000 && a< 100000) {
        return a * 0.2;
    }
    else if(a> 100000){
        return a * 0.3;
    }
}

console.log(calculateTax(50001))

//oppg.7

function isValidEmail(a) {
    if(typeof a === "string" && a.includes("@") && a.includes(".")) {
        return true;

    }
    else{
        return false;
    }
}

console.log(isValidEmail("test@example.com")); // true

console.log(isValidEmail("testexample.com")); // false

//oppg.8

function findLongestString(a, b) {

    if(a.length > b.length) {
        console.log(a, " er lengre enn ", b)
    }
    else if(a.length < b.length) {
        console.log(b, " er lengre enn ", a)
    }
    else if(a.length === b.length) {
        console.log(a, " og ", b, " er lik i lengde")
    }
}

findLongestString("hallo, hallo", "yo, yo")
findLongestString("hei", "hallo")
findLongestString("hallo", "enter")

//oppg.9

function calculateDiscount(a, b) {

    return a - (a * b / 100)

}

console.log(calculateDiscount(100, 10)); // 90

console.log(calculateDiscount(200, 25)); // 150


//oppg.10

function isStrongPassword(passord){

    if(passord.length >= "12345678".length && passord.includes ("1"||"2"||"3"||"4"||"5"||"6"||"7"||"8"||"9"||"0")) {
        return true
    }
    else {
        return false
    }
}
console.log(isStrongPassword("abc123")); // false

console.log(isStrongPassword("password1")); // true