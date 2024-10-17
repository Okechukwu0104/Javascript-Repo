const ps = require("prompt-sync")
const prompt = ps()

const value = parseInt(prompt("input a number to factor: "));
	if(value <= 1000){
	
		let factorial = 1;
		for(let count = 1; count <=value; count++){
			factorial *= count
		
		}
		console.log(factorial)

	}else{
		console.log("Input a value <= 1000");
	}