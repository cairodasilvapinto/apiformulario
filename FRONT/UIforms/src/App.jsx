import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CarSellerStore from "./components/CarSellerStore.jsx";
import CarDetails from "./components/CarDetails";

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={CarSellerStore} />
      <Route path="/car/:id" component={CarDetails} />
    </Router>
  );
};

export default App;
