import React, { useContext, useEffect, useState } from "react";
import "./Categories.css";
import { FaPizzaSlice, FaHamburger, FaSearch } from "react-icons/fa";
import { GiNoodles, GiChopsticks, GiKnifeFork } from "react-icons/gi";
import { NavLink, useNavigate } from "react-router-dom";
import { RecipeContext } from "../../Context/RecipeContext";
import { FaHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";

const Categories = () => {
  const { favItems, cartItems } = useContext(RecipeContext);

  const [input, setInput] = useState("");
  const [debouncedValue, setDebouncedValue] = useState(input);
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [isHamberActive, setIsHamberActive] = useState(false);

  const navigate = useNavigate();

  const handleHamberMenuIcon = () => {
    setIsHamberActive((prevSTate) => !prevSTate);
  };

  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const totalPrice = cartItems.reduce(
    (total, item) => total + 200 * item.quantity,
    0
  );

  const handleSearchClick = () => {
    setIsSearchExpanded((prev) => !prev);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setInput("");
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(input);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [input]);

  useEffect(() => {
    if (debouncedValue) {
      navigate(`/searched/${debouncedValue}`);
    }
  }, [debouncedValue]);

  return (
    <div className="categories-and-searchbar-container">
      <div className="navbar-container">
        <div className="home-button">
          <NavLink
            to="/"
            className="home-button-name"
            style={({ isActive }) => ({
              color: isActive ? "red" : "black",
            })}
          >
            <GiKnifeFork />
            <span> delicious </span>
          </NavLink>
        </div>

        <div className="order-online-container">
          <NavLink
            to="/order/online"
            className="order-online-cont"
            style={({ isActive }) => ({
              color: isActive ? "red" : "black",
            })}
          >
            Order Online
          </NavLink>
        </div>

        <div className="searchBar-container">
          <input
            type="text"
            placeholder="Enter recipe name"
            value={input}
            className={`searchbar-input ${
              isSearchExpanded ? "searchbar-expanded" : ""
            }`}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <div className="search-image-container">   
              <FaSearch onClick={handleSearchClick} />
          </div>
        </div>

        <div className="favourites-container">
          <NavLink
            to="/cuisine/favourites"
            className="favouritesName"
            style={({ isActive }) => ({
              color: isActive ? "red" : "black",
            })}
          >
            <FaHeart className="navbar-heart-icon" />
          </NavLink>
          <div className="favItem-number-cont">
            <p className="favItems-count"> {favItems.length} </p>
          </div>
        </div>

        <div className="cart-container">
          <NavLink
            to="/cart"
            className="cart-cont-nav"
            style={({ isActive }) => ({
              color: isActive ? "red" : "black",
            })}
          >
            <div className="cart-data-container">
              <MdOutlineShoppingCart className="navbar-cart-image" />
              {cartItems.length > 0 ? (
                <div className="quantity-and-price-data-container">
                  <p className="total-quantity-cart-cont">
                    {" "}
                    {totalQuantity} items{" "}
                  </p>
                  <p className="total-price-cart-cont"> Rs {totalPrice} </p>
                </div>
              ) : (
                <div className="cart-mycart-cont">
                  {" "}
                  <p className="cart-mycart"> My Cart </p>{" "}
                </div>
              )}
            </div>
          </NavLink>
        </div>
        <div className="hamberger-container">
        <FaHamburger onClick={handleHamberMenuIcon} style={({ isActive }) => ({
              color: isActive ? "red" : "black",
            })}/>
        </div>
      </div>
      {isHamberActive ? (<div className="hamberger-items-container">
        <NavLink to = "/order/online"> Order Online </NavLink>
        <NavLink to = "/cuisine/favourites"> Favourites </NavLink>
        <NavLink to = "/cart"> Cart </NavLink>
      </div>) : ""}
      <div className="categories-and-favourites-container">
        <div className="categories-container">
          <NavLink
            to="/cuisine/italian"
            className="nav-link-categories"
            style={({ isActive }) => ({
              color: isActive ? "red" : "black",
            })}
          >
            <FaPizzaSlice className="category-image" />
            <h1>Italian</h1>
          </NavLink>
          <NavLink
            to="/cuisine/american"
            className="nav-link-categories"
            style={({ isActive }) => ({
              color: isActive ? "red" : "black",
            })}
          >
            <FaHamburger className="category-image" />
            <h1>American</h1>
          </NavLink>
          <NavLink
            to="/cuisine/thai"
            className="nav-link-categories"
            style={({ isActive }) => ({
              color: isActive ? "red" : "black",
            })}
          >
            <GiNoodles className="category-image" />
            <h1>Thai</h1>
          </NavLink>
          <NavLink
            to="/cuisine/japanese"
            className="nav-link-categories"
            style={({ isActive }) => ({
              color: isActive ? "red" : "black",
            })}
          >
            <GiChopsticks className="category-image" />
            <h1>Japanese</h1>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Categories;
