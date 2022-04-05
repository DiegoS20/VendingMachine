import { useState } from "react";
import LateralMenuItemsSelected from "../LateralMenuItemsSelected";

import "./index.scss";

export default function LateralMenu() {
  const menuTabs = [
    ["Items selected", <LateralMenuItemsSelected />],
    ["Items dispatched", <LateralMenuItemsSelected />],
  ];
  const [selectedTab, setSelectedTab] = useState(0);

  function handleCloseBtnClick() {}

  return (
    <div className="lateral-menu">
      <div className="close">
        <span className="close-x" onClick={handleCloseBtnClick}>
          X
        </span>
      </div>
      <div className="items">
        {menuTabs.map((tab, i) => (
          <div
            key={i}
            className={`menu-tab${selectedTab === i ? " selected" : ""}`}
            onClick={() => setSelectedTab(i)}
          >
            <div className="menu-tab-title">{tab[0]}</div>
          </div>
        ))}
      </div>
      <div className="content">{menuTabs[selectedTab][1]}</div>
    </div>
  );
}
