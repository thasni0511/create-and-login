// app.ts

interface Student {
    name: string;
    age: string;
    grade: string;
  }
  
  type CompleteStudent = Required<Student>;
  
  (function () {
    const formElement = document.getElementById('studentForm') as HTMLFormElement;
  
    if (formElement) {
      formElement.addEventListener('submit', function (event) {
        event.preventDefault();
        
        const name = (document.getElementById('name') as HTMLInputElement).value;
        const age = (document.getElementById('age') as HTMLInputElement).value;
        const grade = (document.getElementById('grade') as HTMLSelectElement).value;
  
        const studentData: CompleteStudent = { name, age, grade }; 
  
        localStorage.setItem('studentName', studentData.name);
        localStorage.setItem('age', studentData.age);
        localStorage.setItem('grade', studentData.grade);
  
        window.location.href = 'display.html';
      });
    }
  })();
  