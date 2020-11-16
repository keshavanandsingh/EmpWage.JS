class EmployeePayrollData {
    // constructor
    constructor(...parameters) {
        this.id = parameters[0];
        this.name = parameters[1];
        this.salary = parameters[2];
        this.gender = parameters[3];
        this.startDate = parameters[4];
    }

    // getter and setter methods
    get name() {
        return this._name;
    }
    set name(name) {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if (nameRegex.test(name)) {
            this._name = name;    
        }
        else throw "Incorrect Name!";
    }

    get id() {
        return this._id;
    }
    set id(id) {
        let idRegex = RegExp('^[1-9]{1}[0,9]{0,}$');
        if (idRegex.test(id)) {
            this._id = id;
        } 
        else throw "Incorrect Id!";
    }

    get salary() {
        return this._salary;
    }
    set salary(salary) {
        let salaryRegex = RegExp('^[1-9]{1}[0-9]{0,}$');
        if (salaryRegex.test(salary)) {
            this._salary = salary;
        } 
        else throw "Incorrect Salary!";
    }

    get gender() {
        return this._gender;
    }
    set gender(gender) {
        if (gender == undefined) {
            this._gender = "M";
        } else {
            let genderRegex = RegExp('^[MF]{1}$');
            if (genderRegex.test(gender)) {
                this._gender = gender;
            } else {
               throw "Incorrect Gender!";
            }   
        }
    }

    get startDate() {
        return this._startDate;
    }
    set startDate(date) {
        if (date != undefined) {
            if (date <= new Date()) {
                const options = { year: "numeric", month: "long", day: "numeric"};
                const employeeDate = date === undefined ? "undefined" :
                                date.toLocaleDateString("en-US", options);
                this._startDate = employeeDate;
            }
            else throw "Invalid Date";
        }
    }

    // method
    toString() {
        
        return "id=" + this.id + ", name=" + this.name + ", salary=" + this.salary +
                ", gender=" + this.gender + ", startDate=" + this.startDate;
    }
}

let employeePayrollData = new EmployeePayrollData(1, "Mark", 30000);
console.log(employeePayrollData.toString());
try {
    employeePayrollData.name = "marko";
    console.log(employeePayrollData.toString());
} catch (error) {
    console.error(error);
}

let newEmployeePayrollData = new EmployeePayrollData(1, "Rachel", 40000, "F", new Date());
console.log(newEmployeePayrollData.toString());
try {
    newEmployeePayrollData.id = 2;
    console.log(newEmployeePayrollData.toString());
} catch (error) {
    console.error(error);
}

try {
    newEmployeePayrollData.salary = 45000;
    console.log(newEmployeePayrollData.toString());
} catch (error) {
    console.error(error);
}

try {
    newEmployeePayrollData.gender = "F";
    console.log(newEmployeePayrollData.toString());
} catch (error) {
    console.error(error);
}

try {
    newEmployeePayrollData.startDate = new Date("2020-11-8");
    console.log(newEmployeePayrollData.toString());
} catch (error) {
    console.error(error);
}