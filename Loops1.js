
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
    // Write a console app that writes the numbers from 1 to 7 to the console 

    for (let i=1; i < 8; i++)

console.log(i);
    

}

Program().then(() => {
    process.exit(0);
});