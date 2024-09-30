const readline = require ("readline");
const entry = readline.createInterface({

input : process.stdin, output: process.stdout

});

entry.question("input your palidromic number",(input)=>{
let number = parseInt(input);

let Number = number;
let newNumber = 0;

while(number != 0){
let extract = parseInt(number%10);
 
let remain = parseInt(number/10);
number = remain;
newNumber = (newNumber * 10) + extract;

}
console.log (newNumber);

if(Number == newNumber){console.log("this is a palindrome");}
else{console.log("this is not  a palindrome");}

entry.close();
});