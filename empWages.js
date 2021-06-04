
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
let empHrs = 0;
for (let day =0; day < NUM_OF_WORKING_DAYS; day++){ //UC 4: Added 'for loop' for getting 20 days wages.
    let empCheck = Math.floor(Math.random() * 10) % 3;
    empHrs += getWorkingHours(empCheck);
}
let empWage = empHrs * WAGE_PER_HOURS;
console.log("Total Hours: "+ empHrs+" Emp Wage: " +empWage);
