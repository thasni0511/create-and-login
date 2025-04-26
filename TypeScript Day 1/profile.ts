interface User{ //Notes: Interfaces define the shape of an object, specifying which properties it should have and their types.
    name: string; //specific format,reusable user object 
    age: number; //a blueprint for an object.does not create a real object itself.only defines how an object should look.
  }
  
  function profile(name: string, age: number): User {// Notes:this function returns a specific format user object earlier defined that can be reusable
    return {
      name: name,
      age: age
    };
  }
  
  function show(user: User): void { // Notes: void type doesn't return anything
    console.log(`Name: ${user.name}, Age: ${user.age}`);
  }
  
  const user1 = profile("Thasni", 25);
  show(user1);
  
  const user2 = profile("Thanu", 30);
  show(user2);
  