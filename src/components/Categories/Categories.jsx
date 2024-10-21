import React, { useState } from "react";
import "./Categories.css";
import { FaPizzaSlice, FaHamburger, FaSearch } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import { NavLink, useNavigate } from "react-router-dom";

const Categories = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      navigate(`/searched/${input}`);
      setInput("");
    }
  };

  return (
    <div className="categories-and-searchbar-container">
      <div className="searchBar-container">
        <input
          type="text"
          placeholder="Enter recipe name"
          value={input}
          className="searchbar-input"
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <div className="search-image-container">
          <FaSearch />
        </div>
      </div>
      <div className="categories-and-favourites-container">
        <NavLink to = "/" className="home-button" style={({ isActive }) => ({
              color: isActive ? "red" : "black",
            })}>
       Home 
      </NavLink>
        <div className="categories-container">
          <NavLink
            to="/cuisine/italian"
            style={({ isActive }) => ({
              color: isActive ? "red" : "black",
            })}
            className="nav-link-categories"
          >
            <FaPizzaSlice className="category-image" />
            <h1> Italian </h1>
          </NavLink>
          <NavLink
            to="/cuisine/american"
            style={({ isActive }) => ({
              color: isActive ? "red" : "black",
            })}
            className="nav-link-categories"
          >
            <FaHamburger className="category-image" />
            <h1> American </h1>
          </NavLink>
          <NavLink
            to="/cuisine/thai"
            style={({ isActive }) => ({
              color: isActive ? "red" : "black",
            })}
            className="nav-link-categories"
          >
            <GiNoodles className="category-image" />
            <h1> Thai </h1>
          </NavLink>
          <NavLink
            to="/cuisine/japanese"
            style={({ isActive }) => ({
              color: isActive ? "red" : "black",
            })}
            className="nav-link-categories"
          >
            <GiChopsticks className="category-image" />
            <h1> Japnese </h1>
          </NavLink>
        </div>
        <div className="favourites-container">
            <NavLink to = "/cuisine/favourites" className="favouritesName"  style={({ isActive }) => ({
              color: isActive ? "red" : "black",
            })}>
             Favourites 
            </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Categories;
