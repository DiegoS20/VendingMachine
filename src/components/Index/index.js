import React, { useState, useEffect } from "react";

import Header from "../Header";

import getProducts from "../../services/getProducts";

import "./index.scss";
import FoodCard from "../FoodCard";

export default function Index() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((res) => {
      setProducts(res.data);
    });
  }, []);

  return (
    <div className="vending-machine">
      <Header />
      <h1 className="main-title">Bienvenido usuario!</h1>
      <div className="cards">
        {products.map((food, i) => (
          <FoodCard
            key={i}
            id={food.id}
            name={food.name}
            preparation_time={food.preparation_time}
            thumbnail={food.thumbnail}
          />
        ))}
      </div>
    </div>
  );
}
