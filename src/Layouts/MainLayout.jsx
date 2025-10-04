import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
    return (
        <div className="scroll-smooth">
           <header className="sticky top-0 z-50 shadow-md">
             <Navbar></Navbar>
           </header>
           <main className="min-h-[calc(100vh-527px)]">
             <Outlet></Outlet>
           </main>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;