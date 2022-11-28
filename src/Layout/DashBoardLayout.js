import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import Loader from "../components/Loader/Loader";
import Navbar from "../components/Navbar/Navbar";
import { AuthContext } from "../contexts/AuthProvider/AuthProvider";
import useAdmin from "../hooks/useAdmin";
import useBuyer from "../hooks/useBuyer";
import useSeller from "../hooks/useSeller";

const DashBoardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin, isAdminLoading] = useAdmin(user?.email);
  const [isSeller, isSellerLoading] = useSeller(user?.email);
  const [isBuyer, isBuyerLoading] = useBuyer(user?.email);

  if (isAdminLoading || isSellerLoading || isBuyerLoading) {
    return <Loader></Loader>;
  }

  return (
    <div>
      <div className="border-b">
        <Navbar></Navbar>
      </div>

      <div className="drawer drawer-mobile lg:container mx-auto lg:max-w-screen-xl">
        <input
          id="toggle-dashboard"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side border border-l-0">
          <label htmlFor="toggle-dashboard" className="drawer-overlay"></label>
          <ul className="menu p-4 bg-base-100 lg:bg-none w-80 text-base-content">
            {isBuyer && (
              <li>
                <Link to="/dashboard/myorders">My Orders</Link>
              </li>
            )}
            {isSeller && (
              <>
                <li>
                  <Link to="/dashboard/addaproduct">Add A product</Link>
                </li>
                <li>
                  <Link to="/dashboard/myproducts">My Products</Link>
                </li>
                <li>
                  <Link to="/dashboard/mybuyers">My Buyers</Link>
                </li>
              </>
            )}
            {isAdmin && (
              <>
                <li>
                  <Link to="/dashboard/allsellers">All Sellers</Link>
                </li>

                <li>
                  <Link to="/dashboard/allbuyers">All Buyers</Link>
                </li>

                <li>
                  <Link to="/dashboard/allusers">All Users</Link>
                </li>

                <li>
                  <Link to="/dashboard/reportedItems">Reported Items</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBoardLayout;
