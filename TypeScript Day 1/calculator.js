function add(a, b) {
    return a + b;
}
function sub(a, b) {
    return a - b;
}
function multi(a, b) {
    return a * b;
}
function div(a, b) {
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
}
console.log(add(5, 3));
console.log(sub(5, 3));
console.log(multi(5, 3));
console.log(div(5, 0));
console.log(div(10, 5));
