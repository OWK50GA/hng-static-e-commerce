import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";

const HomeLayout = () => {
    return ( 
    <div className="homelayout">
        <NavBar />

        <Outlet />
    </div> 
    );
}
 
export default HomeLayout;