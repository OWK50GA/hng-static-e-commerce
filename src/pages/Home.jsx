import { BsCart2 } from "react-icons/bs";
import NavBar from "../components/NavBar";
import ProductsDisplay from "../components/ProductsDisplay";
import { useLocation } from "react-router-dom";
import product5 from '../assets/headphones-with-minimalist-monochrome-background-cropped-removebg-preview.png'

const Home = () => {

    const location = useLocation();
    const route = location.pathname;

    return ( 
        <div className="home">
            
            {/* <NavBar /> */}

            <div className="home-sect-2 my-28">
                <div className="shadow-explore text-sm md:text-base bg-sky-100 w-fit py-3 px-4 rounded-3xl">
                    <p className="shadow-explore-text">Explore Our Collection of Gadgets</p>
                </div>
                <div className="home-welcome flex justify-start mt-5">
                    <div className="home-welcome-sect-1">
                        <p className="large-text text-6xl font-bold leading-relaxed">
                            the Future of
                        </p>
                        <p className="large-text text-6xl text-indigo-600 font-bold leading-relaxed -mt-3">
                            Technology
                        </p>
                        <p className="large-text text-6xl text-indigo-600 font-bold leading-relaxed -mt-3">
                            Today
                        </p>
                        <p className="home-welcome-sect-1-text mt-2 text-sm font-semibold">
                            Stay ahead with the latest in tech innovation. Whether you're looking
                            for cutting-edge smartphones, powerful accessories, or the newest 
                            gadgets, we have it all.
                        </p>
                        <button 
                            className="gotoShop items-center mt-3 py-4 px-8 bg-indigo-500 flex text-white justify-between gap-3"
                        >
                            <BsCart2/>
                            <a className="font-semibold text-sm" href="#shop">Shop Now</a>
                        </button>
                    </div>
                    <div className="home-welcome-sect-2 flex items-start -mt-16 -ml-16">
                        <img 
                        src={product5} 
                        className="headphone-img" 
                        alt=""
                        />
                    </div>
                </div>

                <ProductsDisplay />
            </div>
        </div>
     );
}
 
export default Home;