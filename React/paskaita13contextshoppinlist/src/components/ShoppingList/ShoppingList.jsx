import React, { useContext } from "react"
import RemoveItemButton from "./RemoveItemButton";
import ShoppingListContext from "../Context/ShoppingListContext.jsx";

const ShoppingList = () => {
    const shoppingContext = useContext(ShoppingListContext);

    if (!shoppingContext) {
        return <p>Loading...</p>; // Prevent crashing if context is missing
    }

    const { shoppingList } = shoppingContext;

    return (
        <div>
            <h2>Pirkinių sąrašas</h2>
            {shoppingList.length > 0 ? (
                <ul>
                    {shoppingList.map((item, index) => (
                        <li key={index}>
                            {item} <RemoveItemButton item={item} />
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Sąrašas tuščias.</p> // Show this if shoppingList is empty
            )}
        </div>
    );
};

export default ShoppingList;