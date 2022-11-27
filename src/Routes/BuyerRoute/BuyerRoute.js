import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom"; 
import Loader from "../../components/Loader/Loader";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import useBuyer from "../../hooks/useBuyer";

const BuyerRoute = ({ children }) => {
  const { user, loading, logOut } = useContext(AuthContext);
  const [isBuyer, isBuyerLoading] = useBuyer(user?.email);
  const location = useLocation();

  if (loading || isBuyerLoading) {
    return <Loader />;
  }

  if (user && isBuyer) {
    return children;
  }
  logOut()
    .then(() => {})
    .catch(() => {});
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default BuyerRoute;
