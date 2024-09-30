const readline = require('readline');

const result = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

result.question('Please enter your input: ', (input) => {
  let userInput = parseInt(input); 

  for (let count = 0; count <= userInput; count++) {
    for (let counter = 0; counter <= count; counter++) {
      process.stdout.write("*");
    }
    console.log(""); 
  }
result.close();

});
