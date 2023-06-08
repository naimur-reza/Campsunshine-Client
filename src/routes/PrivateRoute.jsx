import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();
  const from = location.pathname;
  console.log(from);
  // todo: loading
  if (loading) return <div>Loading...</div>;
  if (user) return children;

  return navigate("/login", { state: { from } }, { replace: true });
};

export default PrivateRoute;
