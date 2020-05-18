const shuffledStudents = require('./shuffle.js');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function printAndAwait (answer) {
  await popAndPrint();
}

function popAndPrint () {
  // print student
  let randomStudent = shuffledStudents.pop();
  console.log(randomStudent);
  if (!shuffledStudents.length) {
    rl.close();
    return Promise.resolve('No more students');
  } else {
    rl.question('Hit enter for a new student', printAndAwait)
  }
}




rl.question('Hit enter for a new student', printAndAwait);

