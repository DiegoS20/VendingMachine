import { useContext } from "react";

import FoodDispatchedItem from "../FoodDispatchedItem";

import FoodContext from "../Index/FoodContext";

export default function LateralMenuItemsDispatched({ disable }) {
  const { foodDispatched } = useContext(FoodContext);

  return (
    <div
      className="lateral-menu-items-dispatched"
      style={{
        width: "100%",
        height: "100%",
        display: disable ? "none" : "unset",
      }}
    >
      {foodDispatched.reverse().map((food, i) => (
        <FoodDispatchedItem key={i} food={food} />
      ))}
    </div>
  );
}
