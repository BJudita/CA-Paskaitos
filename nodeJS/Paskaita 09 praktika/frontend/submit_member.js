if (document.getElementById("membership-form")) {
  const form = document.getElementById("membership-form");
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const price = document.getElementById("price").value;
    const description = document.getElementById("description").value;

    try {
      console.log({ name, price, description }); // tikrinu
      const response = await fetch("http://localhost:5000/memberships", { 
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, price, description }),
      });

      if (response.ok) {
        alert("membership created successfully!");
        form.reset();
      } else {
        alert("Failed to create membership.");
      }
    } catch (error) {
      console.error("Error submitting membership:", error);
      alert("An error occurred. Please try again.");
    }
  });
}

// prid4s memberships prie saraso
if (document.querySelector(".membership-card")) {
  async function loadMemberships() {
    try {
      const response = await fetch("http://localhost:5000/memberships");
      const memberships = await response.json();

      const membershipList = document.querySelector(".membership-card");

      memberships.forEach((membership) => {

        const membershipDiv = document.createElement("div");
        membershipDiv.classList.add("card-memb");

        const h4 = document.createElement("h4");
        h4.textContent = `${membership.name} ${membership.price}`;

    
        const span = document.createElement("p");
        span.textContent = `${membership.description}`;
  
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete-btn");

        membershipDiv.appendChild(h4);
        membershipDiv.appendChild(span);
        membershipDiv.appendChild(deleteButton);
        membershipList.appendChild(membershipDiv);

        deleteButton.addEventListener("click", async () => {
          try {
            const response = await fetch(`http://localhost:5000/memberships/${membership._id}`, {
              method: "DELETE",
            });

            if (response.ok) {
              membershipList.removeChild(membershipDiv);
              alert("Membership deleted successfully!");
            } else {
              alert("Failed to delete membership.");
            }
          } catch (error) {
            console.error("Error deleting membership:", error);
            alert("An error occurred. Please try again.");
          }
        });
      });
    } catch (error) {
      console.error("Error loading membership list:", error);
      alert("An error occurred. Please try again.");
    }
  }

  loadMemberships();
}