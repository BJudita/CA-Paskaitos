import React, { useContext } from "react";
import ShoppingListContext from "../Context/ShoppingListContext.jsx";

const RemoveItemButton = ({ item }) => {
    const { removeItem } = useContext(ShoppingListContext);

    return <button onClick={() => removeItem(item)}>X</button>;
};

export default RemoveItemButton;