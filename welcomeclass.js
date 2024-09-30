

/*
let first = 100;
let last = 46;

let add = first * last;

console.log(add);
*/
/*
let var1 = 10;
let var2 = 20;
let var3 = 30;
let temp = var1; 


var1 = var2;
var2 = var3;
var3 = temp;

console.log(var1);
console.log(var2); 
console.log(var3);

*/


/*
let variable1 = 5;
let variable2 = 2;


let result = 2*(variable1 +variable2)

console.log ("Ansewr 1 = "+ result);






let answer2 = variable1 +(variable1 % 10);

console.log("Ansewr 2 = "+answer2);






let answer3 = variable1 **variable2;
console.log("Ansewr 3 = "+answer3);




let a = 10;

let x = a + 10;
let y = a -10;
let z = a % 10

let answer4 = (x + y + z)/a;
console.log("Answer 4 = "+answer4);


*/



let array = [3,4,5,2,3];
for(let count in array)console.log(array[count]);

for(let count = 0; count <= 10; count++){
     for(let counter = 0; counter <= 10; counter++){

	process.stdout.write("*");

    }
	
console.log("\t");
}




for(let count = 0; count <= 10; count++){
     for(let counter = 0; counter <= count; counter++){

	process.stdout.write("*");

    }
	
console.log("\t");
}


for(let count = 10; count >= 0; count--){
     for(let counter = 0; counter <= count; counter++){

	process.stdout.write(".");

    }
console.log("\t");	
}







for(let count = 0; count <= 10; count++){
let str = "*";
console.log(str.repeat(count));



}


for(let count = 10; count >= 0; count--){

let str = "*";
console.log(str.repeat(count))

	
}






for(let count = 10; count >= 0; count--){
     for(let counter = 0; counter <= count; counter++){

	process.stdout.write(".");


	for(let star = 10; star >=count; star--){
		process.stdout.write("#");
	}
    }
	console.log("\t");

}


for (let count = 10; count >= 0; count--) {
    for (let counter = 0; counter <= count; counter++) {
        process.stdout.write(".");
    }
    for (let star = 10; star >= count; star--) {
        process.stdout.write("#");
    }


    console.log("\t");
}





for (let count = 0; count <= 10; count++) {
    for (let counter = 0; counter <= count; counter++) {
        process.stdout.write(".");
    }
    for (let star = 10; star >= count; star--) {
        process.stdout.write("#");
    }
    console.log("\t");
}

