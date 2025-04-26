if (document.getElementById('userForm')) { // Checking if on the form.html page
    var form = document.getElementById('userForm');
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var age = document.getElementById('age').value;
        localStorage.setItem('name', name); // Save the values to localStorage 
        localStorage.setItem('email', email);
        localStorage.setItem('age', age);
        window.location.href = 'submit.html'; // Redirect to the display page of show user details
    });
}
if (document.getElementById('displayData')) { // Check if on submit.html
    var name_1 = localStorage.getItem('name');
    var email = localStorage.getItem('email');
    var age = localStorage.getItem('age');
    var displayDiv = document.getElementById('displayData');
    displayDiv.innerHTML = "\n      <p><strong>Name:</strong> ".concat(name_1, "</p>\n      <p><strong>Email:</strong> ").concat(email, "</p>\n      <p><strong>Age:</strong> ").concat(age, "</p>\n    ");
}
