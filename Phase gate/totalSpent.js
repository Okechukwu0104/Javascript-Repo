let spending ={
"groceries" : 150,
"dining" : 100,
"Transportation" : 50,
"entertainment" : 80,

}
let sum = 0;
for(values in spending){
sum+= spending[values]

}
console.log("Total spent = "+sum)