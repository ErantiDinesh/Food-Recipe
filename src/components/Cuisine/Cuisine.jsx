import React, {useEffect, useState} from 'react'
import './Cuisine.css'
import { useParams } from 'react-router-dom'
import CuisineItemCard from '../CuisineItemCard/CuisineItemCard'

const Cuisine = () => {

    const [cuisineItems, setCuisineItems] = useState([])

    const cuisineType = useParams()
    // console.log(cuisineType.type)

    const getCategoryItems = async () => {
        const isItemSetInStorage = JSON.parse(localStorage.getItem(`${cuisineType.type}`))

        if (isItemSetInStorage) {
            setCuisineItems(isItemSetInStorage)
        } else {
        const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${cuisineType.type}`)
        const data = await response.json()
        // console.log(data.results)
        setCuisineItems(data.results)
        localStorage.setItem(`${cuisineType.type}`, JSON.stringify(data.results))
        }

    }

    useEffect(() => {
        getCategoryItems()
    }, [cuisineType])

    console.log(cuisineItems)

  return (
    <div className='all-cuisine-items-container'>
        {cuisineItems.map((item) => (
            <CuisineItemCard key = {item.id} id = {item.id} title = {item.title} imageUrl = {item.image} />
        ))}
    </div>
  )
}

export default Cuisine