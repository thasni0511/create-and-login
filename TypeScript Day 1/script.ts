
if (document.getElementById('userForm')) { 

    const form = document.getElementById('userForm') as HTMLFormElement;
  
    form.addEventListener('submit', (e: Event) => {
      e.preventDefault();
  
      const name = (document.getElementById('name') as HTMLInputElement).value;
      const email = (document.getElementById('email') as HTMLInputElement).value;
      const age = (document.getElementById('age') as HTMLInputElement).value;
  
      
      localStorage.setItem('name', name);  
      localStorage.setItem('email', email);
      localStorage.setItem('age', age);
  
      window.location.href = 'submit.html'; 

    });
  }
  
  
  if (document.getElementById('displayData')) { 
    const name = localStorage.getItem('name');
    const email = localStorage.getItem('email');
    const age = localStorage.getItem('age');
  
    const displayDiv = document.getElementById('displayData') as HTMLElement;
    displayDiv.innerHTML = `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Age:</strong> ${age}</p>
    `;
  }
  