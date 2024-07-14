import { Outlet, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import { useEffect } from "react";

const RootLayout = () => {

    const location = useLocation();
    const route = location.pathname;

    return ( 
        <div className={route == "/"? "blue-root h-full -mt-8 py-8" : "root"}>
            <div className="w-4/5 mx-auto mt-7">
            {/* <NavBar /> */}

            <Outlet />

            <Footer />
            </div>
        </div>
     );
}
 
export default RootLayout;