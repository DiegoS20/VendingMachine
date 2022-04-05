import FoodThumbnail from "../FoodThumbnail";
import "./index.scss";

export default function FoodDispatchedItem({ food }) {
  return (
    <div className="food-dispatched-item">
      <div className="food-img">
        <FoodThumbnail src={food.thumbnail} alt={food.name} />
      </div>
      <div className="food-info">
        <div className="food-name">{food.name}</div>
        <div className="food-completion-time">
          Completion date: {new Date(food.completion_time).toLocaleString()}
        </div>
      </div>
    </div>
  );
}
