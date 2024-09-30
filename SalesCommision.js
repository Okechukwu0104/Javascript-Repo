const readline = require ("readline");

const entry = readline.createInterface({

input: process.stdin,
output: process.stdout

});

 let payment = 200;
function salesCommision(){
  entry.question("input the value of items sold ",(input)=>{
  let value = parseFloat(input);
 
if(!isNaN(value)){
  let percentage = parseFloat(value * 0.09);

  let total = parseFloat(percentage + payment)

if(value != -1){console.log("Total Commission = $"+total);
	salesCommision();
	console.log("press -1 to exit");
}else{ entry.close();}
}else{
console.log("wrong input");
salesCommision();
}

  })

}



salesCommision();