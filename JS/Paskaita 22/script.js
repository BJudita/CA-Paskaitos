const flatForSale = (flat) => {
  const title = document.createElement("h6");
  title.innerText = flat.title;

  const thumbnail = document.createElement("img");
  thumbnail.src = flat.url;

  const flatId = document.createElement("h5");
  flatId.innerText = flat.id;

  const albumId = document.createElement("p");
  albumId.innerText = flat.albumId;

  const boxDiv = document.createElement("div");
  boxDiv.append(thumbnail, flatId, albumId, title);

  const container = document.getElementById("container");
  container.appendChild(boxDiv);
}

const fetchFlats = async () => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/photos`);
    
    if (response.ok) {
      const data = await response.json();
      
      // paims 5is pirmus 
      const fiveFlats = data.slice(0, 5);
      fiveFlats.forEach(flat => {
        flatForSale(flat);
     });
    } 
  } catch (error) {
    console.error(error);
  }
};

fetchFlats();

