import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { ShopContext } from "../context/ShopContext";

const OrderSummary = ({subtotal, tax, shipping, total}) => {

    const location = useLocation()
    const route = location.pathname;

    const notify = () => toast("Checkout Processing")
    const { clearCart } = useContext(ShopContext)
    
    return ( 
        <div className="order-summary w-8/12 mt-10">
            <ToastContainer />
            <div className="flex justify-between">
                <div className="flex flex-col gap-4">
                    <p>SUBTOTAL: </p>
                    <p>TAX: </p>
                    <p>SHIPPING</p>
                </div>
                <div className="flex flex-col gap-4 justify-end items-end">
                    <p>&#x20A6;{subtotal}</p>
                    <p>{tax}</p>
                    <p>&#x20A6;{shipping}</p>
                </div>
            </div>
            <hr className="border-gray-400"/>
            <div className="flex justify-between mt-4">
                    <p>TOTAL</p>
                    <p>&#x20A6;{total}</p>
            </div>
            {
                route == '/cart'?
                <Link to={{
                    pathname: '/checkout'
                }}>
                    <button className="checkout-btn bg-blue-600 w-full text-white p-2 mt-2 rounded-md">
                        Proceed Checkout
                    </button>
                </Link>
                :
                <Link 
                    to={{
                        pathname: '/'
                    }}
                    onClick={() => {
                        clearCart();
                    }}
                >
                    <button 
                        className="checkout-btn bg-blue-600 w-full text-white p-2 mt-2 rounded-md"
                    >
                        Checkout
                    </button>
                </Link>
            }
            <Link>

            </Link>
            {/* <button className="checkout-btn bg-blue-600 w-full text-white p-2 mt-2 rounded-md">
                {
                    route == '/cart' &&
                    <Link to={{
                    pathname: '/checkout',
                        }}>
                            Proceed Checkout
                    </Link>
                }
                {
                    route == '/checkout' &&
                    <Link to={{
                    pathname: '/',
                        }}>
                            Proceed Checkout
                    </Link>
                }
            </button> */}
        </div>
     );
}
 
export default OrderSummary;