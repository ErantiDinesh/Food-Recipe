import React, {useContext} from 'react'
import './Favorites.css'
import { RecipeContext } from '../../Context/RecipeContext'
import FavouritesItemCard from '../FavouritesItemCard/FavouritesItemCard'

const Favourites = () => {

    const {favItems} = useContext(RecipeContext)
    // const [favProducts, setFavProducts] = useState(favItems)

    // const clickfavHeartIcon = (id) => {
    //     // console.log(id)
    //     removeRecipe(id)
    //     const filteredItems = favProducts.filter((item) => (
    //         item.id !== id
    //     ))
    //     setFavProducts(filteredItems)

    // }


  return (
    <div className="favourite-items-cont">
        {favItems.map((item) => (
            <FavouritesItemCard key = {item.id} id = {item.id} title = {item.title} imageUrl = {item.imageUrl}/>
        ))}
    </div>
  )
}

export default Favourites