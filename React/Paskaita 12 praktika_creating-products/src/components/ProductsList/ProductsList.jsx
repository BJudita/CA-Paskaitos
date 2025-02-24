import PropTypes from 'prop-types';  
import { Link } from 'react-router-dom';

const ProductList = ({ items, onProductAdded }) => {
  const deleteItem = (id) => {
    fetch(`http://localhost:5000/items/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        onProductAdded(id);
      })
      .catch((error) => console.error('Error deleting item:', error));
  };

  return (
    <div>
      <Link to="/add">
        <button>Add New Product</button>
      </Link>
      <ul>
        {items.map((item) => (
          <li key={item._id}>
            {item.name}: {item.price}
            <button onClick={() => deleteItem(item._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Add PropTypes validation
ProductList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,  
      name: PropTypes.string.isRequired, 
      price: PropTypes.number.isRequired, 
    })
  ).isRequired,
  onProductAdded: PropTypes.func.isRequired,
};

export default ProductList;