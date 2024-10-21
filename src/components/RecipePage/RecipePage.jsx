import React, {useState, useEffect} from 'react'
import './RecipePage.css'
import { useParams } from 'react-router-dom'

const RecipePage = () => {

    const [recipeData, setRecipeData] = useState({})
    const [activeButton, setActiveButton] = useState("Instructions")

    const productId = useParams()
    // console.log(productId.id)

    const getDetailedRecipeInfo = async () => {
        const response = await fetch(`https://api.spoonacular.com/recipes/${productId.id}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
        const data = await response.json()
        // console.log(data)
        setRecipeData(data)
    }

    useEffect(() => {
        getDetailedRecipeInfo()
    }, [productId.id])

  return (
    <div className='detailed-product-cont'>
        <div className='detailed-leftside-cont'>
            <h1> {recipeData.title} </h1>
            <img src = {recipeData.image} className='detailed-product-image' alt = {recipeData.title}/>
        </div>
        <div className='detailed-rightside-cont'>
           
            <div className='detailed-product-buttons'>
                <button onClick={() => (setActiveButton("Instructions"))} className={activeButton === "Instructions" ? "active-class" : "inactive-class"}> Instructions </button>
                <button onClick = {() => (setActiveButton("Ingredients"))} className={activeButton === "Ingredients" ? "active-class" : "inactive-class"}> Ingredients </button>
            </div>

            { activeButton === "Instructions" ? <div className='detailed-product-instructions'>
                <p dangerouslySetInnerHTML={{__html: recipeData.summary}}></p>
                <p dangerouslySetInnerHTML={{__html: recipeData.instructions}}></p>
            </div> : "  "}
            
            {activeButton === "Ingredients" ? <div className='ingredients-list'>
                <ul>
                    {recipeData?.extendedIngredients?.map((item) => (
                        <li key = {item.id} >{item.original}</li>
                    ))}
                </ul>
            </div> : ""}
        </div>
    </div>
  )
}

export default RecipePage