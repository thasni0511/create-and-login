var _a, _b, _c;
function isAdmin(user) {
    return "accessLevel" in user && user.role === "admin";
}
const users = [
    { id: 1, username: "admin", password: "1234", role: "admin", accessLevel: 5, salary: 60000 },
    { id: "emp123", username: "sarah123", password: "123", role: "employee", department: "Digital Marketing" }
];
(_a = document.getElementById("loginForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (e) {
    var _a;
    e.preventDefault();
    const usernameInput = document.getElementById("username").value;
    const passwordInput = document.getElementById("password").value;
    const foundUser = users.find((user) => user.username === usernameInput && user.password === passwordInput);
    if (foundUser) {
        // Hide login form
        document.getElementById("loginForm").style.display = "none";
        if (isAdmin(foundUser)) {
            const adminPage = document.getElementById("adminPage");
            adminPage.style.display = "block";
            document.getElementById("adminInfo").innerText =
                `Welcome Admin: ${foundUser.username}\nAccess Level: ${foundUser.accessLevel}`;
            (_a = document.getElementById("viewSalary")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
                const salaryInfo = document.getElementById("salaryInfo");
                if ("salary" in foundUser) {
                    salaryInfo.innerText = `Your Salary: $${foundUser.salary}`;
                    salaryInfo.style.display = "block"; // Show salary info
                }
            });
        }
        else {
            const employeePage = document.getElementById("employeePage");
            employeePage.style.display = "block";
            document.getElementById("employeeInfo").innerText =
                `Welcome Employee: ${foundUser.username}\nDepartment: ${foundUser.department}`;
        }
    }
    else {
        alert("Invalid credentials");
    }
});
(_b = document.getElementById("logoutBtn1")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () {
    resetView();
});
(_c = document.getElementById("logoutBtn2")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", function () {
    resetView();
});
function resetView() {
    // Show the login form and hide other pages
    document.getElementById("loginForm").style.display = "block";
    document.getElementById("adminPage").style.display = "none";
    document.getElementById("employeePage").style.display = "none";
    document.getElementById("salaryInfo").style.display = "none"; // Hide salary info
    // Clear input fields
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
}
