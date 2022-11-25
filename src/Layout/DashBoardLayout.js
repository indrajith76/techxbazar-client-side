import React from "react";
import Navbar from "../components/Navbar/Navbar";

const DashBoardLayout = () => {
  return (
    <div>
      <div className="border-b">
        <Navbar></Navbar>
      </div>

      <div className="drawer drawer-mobile">
        <input id="toggle-dashboard" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* content here */}
        </div>
        <div className="drawer-side border-r">
          <label htmlFor="toggle-dashboard" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBoardLayout;
