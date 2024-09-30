/*
let  ans = {

id : "74gg48392",
count : 100,
name: "Robert Kiwasaki",
author: "Okechukwu Peter",

};


//fetching each attribute in the object

if(ans.count > 0){ans.available = "Yes,"+" "+ "there are " +ans.count;}
else {ans.available = "No"};
console.log(ans);

console.log(" ");
console.log(" ");



//printing with for loop

for(let key in ans){
	console.log(ans[key]);
};



console.log(" ");
console.log(" ");



//for each...in     for arrays

let arr = [1,2,3,"boy"];

for (let index in arr){
	console.log(index);
	console.log(arr[index]);

}


console.log(" ");
console.log(" ");




//for each...of   its just like enhanced forloop
// it ends 
let letter = "chuks";
for(let char of letter){

console.log(char);

}
console.log(" ");
console.log(" ");


let array = ["yes","and","amen"]
for(let element of array){
console.log(element);
}

*/















let start = 1;
let end = 21;
let count = 0
while(start < end){

let result = start *2;
start++;
count++;
console.log(count +" --- "+ result);
if(result >=20){break;}
}


console.log(" ")
console.log(" ")





let balance = 500;
let counts = 0;
let withdrawal = 50;

do{
   counts++;
   let result = balance - withdrawal;
	console.log("day "+counts+" -- "+ result);
	balance = result;

}while(balance > counts);


console.log(" ")
console.log(" ")






let countdown = 11
let endcount = 1;

while(countdown > endcount){
countdown -= endcount;
console.log(countdown);

}
if(countdown == 1){console.log("Liftoff!")}

























