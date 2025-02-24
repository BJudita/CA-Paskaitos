const state = {};


const tableHeader = () => {
    const id = document.createElement("th");
    id.innerText = "ID";

    const firstName = document.createElement("th");
    firstName.innerText = "First Name";

    const lastName = document.createElement("th");
    lastName.innerText = "Last Name";

    const image = document.createElement("th");
    image.innerText = "Image";

    const city = document.createElement("th");
    city.innerText = "City";

    const favColor= document.createElement("th");
    favColor.innerText = "Fav color";

const tr = document.createElement("tr");
tr.append(id, image, firstName, lastName, city, favColor);
 const thead = document.createElement("thead");
 thead.append(tr);

    const table = document.createElement("table");
    table.appendChild(thead);
    table.appendChild(document.createElement('tbody'));
    document.body.appendChild(table);
}

function fillTable(vips) {
    const tbody = document.querySelector("tbody");
    tbody.innerHTML = ""; 

    vips.forEach(vip => {
    const id = document.createElement("td");
    id.innerText = vip.id;

    const [firstName, lastName] = vip.name.split(" ");
    const firstNameTd = document.createElement("td");
    firstNameTd.innerText = firstName;

    const lastNameTd = document.createElement("td");
    lastNameTd.innerText = lastName;

    const img = document.createElement("img");
    img.src = vip.image;
    const imageTd = document.createElement("td");
    imageTd.append(img);

    const city = document.createElement("td");
    city.innerText = vip.location.name;

    const favColor= document.createElement("td");
    favColor.innerText = vip.status;

    const tr = document.createElement("tr");
    tr.append(id, imageTd, firstNameTd, lastNameTd, city, favColor);
    tbody.appendChild(tr);
});
}

tableHeader();


document.getElementById("checkIfAlive").addEventListener("change", (e) =>{
    const filteredAlive = e.target.checked
    ? state.vips.filter(vip => vip.status === "Alive")
    : state.vips;

    fillTable(filteredAlive);
});


const fetchInfo = async () => {
    try {
        let response = await fetch(`https://rickandmortyapi.com/api/character`);
    
        if (response.ok) {
            const data = await response.json();
            state.vips = data.results;
        fillTable(state.vips);
    }
    } catch (error) {
        console.log(error);
    }
}

fetchInfo();