const ps = require("prompt-sync");
const prompt = ps();

let array = "aeiouAEIOU"
const input = prompt("input a word: ");
let counter = 0;
for(let count = 0; count< input.length; count++ ){
	let value = input[count]
		if(array.includes(value)) counter+=1
	
}
	console.log("the Vowel count = "+ counter);
