
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
    // Write a console app that prints the elements of an array that begin with the letter a (hint, a string is an array of characters so you can access the first character the same way you would access the first element in an array) 

    let myArray = ["Beckham", "Andreas", "DeGea", "Mata", "Aadi", "Cantona"];

    for (let i=0; i < myArray.length; i++){
        const currentItem = myArray[i];
        if(currentItem[0] == "A"){
            console.log(currentItem);
        }
    

    }

   
   
}

Program().then(() => {
    process.exit(0);
});