function profile(name, age) {
    return {
        name: name,
        age: age
    };
}
function show(user) {
    console.log("Name: ".concat(user.name, ", Age: ").concat(user.age));
}
var user1 = profile("Thasni", 25);
show(user1);
var user2 = profile("Thanu", 30);
show(user2);
