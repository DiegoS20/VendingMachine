import { useState } from "react";
import LateralMenuItemsSelected from "../LateralMenuItemsSelected";
import LateralMenuItemsDispatched from "../LateralMenuItemsDispatched";

import "./index.scss";

export default function LateralMenu() {
  const menuTabs = ["Items selected", "Items dispatched"];
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
            <div className="menu-tab-title">{tab}</div>
          </div>
        ))}
      </div>
      <div className="content">
        <LateralMenuItemsSelected disable={selectedTab === 1} />
        <LateralMenuItemsDispatched disable={selectedTab === 0} />
      </div>
    </div>
  );
}
