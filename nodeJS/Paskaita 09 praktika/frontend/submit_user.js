if (document.getElementById("user-form")) {
  const form = document.getElementById("user-form");

  // Function to load memberships into the dropdown
  async function loadMemberships() {
    try {
      const response = await fetch("http://localhost:5000/memberships"); 
      const memberships = await response.json();
  
      const membershipSelect = document.getElementById("membership");
      membershipSelect.innerHTML = '';  // Clear existing options
  
      // Add each membership as an option to the dropdown
      memberships.forEach((membership) => {
        const option = document.createElement("option");
        option.value = membership._id;  // Set the value to the membership's _id
        option.textContent = membership.name;  // Set the display text to the membership name
        membershipSelect.appendChild(option);
      });
    } catch (error) {
      console.error("Error loading memberships:", error);
      alert("An error occurred while loading memberships.");
    }
  }

  // Call the function to load memberships when the page loads
  loadMemberships();

  // Handle the form submission
  form.addEventListener("submit", async (event) => {
    event.preventDefault();  // Prevent default form submission
    
    const name = document.getElementById("first-name").value;
    const surname = document.getElementById("surname").value;
    const email = document.getElementById("email").value;
    const service_id = document.getElementById("membership").value;  // Get the selected membership

    // Log the form data to check what you're sending
    console.log({
      name,
      surname,
      email,
      service_id,
    });
    
    try {
      const response = await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, surname, email, service_id }),
      });
  
      if (response.ok) {
        alert("User created successfully!");
        form.reset();  // Clear the form after successful submission
      } else {
        alert("Failed to create user.");
      }
    } catch (error) {
      console.error("Error submitting user:", error);
      alert("An error occurred. Please try again.");
    }
  });
}

// Load and display existing users
if (document.querySelector(".user-card")) {
  async function loadUsers() {
    try {
      const response = await fetch("http://localhost:5000/users");
      const users = await response.json();
  
      const userCardList = document.querySelector(".user-card");
      users.forEach((user) => {
        const h4 = document.createElement("h4");
        h4.textContent = `${user.name} ${user.surname}`;
        
        const p = document.createElement("p");
        p.textContent = `Email Address: ${user.email}`;
        
        const p_memb = document.createElement("p");
        p_memb.textContent = `Membership: ${user.membership}`;  // Assuming membership object is populated
    
        userCardList.appendChild(h4);
        userCardList.appendChild(p);
        userCardList.appendChild(p_memb);
      });
    } catch (error) {
      console.error("Error loading users:", error);
      alert("An error occurred. Please try again.");
    }
  }

  // Call the function to load users when the page loads
  loadUsers();
}