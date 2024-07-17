import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const OrderSummary = ({subtotal, tax, shipping, total, checkoutFormValid, notify}) => {

    const location = useLocation()
    const route = location.pathname;
    const { clearCart } = useContext(ShopContext)
    const navigate = useNavigate();

    const processPayment = () => {
        setTimeout(() => {
            clearCart();
            navigate('/')
        }, 4000)
    }
    
    return ( 
        <div className="order-summary w-8/12 mt-10">
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
                <button 
                    className={!checkoutFormValid?
                         "checkout-btn bg-gray-400 w-full text-white p-2 mt-2 rounded-md"
                         :
                         "checkout-btn bg-blue-600 w-full text-white p-2 mt-2 rounded-md"
                        }
                    disabled={!checkoutFormValid}
                    onClick={() => {
                        notify();
                        processPayment();
                    }}
                >
                    Checkout
                </button>
            
            }
        </div>
     );
}
 
export default OrderSummary;