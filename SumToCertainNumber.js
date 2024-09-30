const readline = require ("readline");

const entry = readline.createInterface({

input: process.stdin,
output: process.stdout

});


let sum = 0
let number = 1000;

function numberCheck(){
entry.question("input main number..",(num)=>{

let value = parseInt(num);

sum+=value
console.log(sum);

if(sum < number){
    numberCheck();
}
else{
  console.log("target reached: "+ num +"-> "+ sum)
  entry.close();

}


});

}


numberCheck();