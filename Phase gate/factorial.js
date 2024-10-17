const ps = require("prompt-sync")
const prompt = ps()

const value = parseInt(prompt("input a number to factor: "));
	
		let factorial = 1;
		for(let count = 1; count <=value; count++){
			factorial *= count
		}

	if(factorial <= 1000){
		console.log(factorial)
	}else{
		console.log("The factorial exceeds 1000");
	}