import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import MainLayout from "../Layouts/MainLayout";
import About from "../Pages/About";
import Blogs from "../Pages/Blogs";
import Contact from "../Pages/Contact";
import Jobs from "../Pages/Jobs";
import Companies from "../Pages/Companies";
import ErrorPage from "../Errorpages/ErrorPage";
import BlogDetails from "../components/BlogDetails";
import Auth from "../Auth/Auth";
import Login from "../Auth/Login";
import SignUp from "../Auth/SignUp";
import PrivateRoute from './../Provider/PrivateRoute';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        index:true,
        element:<Home></Home>
      },
      {
        path:'about',
        element:<About></About>
      },
      {
        path:'blogs',
        element:<Blogs></Blogs>,
        loader: ()=> fetch('/blogs.json'),
      },
      {
        path:'blog/:id',
        element:<PrivateRoute><BlogDetails></BlogDetails></PrivateRoute> ,
        loader: ()=> fetch('/blogs.json'),
      },
      {
        path:'contact',
        element:<Contact></Contact>
      },
      {
        path:'jobs',
        element:<Jobs></Jobs>
      },
      {
        path:'companies',
        element:<Companies></Companies>
      }
    ]
  },
  {
    path:'/auth',
    element:<Auth></Auth>,
    children:[
      {
        path:'/auth/login',
        element:<Login></Login>,
      },
      {
        path:'/auth/signup',
        element:<SignUp></SignUp>
      }
    ]
  }
]);
