import React, { useContext, useEffect } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  console.log(user);
  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();
  const from = location.pathname;
  console.log(from);
  // todo: loading
  if (loading) return <div>Loading...</div>;
  if (user) return children;

  return useEffect(() => {
    navigate("/login", { state: { from } }, { replace: true });
  }, []);
};

export default PrivateRoute;
