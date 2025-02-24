// Handles form submission from index.html
if (document.getElementById("name-form")) {
    const form = document.getElementById("name-form");
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const name = document.getElementById("name").value;
      const surname = document.getElementById("surname").value;
  
      try {
        const response = await fetch("http://localhost:5000/user", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, surname }),
        });
  
        if (response.ok) {
          alert("User added successfully!");
          form.reset();
        } else {
          alert("Failed to add user.");
        }
      } catch (error) {
        console.error("Error submitting user:", error);
        alert("An error occurred. Please try again.");
      }
    });
  }
  
  // Handles fetching and displaying the list from list.html
  if (document.getElementById("user-list")) {
    async function loadUsers() {
      try {
        const response = await fetch("http://localhost:5000/user");
        const users = await response.json();
  
        const userList = document.getElementById("user-list");
        users.forEach((user) => {
          const li = document.createElement("li");
          li.textContent = `${user.name} ${user.surname}`;
          userList.appendChild(li);
        });
      } catch (error) {
        console.error("Error loading user list:", error);
        alert("An error occurred. Please try again.");
      }
    }
  
    loadUsers();
  }