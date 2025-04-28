// display.ts

enum GradeStatus {
    A = "A",
    B = "B",
    C = "C",
    D = "D",
    F = "F"
  }
  
  const studentDiv = document.getElementById('studentDetails') as HTMLElement;
  
  const studentName = localStorage.getItem('studentName');
  const age = localStorage.getItem('age');
  const grade = localStorage.getItem('grade');
  
  let studentStatus = "";
  
  if (grade === GradeStatus.F) {
    studentStatus = "Failed";
  } else if (grade === GradeStatus.A) {
    studentStatus = "Excellent";
  } else if (grade === GradeStatus.B) {
    studentStatus = "Good";
  } else if (grade === GradeStatus.C) {
    studentStatus = "Satisfactory";
  } else if (grade === GradeStatus.D) {
    studentStatus = "Needs Improvement";
  } else {
    studentStatus = "Unknown Grade";
  }
  
  if (studentDiv) {
    studentDiv.innerHTML = `
      <p><strong>Student Name:</strong> ${studentName}</p>
      <p><strong>Age:</strong> ${age}</p>
      <p><strong>Status:</strong> <span class="${studentStatus.toLowerCase().replace(/\s+/g, '')}">${studentStatus}</span></p>
    `;
  }
  