const students = require('./current-students.js');

function fyShuffle (array) {
  const newArray = [...array]
  for (let i = newArray.length; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let k = newArray[i];
    newArray[i] = newArray[j];
    newArray[j] = k;
  }
  return newArray;
}

let shuffledStudents = fyShuffle(students);
shuffledStudents = shuffledStudents.filter(student => student);

module.exports = shuffledStudents;
