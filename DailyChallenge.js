
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
    // Write a console app that takes strings from the user and adds them to an array until the user enters a duplicate entry. 
    //Then stop accepting user input and print each element in the array to the console.

   let myJar = [];
   let myloop = true;
   while(myloop) {
   let userInput = await askQuestion("Please Enter the items you want to Add :  ");
   for (let i=0; i < myJar.length; i++){
       if(myJar[i] == userInput){
           myloop = false;
           break;

   }
}

   if (myloop){
    myJar.push(userInput);
    
   } else {
       break;
   }

   }


   console.log(myJar);
    


}

Program().then(() => {
    process.exit(0);
});