# Students' Grades Calculator

## Introduction
This script is designed to assign letter grades to a list of students based on their scores. It uses a simple grading scale where each score range corresponds to a specific letter grade.

## Description
The script defines an array of student objects, where each object contains a `name` and a `score`. It then iterates over this array, assigning grades according to the following scale:
- **A**: 79 to 100
- **B**: 60 to 78
- **C**: 50 to 59
- **D**: 40 to 49
- **E**: Below 40

After assigning the grades, it prints out each student's name along with their assigned grade.

## How to Run
To run this script, you will need a JavaScript runtime environment like Node.js. Copy the code into a file named `gradeStudents.js`, and then execute it in the terminal.
node gradeStudents.js




# Speed Detector Function

## Description
The `speedDetector` function is designed to assess the speed of a vehicle and determine if it is within the legal speed limit. If the speed is over the limit, it calculates the number of demerit points to be assigned to the driver. Exceeding a certain number of points results in a suspended license.

## Functionality
- The function accepts one argument: `speedInput`, which represents the speed of the vehicle.
- If the input is negative, null, undefined, or an empty string, it returns "Invalid Speed."
- If the speed is within the legal limit (0 to 70 km/s), it returns "OK".
- If the speed exceeds the limit, it calculates demerit points. Every 5 km/s over the limit equals one demerit point.
- If the driver accumulates more than 12 points, their license is considered suspended.


## How to Run
To run this script, you will need a JavaScript runtime environment like Node.js. Copy the code into a file named `speedDetector.js`, and then execute it in the terminal.
node speedDetector.js


# net Salary Calculator

## Description
The `net salary calc...` it calculates net salary after tax, nhif and nssf deductions.

## functionality
It computes net salary after tax, nhif and nssf deductions
 Basic salary * benefits  = 12,800 then add 80000(which is the basic salary) to get 92800

## installation
node netSalary.js