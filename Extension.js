
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function askQuestion(question){
    let answer;

    return new Promise((resolve, reject) => {
        rl.question(question, (ans) => {
            resolve(ans);
        })
    });
}


async function Program(){
    // Write a console app that takes strings from the user and adds them to an array 
    
    let myArray = [23,7,9,14,23,75,35,23,19,7,23,23,27];
    let numberof23s = 0;
    for (let i= 0; i < myArray.length; i++) {
      if(myArray[i] == 23){
          numberof23s++;
      }
        
    }
    
  console.log(`There are  ${numberof23s} 23s in the array`);


    
}

Program().then(() => {
    process.exit(0);
});