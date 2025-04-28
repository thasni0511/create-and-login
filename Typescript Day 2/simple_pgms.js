function user(name, age) {
    return "Hello, ".concat(name, ". You are ").concat(age, " years old.");
}
function calculateSum(a, b) {
    if (b === void 0) { b = 0; }
    return a + b;
}
var scores = [85, 90, 78, 92];
var students = ["Amina", "Alana", "Salma", "Serah"];
var studentDetails = ["Seraphine", 25];
var product = ["Laptop", 40500, true];
console.log(user("Thanu", 25));
console.log(calculateSum(10));
console.log(calculateSum(10, 5));
console.log(scores);
console.log(students);
console.log(studentDetails);
console.log(product);
