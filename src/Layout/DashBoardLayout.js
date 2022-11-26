import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const DashBoardLayout = () => {
  return (
    <div>
      <div className="border-b">
        <Navbar></Navbar>
      </div>

      <div className="drawer drawer-mobile lg:container mx-auto lg:max-w-screen-xl">
        <input id="toggle-dashboard" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side border border-l-0">
          <label htmlFor="toggle-dashboard" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            <li>
              <Link to='/dashboard/myorders'>My Orders</Link>
            </li> 
            <li>
              <Link to='/dashboard/addaproduct'>Add A product</Link>
            </li> 
            <li>
              <Link to='/dashboard/myproducts'>My Products</Link>
            </li> 
            <li>
              <Link to='/dashboard/mybuyers'>My buyers</Link>
            </li> 
            <li>
              <Link to='/dashboard/allsellers'>All Sellers</Link>
            </li> 
            <li>
              <Link to='/dashboard/allbuyers'>All Buyers</Link>
            </li> 
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBoardLayout;
