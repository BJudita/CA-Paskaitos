//////
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
    } else {
      console.error('Failed to fetch data.');
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

fetchRandomCharacter();
