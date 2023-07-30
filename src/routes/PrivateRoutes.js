import React, { useContext } from "react";
import { AuthContext } from "../context/UserContext";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-lg loading-spinner text-primary"></span>
      </div>
    );
  }

  if (user?.uid) return children;
  else
    return <Navigate to="/login" state={{ from: location }} replace={true} />;
};

export default PrivateRoutes;
