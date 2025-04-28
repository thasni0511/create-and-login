function user(name: string, age: number): string {
    return `Hello, ${name}. You are ${age} years old.`;
  }
  
  function calculateSum(a: number, b: number = 10): number {
    return a + b; 
  }
  
  let scores: number[] = [85, 90, 78, 92];
  let students: string[] = ["Amina", "Alana", "Salma", "Serah"];
  

  let studentDetails: [string, number] = ["Seraphine", 25]; 
  let product: [string, number, boolean] = ["Laptop", 40500, true]; 
  
  console.log(user("Thanu", 25)); 
  console.log(calculateSum(10)); 
  console.log(calculateSum(10, 5)); 
  
  console.log(scores); 
  console.log(students); 
  
  console.log(studentDetails); 
  console.log(product); 
  