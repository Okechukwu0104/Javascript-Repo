const prompt = require('prompt-sync');
const entry = prompt();

let length = parseInt(entry("enter yout length of rectangle: "))
let width = parseInt(entry("enter yout width of rectangle: "))
	console.log("Area = "+area(length, width))

function area(length, width){
	let area = length*width	
	return area
}


