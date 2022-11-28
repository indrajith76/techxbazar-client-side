import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation(); 
  
  if (loading) {
    return <Loader></Loader>;
  }

  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ form: location }} replace></Navigate>;
};

export default PrivateRoute;
