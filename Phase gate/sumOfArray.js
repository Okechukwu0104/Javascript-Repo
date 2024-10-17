const ps = require("prompt-sync");
const prompt = ps();

let array = []
let entry = parseInt(prompt("input the length of the array: "))

   for(let count = 0; count < entry; count++){
	let value = parseInt(prompt("input a number"+count+" "))
	array.push(value)
   }[8,6,5,4,3,2]

console.log(array)
console.log("Total sum = "+sumInArray(array))

function sumInArray(array){
	let sum = 0
	for(let count = 0; count < array.length; count++){
		sum+=array[count]
	}
	return sum


}
