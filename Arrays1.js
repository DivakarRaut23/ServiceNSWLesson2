
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
    
    
    let myBox = [];
    for (i=0; i < 5; i++){

    let userInput1 = await askQuestion("Enter the Elements ");
    
    myBox.push(userInput1);

      }

      console.log(myBox);


    
}

Program().then(() => {
    process.exit(0);
});