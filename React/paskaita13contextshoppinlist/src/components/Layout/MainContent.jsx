import React from "react";
import AddItemForm from "../ShoppingList/AddItemForm";
import ShoppingList from "../ShoppingList/ShoppingList";
import ShoppingListProvider from "../Context/ShoppingListProvider";

const MainContent = () => {
  return (
    <main>
    <ShoppingListProvider>
      <AddItemForm />
      <ShoppingList />
      </ShoppingListProvider>
    </main>
  );
};

export default MainContent;