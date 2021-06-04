/**
 * UC 1 Checking Employee Present or Absent
*/
{
    const IS_ABSENT = 0
    let empCheck = Math.floor(Math.random() * 10) % 2;
    if (empCheck == IS_ABSENT){
        console.log("UC1- Employee is Present.");
    } else {
        console.log("UC1- Employee is Absent.");
    }
}

/**  
 * UC 2 Checking Employee Daily Wage
*/
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const FULL_TIME_HOURS = 4;
const PART_TIME_HOURS = 8;
const WAGE_PER_HOURS = 20;

let empHrs = 0;
empCheck = Math.floor(Math.random() * 10) % 3;
switch (empCheck) {
    case IS_PART_TIME:
        empHrs = PART_TIME_HOURS;
        break;
    case IS_FULL_TIME:
        empHrs = FULL_TIME_HOURS;
        break;
    default:
        empHrs = 0;    
}

let empWage = empHrs * WAGE_PER_HOURS;
console.log("UC2- Emp Wage: " +empWage);
