import React, { useContext, useEffect } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Spinner from "../components/shared/Spinner/Spinner";

const PrivateRoute = ({ children }) => {
  const { user, loading, role } = useContext(AuthContext);
  console.log(user);
  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();
  const from = location.pathname;

  useEffect(() => {
    if (role === "admin") {
      return navigate("/dashboard/manage-classes");
    }
    if (role === "instructor") {
      return navigate("/dashboard/my-classes");
    }
    return navigate("/dashboard/my-selected-classes");
  }, [user]);

  if (loading) {
    return <Spinner />;
  }
  if (user) return children;

  return useEffect(() => {
    navigate("/login", { state: { from } }, { replace: true });
  }, []);
};

export default PrivateRoute;
