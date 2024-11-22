import React, { useContext, useEffect, useState } from "react";
import "./OnlineItemCard.css";
import { RecipeContext } from "../../Context/RecipeContext";

const OnlineItemCard = (props) => {

    const {cartItems} = useContext(RecipeContext)

  const {
    addToCart,
    removeFromCart,
    itemQuantityIncrement,
    itemQuantityDecrement,
  } = useContext(RecipeContext);

  const { id, title, imageUrl } = props;
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    const isItemPresent = cartItems.find((product) => (product.id === id))
    if (isItemPresent) {
        setQuantity(isItemPresent.quantity)
    }
  }, [quantity])

  const clickedAddButton = () => {
    setQuantity(1);
    const newItem = {
      id: id,
      title: title,
      imageUrl: imageUrl,
      quantity: 1,
    };
    addToCart(newItem);
  };

  const handleIncrementButton = () => {
    setQuantity(quantity + 1);
    const Item = {
      id: id,
      title: title,
      imageUrl: imageUrl,
      quantity: quantity,
    };
    itemQuantityIncrement(Item);
  };

  const handleDecrementButton = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      const Item = {
        id: id,
        title: title,
        imageUrl: imageUrl,
        quantity: quantity,
      };
      itemQuantityDecrement(Item);
    } else {
      setQuantity(0);
      const newItem = {
        id: id,
        title: title,
        imageUrl: imageUrl,
        quantity: quantity,
      };
      removeFromCart(newItem);
    }
  };

  return (
    <div className="online-item-card-container">
      <img src={imageUrl} alt={title} className="online-item-card-image" />
      <div className="online-item-card-title-container">
        <p className="online-item-card-title">{title}</p>
      </div>
      <div className="online-item-button-and-price-container">
        <p className="online-item-price"> Rs: 200 </p>
        {quantity === 0 ? (
          <button
            className="online-item-card-add-button"
            onClick={clickedAddButton}
          >
            Add
          </button>
        ) : (
          <div className="online-item-card-quantity-container">
            <button onClick={handleDecrementButton}>-</button>
            <p>{quantity}</p>
            <button onClick={handleIncrementButton}>+</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default OnlineItemCard;
