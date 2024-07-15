import { useContext, useState } from "react";
import CheckoutForm from "../components/CheckoutForm";
import OrderSummary from "../components/OrderSummary";
import { ShopContext } from "../context/ShopContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom'

const Checkout = () => {

    const { getTotalCartAmount } = useContext(ShopContext);
    let totalAmount = getTotalCartAmount();
    const [checkoutFormValid, setCheckoutFormValid] = useState(false)
    const notify = () => toast("Purchase Successful!")

    return ( 
        <div className="mt-12 mb-24">
            <Link to={{
                pathname: '/'
            }}>
                <div className='flex items-center gap-1 text-3xl mb-8 mt-16'>
                    <p>&#x2039;</p>
                    <h2 className='font-bold'>Continue Shopping</h2>
                </div>
            </Link>
            <ToastContainer />
            <div className="flex gap-3 items-center text-lg">
                <div className="bg-white rounded-full w-8 h-8 border border-neutral-500 flex justify-center items-center">
                    <div className="bg-blue-600 rounded-full w-3 h-3"></div>
                </div>
                <label htmlFor="">Add New Address</label>
            </div>
            <div className="checkout-main flex justify-between">
                <div className="checkout-main-1 w-5/12">
                    <CheckoutForm setCheckoutFormValid={setCheckoutFormValid}/>
                </div>
                <div className="checkout-main-2 w-5/12 font-semibold mt-11 mr-12">
                    <h2 className="">Order Summary</h2>
                    <OrderSummary 
                        subtotal={totalAmount}
                        tax={'00.00'}
                        shipping={500}
                        total={totalAmount + 500}
                        checkoutFormValid={checkoutFormValid}
                        notify={notify}
                    />
                </div>
            </div>
        </div>
     );
}
 
export default Checkout;