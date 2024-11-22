import React, { createContext, useState, useEffect } from "react";

export const RecipeContext = createContext(null);

const RecipeContextProvider = ({ children }) => {
  
    const [favItems, setFavItem] = useState(() => {
        const storedItems = localStorage.getItem("favRecipes");
        return storedItems ? JSON.parse(storedItems) : [];
    });

    const [cartItems, setCartItems] = useState(() => {
        const storedCartItems = localStorage.getItem("cartItems");
        return storedCartItems ? JSON.parse(storedCartItems) : [];
    })


    useEffect(() => {
        localStorage.setItem("favRecipes", JSON.stringify(favItems));
    }, [favItems]);

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems])

    const addRecipe = (item) => {
        const newItem = {
            id: item.id,
            title: item.title,
            imageUrl: item.imageUrl,
            quantity: item.quantity,
        };
        setFavItem((prevState) => [...prevState, newItem]);
    };

    const removeRecipe = (item) => {
        const filteredItems = favItems.filter((product) => product.id !== item.id);
        setFavItem(filteredItems);
    };

    const addToCart = (item) => {
        const newItem = {
            id: item.id,
            title: item.title,
            imageUrl: item.imageUrl,
            quantity: item.quantity,
        };

        setCartItems((prevState) => [...prevState, newItem]);
    }

    const removeFromCart = (item) => {
        const cartFilteredItems = cartItems.filter((product) => (
            product.id !== item.id
        ))
        setCartItems(cartFilteredItems);
    }

    const itemQuantityIncrement = (item) => {
        setCartItems((prevState) => prevState.map((product) => product.id === item.id ? {...product, quantity: product.quantity + 1} : product))
    }

    const itemQuantityDecrement = (item) => {
        setCartItems((prevState) => prevState.map((product) => product.id === item.id ? {...product, quantity: product.quantity - 1} : product))
    }

    


    console.log(cartItems)

    const contextValue = { addRecipe, removeRecipe, favItems, cartItems, addToCart, removeFromCart, itemQuantityIncrement, itemQuantityDecrement };

    return (
        <RecipeContext.Provider value={contextValue}>
            {children}
        </RecipeContext.Provider>
    );
};

export default RecipeContextProvider;
