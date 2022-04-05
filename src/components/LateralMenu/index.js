import { useState, useRef } from "react";
import LateralMenuItemsSelected from "../LateralMenuItemsSelected";
import LateralMenuItemsDispatched from "../LateralMenuItemsDispatched";

import "./index.scss";
import menuIcon from "./images/menu.png";

export default function LateralMenu() {
  const menuTabs = ["Items selected", "Items dispatched"];
  const [selectedTab, setSelectedTab] = useState(0);
  const menuRef = useRef();

  function toggleMenu() {
    menuRef.current.classList.toggle("active");
  }

  return (
    <div className="lateral-menu active" ref={menuRef}>
      <div className="open-icon" onClick={toggleMenu}>
        <img src={menuIcon} alt="Menu icon" />
      </div>
      <div className="menu">
        <div className="close">
          <span className="close-x" onClick={toggleMenu}>
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
    </div>
  );
}
