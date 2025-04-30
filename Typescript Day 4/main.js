var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Class implementing the interface
var Person = /** @class */ (function () {
    function Person(name, age, PersonId, salary) {
        this.name = name;
        this.age = age;
        this.PersonId = PersonId;
        this.salary = salary;
    }
    Person.prototype.getSalary = function () {
        return this.salary;
    };
    return Person;
}());
// Subclass Employee extends Person and adds incentives
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, age, PersonId, salary, incentives) {
        var _this = _super.call(this, name, age, PersonId, salary) || this; // Call parent constructor
        _this.incentives = incentives;
        return _this;
    }
    Employee.prototype.getTotalSalary = function () {
        return this.getSalary() + this.incentives;
    };
    Employee.prototype.showDetails = function () {
        return "\n      Name: ".concat(this.name, "<br>\n      Age: ").concat(this.age, "<br>\n      Person ID: ").concat(this.PersonId, "<br>\n      Salary: \u20B9").concat(this.getSalary(), "<br>\n      Incentives: \u20B9").concat(this.incentives, "<br>\n      <strong>Total Salary: \u20B9").concat(this.getTotalSalary(), "</strong>\n    ");
    };
    return Employee;
}(Person));
// Database of users
var PersonDB = {
    "thanu123": {
        password: "1234",
        Person: new Employee("Thanu Thasim", 30, 101, 15000, 800)
    },
    "sarah123": {
        password: "12345",
        Person: new Employee("Sarah Cherian", 28, 102, 25000, 1000)
    }
};
// Login function
function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var record = PersonDB[username];
    if (record && record.password === password) {
        var emp = record.Person;
        document.getElementById("loginForm").style.display = "none";
        var outputDiv = document.getElementById("employeeDetails");
        outputDiv.style.display = "block";
        document.getElementById("detailsText").innerHTML = emp.showDetails();
    }
    else {
        alert("Invalid username or password.");
    }
}
// Attach login function to button after DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
    var _a;
    (_a = document.getElementById("loginButton")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", login);
});
