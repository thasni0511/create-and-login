// display.ts
// Define enum for grade status
var GradeStatus;
(function (GradeStatus) {
    GradeStatus["A"] = "A";
    GradeStatus["B"] = "B";
    GradeStatus["C"] = "C";
    GradeStatus["D"] = "D";
    GradeStatus["F"] = "F";
})(GradeStatus || (GradeStatus = {}));
// Get the div to display student details
var studentDiv = document.getElementById('studentDetails');
// Retrieve student details from localStorage
var studentName = localStorage.getItem('studentName');
var age = localStorage.getItem('age');
var grade = localStorage.getItem('grade');
// Initialize status
var studentStatus = "";
// Check grade and assign status
if (grade === GradeStatus.F) {
    studentStatus = "Failed";
}
else if (grade === GradeStatus.A) {
    studentStatus = "Excellent";
}
else if (grade === GradeStatus.B) {
    studentStatus = "Good";
}
else if (grade === GradeStatus.C) {
    studentStatus = "Satisfactory";
}
else if (grade === GradeStatus.D) {
    studentStatus = "Needs Improvement";
}
else {
    studentStatus = "Unknown Grade";
}
// Display student details
if (studentDiv) {
    studentDiv.innerHTML = "\n      <p><strong>Student Name:</strong> ".concat(studentName, "</p>\n      <p><strong>Age:</strong> ").concat(age, "</p>\n      <p><strong>Status:</strong> <span class=\"").concat(studentStatus.toLowerCase().replace(/\s+/g, ''), "\">").concat(studentStatus, "</span></p>\n    ");
}
