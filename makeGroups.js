const shuffledStudents = require('./shuffle');
const formatter = require('./formatter');
// Take in a number for group size 
// Break the array into groups of that size
// Give formatting options?
//

let userArguments = process.argv.slice(2);
if (!userArguments.length) {
  console.log('Please provide a size for the groups');
  process.exit(9);
} 

const groupSize = userArguments[0];
const optionalFormat = userArguments[1];

// iterate over students (while students has a length?)
// splice group size out of students 
// Add each group of students to a new array

function makeGroups(students, groupSize) {
  const groupedStudents = [];
  while(students.length) {
    groupedStudents.push(students.splice(0, groupSize))
  }
  return groupedStudents;
}

const groupedStudents = makeGroups(shuffledStudents, groupSize);

if (optionalFormat) {
  formatter[optionalFormat](groupedStudents);
  process.exit();
};

console.log(groupedStudents);
