import React, { useContext } from 'react'
import './FavouritesItemCard.css'
import { RecipeContext } from '../../Context/RecipeContext'
import { FaRegHeart } from "react-icons/fa";

const FavouritesItemCard = (props) => {

    const {id, title, imageUrl} = props
    const {removeRecipe} = useContext(RecipeContext)

    const removeProductFromFav = () => {
        removeRecipe({id:id})
    }

  return (
    <div className='favourites-item-card-container'> 
        <img src = {imageUrl} className='favourites-item-card-image' alt = {title}/>
        <div className='cuisine-title-container'>
        <p> {title} </p>
        <div className="fav-icon-wrapper">
          <FaRegHeart onClick={removeProductFromFav} className='classRedColorIcon'/>
        </div>
        </div>
    </div>
  )
}

export default FavouritesItemCard