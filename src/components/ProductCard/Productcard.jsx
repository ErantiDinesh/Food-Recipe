import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";
import { FaRegHeart } from "react-icons/fa";
import { RecipeContext } from "../../Context/RecipeContext";

const Productcard = (props) => {
  const { id, title, imageUrl } = props;
  const { addRecipe, removeRecipe, favItems } = useContext(RecipeContext);
  const [favIconStyle, setFavIconStyle] = useState("classNormalColorIcon");

  useEffect(() => {
    const isItemPresent = favItems.some((item) => item.id === id);
    if (isItemPresent) {
      setFavIconStyle("classRedColorIcon");
    } else {
      setFavIconStyle("classNormalColorIcon");
    }
  }, [favItems, id]);

  const addProductToFav = () => {
    const Recipeitem = {
      id,
      title,
      imageUrl,
    };

    const isItemPresent = favItems.some((item) => item.id === id);

    if (isItemPresent) {
      removeRecipe(Recipeitem);
      setFavIconStyle("classNormalColorIcon"); 
    } else {
      addRecipe(Recipeitem);
      setFavIconStyle("classRedColorIcon"); 
    }
  };

  return (
    <div className="product-card">
      <Link to={`/recipe/${id}`} className="productcard-link">
        <img src={imageUrl} alt={title} className="product-card-image" />
      </Link>
      <div className="product-title-container">
        <p className="product-card-title">{title}</p>
        <div className={`fav-icon-wrapper ${favIconStyle}`}>
          <FaRegHeart onClick={addProductToFav} />
        </div>
      </div>
    </div>
  );
};

export default Productcard;
