import FoodThumbnail from "../FoodThumbnail";

import getStringTime from "../../helpers/getStringTime";

import "./index.scss";

export default function FoodCard({ food, onPrepare }) {
  const { name, preparation_time, thumbnail } = food;

  return (
    <div className="food-card">
      <div className="thumbnail">
        <FoodThumbnail src={thumbnail} alt={name} title={name} />
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
