import React from "react";
import "./Cart.css";

const Cart = ({ cart, isOpen, toggleCart }) => {
  return (
    <div className={`cart ${isOpen ? "open" : ""}`}>
      <button onClick={toggleCart}>
        Carrinho ({cart.length})
      </button>
      {isOpen && (
        <ul>
          {cart.map((car, index) => (
            <li key={index}>
              <h3>{car.brand} {car.model}</h3>
              <p>Preço: ${car.price}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
