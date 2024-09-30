const readline = require ("readline");
const entry = readline.createInterface({

input :process.stdin,
output: process.stdout

});
  

let largest = 0;
function largestNumber(){
entry.question("Input a number",(input)=>{
let number = parseInt(input);


if(number != -1){
   if(largest < number){largest = number;}
   largestNumber();
}else{
    console.log("Largest = " + largest);
    entry.close();

}

});

}

largestNumber();