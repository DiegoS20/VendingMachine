import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

import Header from "../Header";
import LateralMenu from "../LateralMenu";
import Loading from "../Loading";
import Error from "../Error";

import getProducts from "../../services/getProducts";

import "./index.scss";
import FoodCard from "../FoodCard";

import FoodContext from "./FoodContext";

export default function Index() {
  const [products, setProducts] = useState(null);
  const [foodQueue, setFoodQueue] = useState([]);
  const [foodDispatched, setFoodDispatched] = useState([]);
  const [lastDispatched, setLastDispatched] = useState(null);

  useEffect(() => {
    getProducts()
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        setProducts(false);
      });
  }, []);

  useEffect(() => {
    if (foodDispatched.length) {
      const item = foodDispatched[foodDispatched.length - 1];
      const foodQueueSlice = foodQueue.slice();
      const itemIndex = foodQueue.findIndex((food) => food.id === item.id);
      foodQueueSlice.splice(itemIndex, 1);
      setFoodQueue(foodQueueSlice);
    }
  }, [foodDispatched]);

  useEffect(() => {
    if (lastDispatched !== null) {
      const dispatchedSlice = foodDispatched.slice();
      dispatchedSlice.push(lastDispatched);
      setFoodDispatched(dispatchedSlice);

      toast.success(`Your ${lastDispatched.name} is ready!`, {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
      });
    }
  }, [lastDispatched]);

  function handleFoodPrepare(food) {
    const foodQSlice = foodQueue.slice();
    let foodSlice = { ...food };
    let date = new Date();
    foodSlice.completion_time =
      date.getTime() + foodSlice.preparation_time * 1000;
    foodQSlice.push(foodSlice);
    setFoodQueue(foodQSlice);
    toast.info(`Your ${food.name} is being prepared!`, {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      progress: undefined,
    });
  }

  return products === null ? (
    <Loading />
  ) : products === false ? (
    <Error />
  ) : (
    <div className="vending-machine">
      <FoodContext.Provider
        value={{
          addToDispatched: setLastDispatched,
          foodQueue,
          foodDispatched,
        }}
      >
        <LateralMenu />
      </FoodContext.Provider>
      <Header />
      <h1 className="main-title">Welcome user!</h1>
      <div className="cards">
        {products.map((food, i) => (
          <FoodCard key={i} food={food} onPrepare={handleFoodPrepare} />
        ))}
      </div>
    </div>
  );
}
