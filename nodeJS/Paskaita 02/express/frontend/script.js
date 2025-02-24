async function loadCarBrands() { 
    try {
      const response = await fetch("http://localhost:3000/cars");
      const data = await response.json();

      const carBrands = ["BMW", "VW", "Porsche"];
      
      const carList = document.getElementById('car-list');
      data.forEach(brand => {
        const li = document.createElement('li');
        li.textContent = brand;
        carList.appendChild(li);
      });  
    } catch (error) {
      console.error('Error:', error);
    }
  }

  loadCarBrands();