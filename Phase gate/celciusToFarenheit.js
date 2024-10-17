const prompt = require("prompt-sync");
const entry = prompt();
let celcius = parseInt(entry("input your degree in celcius: "))
console.log(convertToFarenheit(celcius))

function convertToFarenheit(celcius){
	let e = 9/5
	let farenheit = celcius * e +32
	return "To farenheit = "+farenheit

}