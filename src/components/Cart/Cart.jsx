import React, { useContext } from 'react';
import './Cart.css';
import { RecipeContext } from '../../Context/RecipeContext';
import CartItemCard from '../CartItemCard/CartItemCard';

const Cart = () => {
  const { cartItems } = useContext(RecipeContext);

  const getTotalCartPrice = () => {
    return cartItems.reduce((total, item) => total + 200 * item.quantity, 0);
  };

  return (
    <div className="cart-container">
      <h1 className="cart-heading">Your Cart</h1>
      {cartItems.length > 0 ? (
        <>
          {cartItems.map((item) => (
            <CartItemCard
              key={item.id}
              id={item.id}
              title={item.title}
              imageUrl={item.imageUrl}
              quantity={item.quantity}
            />
          ))}
          <p className="cart-total-price">Total Cart Price: {getTotalCartPrice()} </p>
        </>
      ) : (
        <p className="empty-cart-message">Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
