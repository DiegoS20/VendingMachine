import getStringTime from "../../helpers/getStringTime";

import "./index.scss";
import defaultImg from "./images/default.jpg";

export default function FoodCard({ food, onPrepare }) {
  const { name, preparation_time, thumbnail } = food;

  function handleImageError(e) {
    e.target.src = defaultImg;
    e.target.title += " - image could not load";
  }

  return (
    <div className="food-card">
      <div className="thumbnail">
        <img
          src={thumbnail}
          alt={name}
          onError={handleImageError}
          title={name}
        />
      </div>
      <div className="info">
        <h3>{name}</h3>
        <span className="preparation-time">
          Preparation time: {getStringTime(preparation_time)}
        </span>
      </div>
      <div
        className="prepare-btn"
        onClick={() =>
          typeof onPrepare == "function" ? onPrepare(food) : null
        }
      >
        Prepare
      </div>
    </div>
  );
}
