import React, { useContext } from "react";
import "./Favorites.css";
import { RecipeContext } from "../../Context/RecipeContext";
import FavouritesItemCard from "../FavouritesItemCard/FavouritesItemCard";
import { NavLink } from "react-router-dom";

const Favourites = () => {
  const { favItems } = useContext(RecipeContext);

  return (
    <div className="favourite-items-cont">
      {favItems.length === 0 ? (<div className="empty-fav-page">
        <p>
          Your cart is empty right now. Browse our recipes and find something
          you love!
        </p>
        <NavLink to="/" className="favpage-browse-recipes">
          Browse Recipes
        </NavLink>
      </div>) : 
      (<div className="favourite-items-cont">
        {favItems.map((item) => (
          <FavouritesItemCard
            key={item.id}
            id={item.id}
            title={item.title}
            imageUrl={item.imageUrl}
          />
        ))}
      </div>)}
    </div>
  );
};

export default Favourites;
