
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
    // Write a console app that writes even numbers from 2 to 8 (inclusive) to the console (hint, you will need to not use the increment operator) 

    let i = 2;

    while (i <=8){
        console.log(i);
        i = i + 2;
    }

}

Program().then(() => {
    process.exit(0);
});