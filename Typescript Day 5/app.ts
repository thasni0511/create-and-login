type ID = number | string;

type BasicInfo = {
  id: ID;
  username: string;
  password: string;
};

type AdminDetails = {
  role: "admin";
  accessLevel: number;
  salary: number;
};

type EmployeeDetails = {
  role: "employee";
  department: string;
};

type LoggedInAdmin = BasicInfo & AdminDetails;
type LoggedInEmployee = BasicInfo & EmployeeDetails;
type LoggedInUser = LoggedInAdmin | LoggedInEmployee;

function isAdmin(user: LoggedInUser): user is LoggedInAdmin {
  return "accessLevel" in user && user.role === "admin";
}

const users: LoggedInUser[] = [
  { id: 1, username: "admin", password: "1234", role: "admin", accessLevel: 5, salary: 60000 },
  { id: "emp123", username: "sarah123", password: "123", role: "employee", department: "Digital Marketing" }
];

document.getElementById("loginForm")?.addEventListener("submit", function (e) {
  e.preventDefault();

  const usernameInput = (document.getElementById("username") as HTMLInputElement).value;
  const passwordInput = (document.getElementById("password") as HTMLInputElement).value;

  const foundUser = users.find(
    (user) => user.username === usernameInput && user.password === passwordInput
  );

  if (foundUser) {
    // Hide login form
    (document.getElementById("loginForm") as HTMLElement).style.display = "none";

    if (isAdmin(foundUser)) {
      const adminPage = document.getElementById("adminPage")!;
      adminPage.style.display = "block";
      (document.getElementById("adminInfo") as HTMLElement).innerText =
        `Welcome Admin: ${foundUser.username}\nAccess Level: ${foundUser.accessLevel}`;
      
      document.getElementById("viewSalary")?.addEventListener("click", () => {
        const salaryInfo = document.getElementById("salaryInfo")!;
        if ("salary" in foundUser) {
          salaryInfo.innerText = `Your Salary: $${foundUser.salary}`;
          salaryInfo.style.display = "block"; // Show salary info
        }
      });
    } else {
      const employeePage = document.getElementById("employeePage")!;
      employeePage.style.display = "block";
      (document.getElementById("employeeInfo") as HTMLElement).innerText =
        `Welcome Employee: ${foundUser.username}\nDepartment: ${foundUser.department}`;
    }
  } else {
    alert("Invalid credentials");
  }
});

document.getElementById("logoutBtn1")?.addEventListener("click", function () {
  resetView();
});

document.getElementById("logoutBtn2")?.addEventListener("click", function () {
  resetView();
});

function resetView() {
  // Show the login form and hide other pages
  (document.getElementById("loginForm") as HTMLElement).style.display = "block";
  (document.getElementById("adminPage") as HTMLElement).style.display = "none";
  (document.getElementById("employeePage") as HTMLElement).style.display = "none";
  (document.getElementById("salaryInfo") as HTMLElement).style.display = "none"; // Hide salary info

  // Clear input fields
  (document.getElementById("username") as HTMLInputElement).value = "";
  (document.getElementById("password") as HTMLInputElement).value = "";
}
