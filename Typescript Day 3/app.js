var admin = {
    name: "Admin",
    age: 40,
    email: "admin@relaxplzz.com"
};
function greetUser(user) {
    var greetingDiv = document.getElementById('greetingMessage');
    greetingDiv.textContent = "Hi, ".concat(user.name, "!Your User Profile is Created: ");
    setTimeout(function () {
        greetingDiv.textContent = '';
    }, 2000);
}
var users = [];
var formElement = document.getElementById('userForm');
var userList = document.getElementById('userList');
if (formElement) {
    formElement.addEventListener('submit', function (event) {
        event.preventDefault();
        var nameInput = document.getElementById('name');
        var ageInput = document.getElementById('age');
        var emailInput = document.getElementById('email');
        var newUser = {
            name: nameInput.value,
            age: parseInt(ageInput.value),
        };
        if (emailInput.value) {
            newUser.email = emailInput.value;
        }
        users.push(newUser);
        greetUser(newUser);
        renderUsers();
        formElement.reset();
    });
}
//   // Function to display all users
//   function renderUsers() {
//     userList.innerHTML = ''; // Clear current list
//     users.forEach((user) => {
//       const li = document.createElement('li');
//       li.textContent = `${user.name} (${user.email}) - Age: ${user.age}`;
//       userList.appendChild(li);
//     });
//   }
//   function renderUsers() {
//     userList.innerHTML = ''; // Clear the list first
//     users.forEach((user) => {
//       const li = document.createElement('li');
//       li.innerHTML = `
//         <span class="user-name">${user.name}</span>
//         <span class="user-email">${user.email}</span>
//         <span class="user-age">Age: ${user.age}</span>
//       `;
//       userList.appendChild(li);
//     });
//   }
function renderUsers() {
    userList.innerHTML = ''; // Clearing the form
    //  admin user --- readonly
    var adminItem = document.createElement('li');
    adminItem.innerHTML = "\n          <div class=\"user-row\">\n\n          <span class=\"user-name\">".concat(admin.name, "</span>\n          <span class=\"user-age\">Age: ").concat(admin.age, "</span>\n        <span class=\"user-email\">").concat(admin.email, "</span>\n        <span class=\"admin-placeholder\"></span> \n\n        </div>\n        ");
    adminItem.classList.add("admin-user");
    userList.appendChild(adminItem);
    users.forEach(function (user, index) {
        var li = document.createElement('li');
        li.innerHTML = "\n        <div class=\"user-row\">\n          <span class=\"user-name\">".concat(user.name, "</span>\n          <span class=\"user-age\">Age: ").concat(user.age, "</span>\n        <span class=\"user-email\">").concat(user.email || 'No email provided', "</span>\n              <button class=\"delete-btn\">Delete</button>\n\n        </div>\n      ");
        var deleteButton = li.querySelector('.delete-btn');
        deleteButton.addEventListener('click', function () {
            if (confirm("Are you sure you want to delete : ".concat(user.name, "?"))) {
                users.splice(index, 1);
                renderUsers();
            }
        });
        userList.appendChild(li);
    });
}
renderUsers();
