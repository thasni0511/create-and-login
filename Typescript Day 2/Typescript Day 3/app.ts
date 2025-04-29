interface User { //Notes : It's a blueprint for a user object. Every user must have:name,age but email is optional
    name: string;
    age: number;
    email?: string;  //optional
  }

  const admin: Readonly<User> = { //readonly user .... cannot change after created 
    name: "Admin",
    age: 40,
    email: "admin@relaxplzz.com"
  };

  function greetUser(user: User): void { //greeting message shows after each user creation
    const greetingDiv = document.getElementById('greetingMessage') as HTMLDivElement;
    greetingDiv.textContent = `Hi, ${user.name}!Your User Profile is Created: `;
  
    setTimeout(() => {
      greetingDiv.textContent = '';
    }, 2000);
  }
  
  const users: User[] = []; //users is a empty list to store the newly added users in the list made so far
  
  const formElement = document.getElementById('userForm') as HTMLFormElement;
  const userList = document.getElementById('userList') as HTMLUListElement;
  
  if (formElement) {
    formElement.addEventListener('submit', function (event) {
      event.preventDefault();
  
      const nameInput = document.getElementById('name') as HTMLInputElement;
      const ageInput = document.getElementById('age') as HTMLInputElement;
      const emailInput = document.getElementById('email') as HTMLInputElement;


const newUser: User = { //new user object .... this object follows the user interface
    name: nameInput.value,
    age: parseInt(ageInput.value),
  };
  
  if (emailInput.value) { //if something in the email field add that to the newUser object.
    newUser.email = emailInput.value;
  }
  
  users.push(newUser);
  greetUser(newUser);
  renderUsers();

      formElement.reset();
    });
  }

  
  
//   // Function to display all users
//   function renderUsers() {
//     userList.innerHTML = ''; // Clear current list
  
//     users.forEach((user) => {
//       const li = document.createElement('li');
//       li.textContent = `${user.name} (${user.email}) - Age: ${user.age}`;
//       userList.appendChild(li);
//     });
//   }


//   function renderUsers() {
//     userList.innerHTML = ''; // Clear the list first
  
//     users.forEach((user) => {
//       const li = document.createElement('li');
  
//       li.innerHTML = `
//         <span class="user-name">${user.name}</span>
//         <span class="user-email">${user.email}</span>
//         <span class="user-age">Age: ${user.age}</span>
//       `;
  
//       userList.appendChild(li);
//     });
//   }
  
function renderUsers() {
    userList.innerHTML = ''; // Clearing the form

        //  admin user --- readonly
        const adminItem = document.createElement('li');
        adminItem.innerHTML = `
          <div class="user-row">

          <span class="user-name">${admin.name}</span>
          <span class="user-age">Age: ${admin.age}</span>
        <span class="user-email">${admin.email}</span>
        <span class="admin-placeholder"></span> 

        </div>
        `;
        adminItem.classList.add("admin-user");
        userList.appendChild(adminItem);
  
    users.forEach((user,index) => {
      const li = document.createElement('li');
  
      li.innerHTML = `
        <div class="user-row">
          <span class="user-name">${user.name}</span>
          <span class="user-age">Age: ${user.age}</span>
        <span class="user-email">${user.email || 'No email provided'}</span>
              <button class="delete-btn">Delete</button>

        </div>
      `;
      const deleteButton = li.querySelector('.delete-btn') as HTMLButtonElement;
      deleteButton.addEventListener('click', () => {
        if (confirm(`Are you sure you want to delete : ${user.name}?`)) {
        users.splice(index, 1); 
        renderUsers(); 
        }
      });
  
      userList.appendChild(li);
    });
  }


  renderUsers();

  
