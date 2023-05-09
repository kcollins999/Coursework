// Question one: truthy or falsy
// If the value is falsy print the corrensponding result
// Use if/else statements

// if value is truthy print true
let value = ""

if (value) {
    console.log("true")
} else if (value === false) {
    console.log("The boolean value false is falsy")
} else if (value === null) {
    console.log("The null value is falsy")
} else if (value === undefined) {
    console.log("undefined is falsy")
} else if (value === 0){
    console.log("The number 0 is falsy")
} else if (value === "") {
    console.log("The empty string is false")
}
//Question two: sum of two numbers
let num1 = 50
let num2 = 51
const sum = num1 + num2
if (sum > 100) {
    console.log('${sum} is greater than 100')
} else if (sum > 0) {
    console.log('$(sum) is greater than 0')
} else if (sum === 0){
    console.log('${sum} is equal to 0')
} else if (sum < 0) {
    console.log('${sum} is a negative number')
} 
//Question three: greater than 5 
let num3 = 5;
let num4 = 6;
//if both values are greater than or equal to 5
if (num3 > 5 && num4 > 5) {
    console.log(true)
} else {
    //else false
    console.log(false)
}
//Question four: pair and compare
let param1A = 0;
let param1B = false;
let param2A = "horse"
let param2B = "horse"

if (param1A === param1B || param2A === param2B){
    console.log(true)
} else {
    console.log(false)
}
