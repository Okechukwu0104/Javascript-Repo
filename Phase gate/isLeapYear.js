const prompt = require("prompt-sync")
const entry = prompt()

let year = parseInt(entry("Input a year: "))
console.log(isLeapYear(year))


function isLeapYear(year){
return year%4 ==0 && year%100 !=0


}