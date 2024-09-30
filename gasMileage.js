const readline = require ("readline");
let entry = readline.createInterface({

input :process.stdin,
output: process.stdout

});

let total = 0;
function milesPerGallon(){

entry.question("enter your miles per gallon (-1 to exit) ",(input)=>{
let mpg = parseInt(input);

    total+=mpg ;

if(mpg != -1){
milesPerGallon();
}else{
console.log("result = " + total);
entry.close();
}

});


}

milesPerGallon();
