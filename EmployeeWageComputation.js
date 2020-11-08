console.log("Welcome to Employee Wage Computation Program\n"); 

const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOUR = 4;
const FULL_TIME_HOUR = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;
const MAX_HOURS_IN_A_MONTH = 160;

function getEmployeeHours(empCheck) {
    switch (empCheck) {
        case IS_PART_TIME:
            return PART_TIME_HOUR; 
        case IS_FULL_TIME:
            return FULL_TIME_HOUR;
        default:
            return 0;
    }
}

function calulateWage(employeeHours) {
    return employeeHours * WAGE_PER_HOUR;
}

let totalEmpHours = 0;
let totalWorkingDays = 0;
let employeeDailyWageArray = new Array();
while (totalEmpHours <= MAX_HOURS_IN_A_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHours = getEmployeeHours(empCheck);
    employeeDailyWageArray.push(calulateWage(empHours));
    totalEmpHours += empHours;
    if(totalEmpHours > 160 ) totalEmpHours = 160;
}

let empWage = calulateWage(totalEmpHours);
console.log("Total Working Days: "+ totalWorkingDays +" Hours: " + totalEmpHours +
             " Employee Wage: "+ empWage);