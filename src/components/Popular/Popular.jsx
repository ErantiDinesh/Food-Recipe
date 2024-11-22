import React, { useState, useEffect } from "react";
import Productcard from "../ProductCard/Productcard";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "./Popular.css";

const Popular = () => {
  const [popular, setPopular] = useState([]);

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

  useEffect(() => {
    getPopularItems();
  }, []);

  return (
    <div>
      <h1 className="popular-items-heading">Popular Items</h1>
      <Splide
        options={{
          perPage: 4,
          arrows: false,        
          pagination: false,     
          drag: true,            
          gap: "1rem",           
          breakpoints: {
            1024: { perPage: 3, gap: "0.75rem" },
            768: { perPage: 2, gap: "0.5rem" },
            480: { perPage: 1, gap: "0.5rem" },
          },
        }}
      >
        {popular.map((item) => (
          <SplideSlide key={item.id}>
            <Productcard id={item.id} title={item.title} imageUrl={item.image} />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default Popular;
