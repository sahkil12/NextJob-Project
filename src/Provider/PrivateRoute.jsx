import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../Errorpages/Loader";

const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    console.log(location);
    if(loading){
        return <Loader></Loader>
    }
    if(!user){
        return <Navigate state={location.pathname} to={'/auth/login'}></Navigate>
    }
    else{
        return children;
    }
};

export default PrivateRoute;