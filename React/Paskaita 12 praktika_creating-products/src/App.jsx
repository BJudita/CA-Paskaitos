import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import AddProductForm from './components/AddProductForm/AddProductForm';
import ProductsList from './components/ProductsList/ProductsList';


const App = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/items')
      .then((response) => response.json())
      .then((data) => {
        setItems(data);
        setLoading(false);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleProductAdded = (newProduct) => {
    setItems((prevItems) => [...prevItems, newProduct]);
  };

  return (
    <Router>
      <h1>Product List</h1>
      <Routes>
        <Route
          path="/"
          element={
            loading ? (
              <p>Loading...</p>
            ) : (
              <ProductsList items={items} onProductAdded={handleProductAdded} />
            )
          }
        />
        <Route
          path="/add"
          element={<AddProductForm onProductAdded={handleProductAdded} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
