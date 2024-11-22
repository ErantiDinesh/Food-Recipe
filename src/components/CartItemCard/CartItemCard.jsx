import React, { useContext } from "react";
import "./CartItemCard.css";
import { RecipeContext } from "../../Context/RecipeContext";

const CartItemCard = (props) => {
  const { id, title, imageUrl, quantity } = props;
  const { itemQuantityIncrement, itemQuantityDecrement, removeFromCart } =
    useContext(RecipeContext);

  const clickedIncreaseCount = () => {
    const item = {
      id,
      title,
      imageUrl,
      quantity,
    };
    itemQuantityIncrement(item);
  };

  const clickedDecreaseCount = () => {
    if (quantity > 1) {
      const item = {
        id,
        title,
        imageUrl,
        quantity,
      };
      itemQuantityDecrement(item);
    } else {
      const item = {
        id,
        title,
        imageUrl,
        quantity,
      };
      removeFromCart(item);
    }
  };

  return (
    <div className="cart-item-container">
      <div className="cart-item-card">
        <div className="cart-item-imageContainer">
          <img src={imageUrl} alt={title} className="cart-item-image" />
        </div>
        <div className="cart-item-title-container">
          <p className="cart-item-title">{title}</p>
        </div>
        <div className="cart-item-quantity-container">
          <button onClick={clickedDecreaseCount}>-</button>
          <p>{quantity}</p>
          <button onClick={clickedIncreaseCount}>+</button>
        </div>
        <div className="cart-item-price-container">
          <p> {200 * quantity} </p>
        </div>
      </div>
    </div>
  );
};

export default CartItemCard;
