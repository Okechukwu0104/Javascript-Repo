

for(let count = 1; count <=4; count++){
	let output = "N"+count;
	process.stdout.write(output + "    ");
}
console.log(" ");
for(let count1 = 1; count1 <=5; count1++){
	let multiply = 1;

    for(let count2 = 1; count2 <= 4; count2++){
	multiply *=count1;
	
 	process.stdout.write(multiply + "     ");
    }
console.log(" ");
}