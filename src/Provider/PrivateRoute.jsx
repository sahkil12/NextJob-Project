import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate } from "react-router-dom";
import Loader from "../Errorpages/Loader";

const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext)
    console.log(user);
    if(loading){
        return <Loader></Loader>
    }
    if(!user){
        return <Navigate to={'/auth/login'}></Navigate>
    }
    else{
        return children;
    }
};

export default PrivateRoute;