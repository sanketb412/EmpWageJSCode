
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
function calcDailyWage(empHrs){
    return empHrs * WAGE_PER_HOURS;
}
const NUM_OF_WORKING_DAYS = 20; 
const MAX_HRS_IN_MONTH = 160;
let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyWageArr = new Array();  //UC-6

while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS){   /*UC 5: Added 'while loop' for getting 20 days and 160 hrs of wages.*/
    totalWorkingDays++
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    console.log(empDailyWageArr.push(calcDailyWage(totalEmpHrs)));        //UC-6
    
}

let empWage = calcDailyWage(totalEmpHrs);           // UC-6
console.log("UC6- Total Days: " + totalWorkingDays +" |Total Hours: "+ totalEmpHrs+" |Emp Wage: " +empWage);


