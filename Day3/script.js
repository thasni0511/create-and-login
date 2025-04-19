var members = [];

document.getElementById("memberForm").addEventListener("submit", function(event) {
  event.preventDefault();

  var name = document.getElementById("name").value;
  var role = document.getElementById("role").value;
  var skill = document.getElementById("skill").value;
  var profile = document.getElementById("profile").value; 

  members.push({ name, role, skill, profile });
  console.log("Members List:", members);

  alert("Member Created!");
  this.reset();
});

function showMembers() {
  document.getElementById("formSection").style.display = "none";
  document.getElementById("viewSection").style.display = "block";

  var memberList = document.getElementById("memberList");
  memberList.innerHTML = "";

  if (members.length === 0) {
    memberList.innerHTML = "<p>No members added yet.</p>";
    return;
  }

  members.forEach(member => {
    var card = document.createElement("div");
    card.className = "member-card";
    card.innerHTML = `
      <img src="${member.profile}" alt="Profile Picture" class="profile-pic">
      <h3>${member.name}</h3>
      <p><strong>Role:</strong> ${member.role}</p>
      <p><strong>Skill:</strong> ${member.skill}</p>
    `;
    memberList.appendChild(card);
  });
}

function Back() {
  document.getElementById("viewSection").style.display = "none";
  document.getElementById("formSection").style.display = "block";
}