import './App.css'
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState("");

    const fetchItems = async () => {
        try {
            const response = await axios.get("http://localhost:3006/items");
            setItems(response.data);
        } catch (error) {
            console.error("Error fetching items:", error);
        }
    };

    const addItem = async () => {
        if (!newItem) return;
        try {
            await axios.post("http://localhost:3006/items", { title: newItem });
            setNewItem(""); 
            fetchItems(); 
        } catch (error) {
            console.error("Error adding item:", error);
        }
    };


    const deleteItem = async (id) => {
        try {
            await axios.delete(`http://localhost:3006/items/${id}`);
            fetchItems();
        } catch (error) {
            console.error("Error deleting item:", error);
        }
    };

    useEffect(() => {
        fetchItems();
    }, []);

    return (
        <div className="container">
            <h1>Pirkinių Sąrašas</h1>

            <div>
                <input
                    type="text"
                    placeholder="Įrašykite prekę..."
                    value={newItem}
                    onChange={(e) => setNewItem(e.target.value)}
                />
                <button onClick={addItem}>Pridėti</button>
            </div>

            <ul>
                {items.map((item) => (
                    <li key={item.id}>
                        {item.title}{" "}
                        <button onClick={() => deleteItem(item.id)}>Ištrinti</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default App
