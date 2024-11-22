import React, { useEffect, useState } from 'react';
import './Cuisine.css';
import { useParams } from 'react-router-dom';
import CuisineItemCard from '../CuisineItemCard/CuisineItemCard';
import { Oval } from 'react-loader-spinner';

const Cuisine = () => {
  const [cuisineItems, setCuisineItems] = useState([]);
  const [isLoadingActive, setIsLoadingActive] = useState(true);
  const [offset, setOffset] = useState(0);
  const limitValue = 10;

  const { type: cuisineType } = useParams(); 

  const getCategoryItems = async () => {
    setIsLoadingActive(true);

    const response = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=${limitValue}&offset=${offset}&cuisine=${cuisineType}`
    );
    const data = await response.json();

    setCuisineItems((prevState) => [...prevState, ...data.results]);
    setIsLoadingActive(false);
  };

  useEffect(() => {
    setCuisineItems([]);
    setOffset(0);   
    getCategoryItems();
  }, [cuisineType]); 

  useEffect(() => {
    if (offset !== 0) {
      getCategoryItems();
    }
  }, [offset]);

  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) {
      setOffset((prevOffset) => prevOffset + limitValue);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <div>
        <div className="loader-container">
          <Oval
            visible={isLoadingActive}
            height="40"
            width="40"
            color="black"
            ariaLabel="oval-loading"
          />
        </div>
      </div>
      <div className='all-cuisine-items-container'>
        {cuisineItems.map((item) => (
          <CuisineItemCard key={item.id} id={item.id} title={item.title} imageUrl={item.image} />
        ))}
      </div>
    </div>
  );
};

export default Cuisine;
