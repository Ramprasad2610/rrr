// src/App.js
import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [cart, setCart] = useState([]);
  const [isSignUp, setIsSignUp] = useState(false);  // New state to toggle between login/signup

  const restaurants = [
    { id: 1, name: 'Italian Bistro', rating: 4.5, cuisine: 'Italian', emoji: '🍝' },
    { id: 2, name: 'Sushi World', rating: 4.8, cuisine: 'Japanese', emoji: '🍣' },
    { id: 3, name: 'Burger Shack', rating: 4.2, cuisine: 'American', emoji: '🍔' },
    { id: 4, name: 'Mexican Fiesta', rating: 4.7, cuisine: 'Mexican', emoji: '🌮' },
  ];

  const menuItems = [
    { id: 1, name: 'Pizza Margherita', price: 12, emoji: '🍕' },
    { id: 2, name: 'Sushi Rolls', price: 15, emoji: '🍣' },
    { id: 3, name: 'Pasta Carbonara', price: 14, emoji: '🍝' },
    { id: 4, name: 'Ramen', price: 13, emoji: '🍜' },
    { id: 5, name: 'Burger', price: 10, emoji: '🍔' },
    { id: 6, name: 'Taco', price: 8, emoji: '🌮' },
    { id: 7, name: 'Salad', price: 9, emoji: '🥗' },
    { id: 8, name: 'Hot Dog', price: 7, emoji: '🌭' },
    { id: 9, name: 'Ice Cream', price: 5, emoji: '🍦' },
    { id: 10, name: 'Spaghetti', price: 13, emoji: '🍝' },
  ];

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    console.log("User Signed Up!");
    setIsSignUp(false); // Hide sign-up form after submission
  };

  return (
    <div className="app">
      <header className="header">
        <div className="logo">Food Delivery</div>
        <nav className="nav">
          <a href="/" className="nav-link">Home</a>
          <a href="#" className="nav-link" onClick={() => setIsSignUp(!isSignUp)}>
            {isSignUp ? 'Cancel' : 'Sign Up'}
          </a>
          <a href="/checkout" className="nav-link">Checkout</a>
          <a href="/cart" className="nav-link">Cart ({cart.length})</a>
        </nav>
      </header>

      {isSignUp && (
        <section className="sign-up-section">
          <h2>Sign Up</h2>
          <form onSubmit={handleSignUp} className="sign-up-form">
            <div className="input-group">
              <label htmlFor="username">Username:</label>
              <input type="text" id="username" required />
            </div>
            <div className="input-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" required />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" required />
            </div>
            <button type="submit" className="sign-up-btn">Sign Up</button>
          </form>
        </section>
      )}

      <section className="restaurant-list">
        {restaurants.map((restaurant) => (
          <div className="restaurant-card" key={restaurant.id}>
            <div className="emoji">{restaurant.emoji}</div>
            <div className="restaurant-info">
              <h3>{restaurant.name}</h3>
              <p>{restaurant.cuisine}</p>
              <span>{restaurant.rating} ★</span>
            </div>
          </div>
        ))}
      </section>

      <section className="menu-list">
        {menuItems.map((item) => (
          <div className="menu-item-card" key={item.id}>
            <div className="emoji">{item.emoji}</div>
            <div className="menu-item-info">
              <h3>{item.name}</h3>
              <p>${item.price}</p>
              <button onClick={() => addToCart(item)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </section>

      {cart.length > 0 && (
        <section className="cart-section">
          <div className="cart">
            <h2 className="cart-title">Cart</h2>
            <ul className="cart-list">
              {cart.map((item, index) => (
                <li key={index} className="cart-item">
                  <div className="cart-item-info">
                    <h4>{item.name}</h4>
                    <span>${item.price}</span>
                  </div>
                  <button onClick={() => removeFromCart(index)} className="remove-item-btn">
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <div className="cart-total">
              <h3 className="cart-total-amount">
                Total: ${cart.reduce((total, item) => total + item.price, 0)}
              </h3>
              <button className="checkout-btn">Proceed to Checkout</button>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default App;