const renderUserCard = (user) => {
  const img = document.createElement("img");
  img.src = user.picture.large;
  img.alt = `${user.name.first}'s profile picture`; // Prides alt teksta

const name = document.createElement("h4");
name.innerText = `${user.name.first} ${user.name.last} ${user.dob.age}; `

const email = document.createElement("p");
email.innerText = user.email;

const infoDiv = document.createElement("div");
infoDiv.append(img, name, email);

document.body.appendChild(infoDiv); // prides visa info prie html body
}

const fetchRandomUser = async () => {
  try {
    const response = await fetch("https://randomuser.me/api/");
    if(response.ok) {
      const data = await response.json();
      renderUserCard(data.results[0]); // perduos pirm1 vartotoja is rezultatu
          }
  } catch(error) {
    console.error(error);
  }
};
fetchRandomUser(); // iskviecia funkcija

// radom 10 vardu
const charactersCard = (character) => {
  const nameC = document.createElement("h3");
  nameC.innerText = character.name;

  const picture = document.createElement("img");
  picture.src = character.image;

  const state = document.createElement("p");
  state.innerText = character.status;

  const boxDiv = document.createElement("div");
  boxDiv.append(nameC, state, picture);

  document.body.appendChild(boxDiv);
}

const fetchRandomCharacter = async () => {
  try {
    const totalPages = 42; // Assuming there are 42 pages available
    const randomPage = Math.floor(Math.random() * totalPages) + 1; // Random page number between 1 and 42
    const response = await fetch(`https://rickandmortyapi.com/api/character?page=${randomPage}`);
    
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      
      // Display 10 characters from the fetched page
      data.results.forEach(character => {
        charactersCard(character);
      });
    } 
  } catch (error) {
    console.error(error);
  }
};

fetchRandomCharacter();

