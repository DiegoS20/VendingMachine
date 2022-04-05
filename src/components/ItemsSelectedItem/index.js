import { useState, useEffect, useContext } from "react";
import FoodThumbnail from "../FoodThumbnail";

import getStringTime from "../../helpers/getStringTime";

import "./index.scss";

import FoodContext from "../Index/FoodContext";

export default function ItemsSelectedItem({ item }) {
  const [time, setTime] = useState(item.preparation_time);
  const { addToDispatched } = useContext(FoodContext);

  useEffect(() => {
    subtractTime();
    setInterval(subtractTime, 1000);
  }, []);

  function subtractTime() {
    const now = new Date();
    const finalDate = new Date(item.completion_time);
    const difference = (finalDate - now) / 1000;
    if (difference < 0) addToDispatched(item);
    else setTime(Math.floor(difference));
  }

  return (
    <div className="item">
      <div className="thumbnail">
        <FoodThumbnail src={item.thumbnail} alt={item.name} title={item.name} />
      </div>
      <div className="info">
        <div className="food-name">{item.name}</div>
        <div className="time-ready">
          Time to be ready: {getStringTime(time)}
        </div>
      </div>
    </div>
  );
}
