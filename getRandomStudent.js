const students = require('./current-students.js');

console.log(students);

function fyShuffle (array) {
  for (let i = array.length; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let k = array[i];
    array[i] = array[j];
    array[j] = k;
  }
}

fyShuffle(students);


let randomStudent = students.pop();
console.log(randomStudent);
