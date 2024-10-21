import React, { useState, useEffect } from 'react';
import Productcard from '../ProductCard/Productcard';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import './Veggies.css'

const Veggies = () => {
    const [veggies, setVeggies] = useState([]);

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
        getVegetarianItems();
    }, []);

    return (
        <div>
            <h1 className='veggies-items-heading'> Vegetarian Items </h1>
            <Splide
    options={{
        perPage: 4,
        arrows: true,
        pagination: false,
        drag: 'free',
        gap: '1rem',       
        breakpoints: {
            1024: { perPage: 3, gap: '0.75rem' },  
            768: { perPage: 2, gap: '0.5rem' },     
            480: { perPage: 1, gap: '0.5rem' },     
        },
    }}
            >
                {veggies.map((item) => (
                    <SplideSlide key={item.id}>
                        <Productcard id = {item.id} title={item.title} imageUrl={item.image} />
                    </SplideSlide>
                ))}
            </Splide>
        </div>
    );
}

export default Veggies