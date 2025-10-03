import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Auth = () => {
    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            <Outlet></Outlet>
        </div>
    );
};

export default Auth;