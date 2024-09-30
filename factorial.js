const readline = require ("readline");

const entry = readline.createInterface({
input: process.stdin,
output: process.stdout

});

entry.question("input your number",(input)=>{
entry.question("input the terms",(input2)=>{

let number = parseInt(input);
let terms = parseInt(input2);
let multiply = 1 ;
let expo ;
let final1 = 0;
let final2 = 0;
let result = 0;
let result2 = 0;

for(let count = number; count >= 1; count--){
	while(number != 0){

	expo = terms ** number;
	multiply*=number
	 result  = 1/multiply;
	result2  = expo/multiply;
	number--;
	


	final1 += result;
	final2 += result2;
	}

	
}
console.log("factorial = "+multiply);

console.log("1/factorial = "+ final1);

console.log("x/factorial = "+ final2);


entry.close();

})
})
