
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
    // Write a console app that prints the elements of an array in reverse. 

    let myArray = ["Beckham", "Giggs", "DeGea", "Mata", "Vidic", "Cantona"];

    for (let i=myArray.length-1; 0 <= i; i--)

    console.log(myArray[i]);

   
   
}

Program().then(() => {
    process.exit(0);
});