import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Authentication/Login/Login";
import SignUp from "../pages/Authentication/SignUp/SignUp";
import DashboardLayout from "../layout/DashboardLayout";

import PrivateRoute from "./PrivateRoute";
import Spinner from "../components/shared/Spinner/Spinner";
import ManageClasses from "../pages/Dashboard/ManageClasses";
import ManageUsers from "../pages/Dashboard/ManageUsers";
import AddClass from "../pages/Dashboard/AddClass";
import MySelectedClasses from "../pages/Dashboard/MySelectedClasses";
import MyEnrolledClasses from "../pages/Dashboard/MyEnrolledClasses";
import Classes from "../pages/Classes/Classes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/classes", element: <Classes /> },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/1",
    element: <Spinner />,
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      { path: "/dashboard/", element: <ManageClasses /> },
      { path: "/dashboard/Manage-classes", element: <ManageClasses /> },
      { path: "/dashboard/Manage-users", element: <ManageUsers /> },
      { path: "/dashboard/add-class", element: <AddClass /> },
      { path: "/dashboard/my-classes", element: <ManageClasses /> },
      {
        path: "/dashboard/my-selected-classes",
        element: <MySelectedClasses />,
      },
      {
        path: "/dashboard/my-enrolled-classes",
        element: <MyEnrolledClasses />,
      },
    ],
  },
]);

export default router;
