import React, { useState, useEffect } from "react";
import ShoppingListContext from "./ShoppingListContext.jsx";

const ShoppingListProvider = ({ children }) => {
    // Pirkinių sąrašas kaip pradinis masyvas
    const storedList = JSON.parse(localStorage.getItem("shoppingList")) || ["Pienas", "Duona"];
    const [shoppingList, setShoppingList] = useState(storedList);

    useEffect(() => {
      localStorage.setItem("shoppingList", JSON.stringify(shoppingList));
  }, [shoppingList]);

    // Funkcija pridėti elementą į sąrašą
    const addItem = (item) => {
      setShoppingList((prevList) => [...prevList, item]);
    };
    
    // Funkcija pašalinti elementą iš sąrašo
    const removeItem = (item) => {
      setShoppingList((prevList) => prevList.filter((i) => i !== item));
    };
    
      // Pateikia reikšmes ir funkcijas per kontekstą
    return (
        <ShoppingListContext.Provider value={{ shoppingList, addItem, removeItem }}>
          {children}
        </ShoppingListContext.Provider>
      );
    };
    
    
    export default ShoppingListProvider;