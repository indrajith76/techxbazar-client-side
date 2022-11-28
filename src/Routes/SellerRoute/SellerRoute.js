import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom"; 
import Loader from "../../components/Loader/Loader";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import useSeller from "../../hooks/useSeller";

const SellerRoute = ({ children }) => {
  const { user, loading, logOut } = useContext(AuthContext);
  const [isSeller, isSellerLoading] = useSeller(user?.email);
  const location = useLocation();  
  
if (loading || isSellerLoading) { 
  return <Loader />;
} 

  if (user && isSeller) {
    return children;
  }
  logOut()
    .then(() => {})
    .catch(() => {});
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default SellerRoute;
