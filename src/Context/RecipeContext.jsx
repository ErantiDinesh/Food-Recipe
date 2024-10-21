import React, { createContext, useState, useEffect } from "react";

export const RecipeContext = createContext(null);

const RecipeContextProvider = ({ children }) => {
  
    const [favItems, setFavItem] = useState(() => {
        const storedItems = localStorage.getItem("favRecipes");
        return storedItems ? JSON.parse(storedItems) : [];
    });


    useEffect(() => {
        localStorage.setItem("favRecipes", JSON.stringify(favItems));
    }, [favItems]);

    const addRecipe = (item) => {
        const newItem = {
            id: item.id,
            title: item.title,
            imageUrl: item.imageUrl,
        };
        setFavItem((prevState) => [...prevState, newItem]);
    };

    const removeRecipe = (item) => {
        const filteredItems = favItems.filter((product) => product.id !== item.id);
        setFavItem(filteredItems);
    };

    const contextValue = { addRecipe, removeRecipe, favItems };

    return (
        <RecipeContext.Provider value={contextValue}>
            {children}
        </RecipeContext.Provider>
    );
};

export default RecipeContextProvider;
