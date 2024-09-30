const readline = require ("readline");
const entry = readline.createInterface({

input: process.stdin,
output: process.stdout

});
let count = 1;


function taxCalculator(){
entry.question(`input Citizen${count} earnings: `,(input)=>{
let earnings = parseInt(input);
let tax;


if(earnings <= 30_000){

tax = parseFloat(earnings * 0.15);

}else{tax = parseFloat(earnings * 0.20);
}
console.log(` tax for citizen ${count} = `+tax);

count++;


if(count <=3){taxCalculator();}
else{entry.close();}
});

}

taxCalculator();