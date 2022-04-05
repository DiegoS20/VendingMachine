import { useContext } from "react";
import ItemsSelectedItem from "../ItemsSelectedItem";

import "./index.scss";

import FoodContext from "../Index/FoodContext";

export default function LateralMenuItemsSelected() {
  const { foodQueue } = useContext(FoodContext);

  return (
    <div className="lateral-menu-items-selected">
      {foodQueue.map((item, i) => (
        <ItemsSelectedItem key={i} item={item} />
      ))}
    </div>
  );
}
