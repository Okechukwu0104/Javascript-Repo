const readline = require ("readline");
const entry = readline.createInterface({

input :process.stdin,
output: process.stdout

});
  

let largest = 0;
let second = 0;
function largestNumber(){
entry.question("Input a number",(input)=>{
let number = parseInt(input);


if(number != -1){
   if(largest < number){
	second = largest;
	largest = number;
	
}
   if(second > largest ){second = largest;}
   largestNumber();
}else{
    console.log("Largest = " + largest);
     console.log("Second Largest = " + second);
    entry.close();

}

});

}

largestNumber();