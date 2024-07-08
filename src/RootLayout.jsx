import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

const RootLayout = () => {
    return ( 
        <div className="w-4/5 mx-auto mt-7">
            {/* <NavBar /> */}

            <Outlet />

            <Footer />
        </div>
     );
}
 
export default RootLayout;