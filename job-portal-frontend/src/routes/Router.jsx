import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import AuthLayout from "../layouts/AuthLayout";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Jobs from "../pages/Jobs";
import Employers from "../pages/Employers";
import Contact from "../pages/Contact";
import Blogs from "../pages/Blogs";
import JobDetails from "../pages/JobDetails";
import PrivateRoute from "./PrivateRoute";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path:'/jobs',
        element:<Jobs/>
      },
      {
        path:'/employers',
        element:<Employers/>
      },
      {
        path:'/blogs',
        element:<Blogs/>
      },
      {
        path:'/contact',
        element:<Contact/>
      },
      {
        path:'/job/:id',
        element:<PrivateRoute><JobDetails/></PrivateRoute>,
        loader:({params})=>fetch(`http://localhost:3000/job/${params.id}`)
      }
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);

export default Router;
