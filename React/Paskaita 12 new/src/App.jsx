import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductForm from './components/ProductsPage/ProductForm.jsx'
import ProductsPage from './components/ProductsPage/ProductsPage.jsx'
import ProductEdit from './components/ProductsPage/ProductEdit.jsx';

function App() {

  return (
    <Router>
    <Routes>
      <Route path="/" element={<ProductsPage />} />
      <Route path="/add-product" element={<ProductForm />} />
      <Route path="/edit-product/:_id" element={<ProductEdit />} />
    </Routes>
  </Router>
  )
}

export default App
