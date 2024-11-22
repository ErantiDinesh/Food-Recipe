import React, {useState, useEffect} from 'react'
import './OnlineItems.css'
import OnlineItemCard from '../OnlineItemCard/OnlineItemCard';

const OnlineItems = () => {
    const [popular, setPopular] = useState([]);
    const [veggies, setVeggies] = useState([]);

    const getPopularItems = async () => {
      const popularItems = JSON.parse(localStorage.getItem("popular"));
      if (popularItems) {
        setPopular(popularItems);
      } else {
        const response = await fetch(
          `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10`
        );
        const data = await response.json();
        localStorage.setItem("popular", JSON.stringify(data.recipes));
        setPopular(data.recipes);
      }
    };

    const getVegetarianItems = async () => {
        const vegetarianItems = JSON.parse(localStorage.getItem("vegetarian"));
        if (vegetarianItems) {
            setVeggies(vegetarianItems);
        } else {
            const response = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10&tags=vegetarian`);
            const data = await response.json();
            localStorage.setItem("vegetarian", JSON.stringify(data.recipes));
            setVeggies(data.recipes);
        }
    };
  
    useEffect(() => {
      getPopularItems();
      getVegetarianItems();
    }, []);
  
    return (
      <div className='online-items-container'>
          {popular.map((item) => (
            <OnlineItemCard key = {item.id} id={item.id} title={item.title} imageUrl={item.image}/>
          ))}
          {
            veggies.map((item) => (
                <OnlineItemCard key = {item.id} id={item.id} title={item.title} imageUrl={item.image}/>
            ))
          }
      </div>
    );
}

export default OnlineItems