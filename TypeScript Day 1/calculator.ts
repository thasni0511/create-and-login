function add(a: number, b: number): number {
    return a + b;
  }
  
  function sub(a: number, b: number): number {
    return a - b;
  }
  
  function multi(a: number, b: number): number {
    return a * b;
  }
  
  function div(a: number, b: number): string | number {
    if (b === 0) {
      return "Cannot divide by zero";
    }
    return a / b;
  }
  
  console.log(add(5, 3));      
  console.log(sub(5, 3)); 
  console.log(multi(5, 3));  
  console.log(div(5, 0));   
  console.log(div(10,5));
  

 