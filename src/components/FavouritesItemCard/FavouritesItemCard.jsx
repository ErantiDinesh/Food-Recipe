import React, { useContext } from 'react';
import './FavouritesItemCard.css';
import { RecipeContext } from '../../Context/RecipeContext';
import { FaRegHeart } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const FavouritesItemCard = (props) => {
  const { id, title, imageUrl } = props;
  const { removeRecipe } = useContext(RecipeContext);

  const removeProductFromFav = () => {
    removeRecipe({ id: id });
  };

  return (
    <NavLink to = {`/recipe/${id}`} className="fav-item-card-navlink">
    <div className='favourites-item-card'>
      <img src={imageUrl} className='favourites-item-image' alt={title} />
      <div className='favourites-title-container'>
        <p className='favourites-item-title'>{title}</p>
        <div className="fav-icon-wrapper1">
          <FaRegHeart onClick={removeProductFromFav} className='classRedColorIcon1' />
        </div>
      </div>
    </div>
    </NavLink>
  );
};

export default FavouritesItemCard;
