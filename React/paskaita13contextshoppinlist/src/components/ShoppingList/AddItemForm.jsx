import React, { useState, useContext } from "react";
import ShoppingListContext from "../Context/ShoppingListContext";

const AddItemForm = () => {
    const [newItem, setNewItem] = useState("");
    const shoppingContext = useContext(ShoppingListContext);

    if (!shoppingContext) {
        console.error("ShoppingListContext is undefined! Make sure ShoppingListProvider wraps the component.");
        return null; // Prevent crashing
    }

    const { addItem } = shoppingContext;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newItem) {
            addItem(newItem);
            setNewItem("");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
                placeholder="Pridėti elementą"
            />
            <button type="submit">Pridėti</button>
        </form>
    );
};

export default AddItemForm;