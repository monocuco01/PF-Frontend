import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./Cart.css";
import axios from 'axios'
import { create } from "../../config";

import { CartContext } from "./CartContext";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);

  const calculateTotal = () => {
    const total = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    return total.toFixed(2);
  };

  const saveCartToLocalStorage = () => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };

  const handlePayment = async () => {
    try {

      const itemsForPayment = cartItems.map(item => ({
        title: item.title,
        image: item.image,
        quantity: item.quantity,
        currency_id: 'USD', 
        unit_price: parseFloat(item.price),
      }));

      const payload = {
        items: itemsForPayment,
       
      };
      console.log(payload);

      
      const response = await axios.post(create, payload); 
      const initPoint = response.data.init_point;

      // Redirect the user to the payment page
      window.location.href = initPoint;
    } catch (error) {
      console.error("Error creating order:", error);
    }
  };

  return (
    <div className="cart-container">
      <h2 className="cart-title">Carrito de Compras</h2>
      <ul className="cart-list">
        {cartItems.map((item) => (
          <li key={item.id} className="cart-item">
            <div className="cart-item-info">
              <img src={item.image} alt={item.title} />
              <span className="cart-item-name">{item.title}</span>
              <span className="cart-item-quantity">
                Cantidad: {item.quantity}
              </span>
            </div>
            <span className="cart-item-price">
              ${(item.price * item.quantity).toFixed(2)}
            </span>
            <div className="quantity-buttons">
              <button
                className="cart-quantity-button"
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
              >
                +
              </button>
              <button
                className="cart-quantity-button"
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
              >
                -
              </button>
            </div>
            <button
              className="cart-remove-button"
              onClick={() => removeFromCart(item.id)}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
      <div className="cart-total">
        <span className="cart-total-label">Total:</span>
        <span className="cart-total-amount">${calculateTotal()}</span>
      </div>

      <Link to="/store" className="regresar" onClick={saveCartToLocalStorage}>
        Regresar
      </Link>
      <div className="payment-form">
        <button className="pay-button" onClick={handlePayment}>Pagar</button>
      </div>
    </div>
  );
};

export default Cart;
