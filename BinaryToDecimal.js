const readline = require ("readline");

const entry = readline.createInterface({

input: process.stdin, 
output : process.stdout

});


entry.question("input your binary number ",(input)=>{
let number = parseInt(input, 10);

let count = 1;
let decimal = 0;
while (number != 0){
	let extract = parseInt(number % 10);
	let digit =  extract * count;
	number = parseInt(number/10);
	count*=2;

	decimal+=digit;
}
   console.log(decimal);

entry.close();
});
