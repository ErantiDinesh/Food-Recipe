import React, {useEffect, useState} from 'react'
import './SearchedProducts.css'
import { useParams } from 'react-router-dom'
import CuisineItemCard from '../CuisineItemCard/CuisineItemCard'

const SearchedProducts = () => {

    const [searchedItems, setSearchedItems] = useState([])

    const params = useParams()
    // console.log(params.name)

    const getSearchedProducts = async () => {
        const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${params.name}`)
        const data = await response.json()
        setSearchedItems(data.results)
        console.log(data.results)
    }

    useEffect(() => {
        getSearchedProducts()    
      }, [params.name])

  return (
    <div className='searched-items-container'>
        {searchedItems.map((item) => (
            <CuisineItemCard id = {item.id} title = {item.title} imageUrl = {item.image}/>
        ))}
    </div>
  )
}

export default SearchedProducts