import { useState } from 'react';
import PropTypes from 'prop-types';

const AddProductForm = ({ onProductAdded }) => {
  const [formData, setFormData] = useState({ name: '', price: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/items', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to add product');
      }

      console.log('Product added successfully:', data);
      onProductAdded(data); 
      setFormData({ name: '', price: '' }); 
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input
        type="text"
        name="name"
        placeholder="Product Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="price"
        placeholder="Price"
        value={formData.price}
        onChange={handleChange}
        required
      />
      <button type="submit">Add Product</button>
    </form>
  );
};

AddProductForm.propTypes = {
  onProductAdded: PropTypes.func.isRequired,
};

export default AddProductForm;
