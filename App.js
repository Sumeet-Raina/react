import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./logo.png";
import salad from "./salad.jpg";
import "./index.css";
import data from "./mockResMenu.json";

console.log(data.data.cards[0].card.card.info.name);

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img src={logo} className="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard />
      </div>
    </div>
  );
};

const RestaurantCard = () => {
  return (
    <div className="res-card">
      <img src={salad} className="res-logo" />
      <h3>Meghna foods</h3>
      <h4>Biryani, North Indian, Asian</h4>
      <h4>4.4 stars</h4>
      <h4>38 minutes</h4>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
