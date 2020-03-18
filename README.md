# Classroom Utilities

This repo will hold a series of utility methods meant to make classroom processes easier (especially while remote). 

## Installation

Clone down and `cd` into this repository (ensure you have `node` installed).

## Set Students
In `current-students.js`, set `students` to an array of strings with students' names.  

## Get a Random Student
1. Navigate to the root of this directory.
2. Run the following:
```
node getRandomStudent.js
``` 

## Get a Group of Students
1. Navigate to the root of this directory. 
2. Run the following:
```
node makeGroups,js [groupSize] [(format)]
```
where:
- `groupSize` is an integer 
- `format` is an optional argument representing the format of the script's output


```bash
$ node makeGroups.js 2  
# will output:

[
  ['Student A', 'Student B'],
  ['Student C', 'Student D']
]
```

Supported formats are:
- 'bullet'
```bash
$ node makeGroups.js 2 bullet 
# will output:

* Student A, Student B
* Student C, Student D

```
