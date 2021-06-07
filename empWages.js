
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
let empDailyWageMap = new Map();  //UC-8

while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS){   /*UC 5: Added 'while loop' for getting 20 days and 160 hrs of wages.*/
    totalWorkingDays++
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    console.log(empDailyWageArr.push(calcDailyWage(empHrs)));        //UC-6
    empDailyWageMap.set(totalWorkingDays, calcDailyWage(empHrs));
}

let empWage = calcDailyWage(totalEmpHrs);           // UC-6
console.log("UC6- Total Days: " + totalWorkingDays +" |Total Hours: "+ totalEmpHrs+" |Emp Wage: " +empWage);

// Array Helper Functions
// UC 7A - Calc total Wage Using Array forEach traversal or reduce method
let totEmpWage = 0;
function sum(dailyWage){
    totEmpWage += dailyWage;
}
empDailyWageArr.forEach(sum);
console.log("UC7A - Total Days: " + totalWorkingDays + " Total Hrs: " + totalEmpHrs + " Emp Wage: " + totEmpWage);

function totalWages(totalWage, dailyWage) {
    return totalWage + dailyWage;
}

console.log("UC7A - Emp Wage with reduce: " + empDailyWageArr.reduce(totalWages, 0));

//UC 7B - show the Day along with Daily Wage using Array map helper function
let dailyCntr = 0;
function mapDayWithWage(dailyWage){
    dailyCntr++;
    return dailyCntr + " = " + dailyWage;
}
let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
console.log("UC7B - Daily Wage Map");
console.log(mapDayWithWageArr);

// uc 7c - Show Days When FULL time wage of 160 were earned
function fulltimeWage(dailyWage) {
    return dailyWage.includes("160");
}
let fullDayWageArr = mapDayWithWageArr.filter(fulltimeWage);
console.log("UC7C - Daily Wage Filter When Fulltime Wage Earned");
console.log(fullDayWageArr);

//UC 7D - Find the first occurance when full Time Wage was earned using find function
function findFulltimeWage(dailyWage) {
    return dailyWage.includes("160");
}
console.log("UC 7D - First time FUlltime wage was earned on Day: " + mapDayWithWageArr.find(fulltimeWage));

// UC 7E - Check if Every Elemet of Full Time Wage is truely holding full time wage
function isAllFUlltimeWage(dailyWage) {
    return dailyWage.includes("160");
}
console.log("UC 7E - check All Element have full Time Wage: " + fullDayWageArr.every(isAllFUlltimeWage));

//UC 7F - Check if there iis any Part Time Wage
function isAnyPartTimeWage(dailyWage){
    return dailyWage.includes("80");
}
console.log("UC 7F - check if Any Part Time Wage: " + fullDayWageArr.some(isAnyPartTimeWage));

//UC 7G - Find the number of Days the Employee Worked
function totalDaysWorked(numOfDays, dailyWage) {
    if (dailyWage > 0) return numOfDays+1;
    return numOfDays;
}
console.log("UC 7G - Number of days Emp Worked: "+ empDailyWageArr.reduce(totalDaysWorked, 0));

//UC 8 - Storing Day and Daily Wages Using Map function

console.log("UC8 - EEmp Wage Map totalHrs: " + Array.from(empDailyWageMap.values()).reduce(totalWages, 0));