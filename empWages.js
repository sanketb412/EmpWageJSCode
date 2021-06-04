
/**  
 *UC 3: Refactor UC 2 for Checking Employee Daily Wage using Function method
*/
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const FULL_TIME_HOURS = 4;
const PART_TIME_HOURS = 8;
const WAGE_PER_HOURS = 20;

function getWorkingHours(empCheck) {
    switch (empCheck) {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}
const NUM_OF_WORKING_DAYS = 20; 
const MAX_HRS_IN_MONTH = 160;
let totalEmpHrs = 0;
let totalWorkingDays = 0;
while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS){   /*UC 5: Added 'while loop' for getting 20 days and 160 hrs of wages.*/
    totalWorkingDays++
    let empCheck = Math.floor(Math.random() * 10) % 3;
    totalEmpHrs += getWorkingHours(empCheck);
}
let empWage = totalEmpHrs * WAGE_PER_HOURS;
console.log("UC5- Total Days: " + totalWorkingDays +" |Total Hours: "+ totalEmpHrs+" |Emp Wage: " +empWage);
