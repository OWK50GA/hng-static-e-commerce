import { useContext, useState } from "react";
import CheckoutForm from "../components/CheckoutForm";
import OrderSummary from "../components/OrderSummary";
import { ShopContext } from "../context/ShopContext";

const Checkout = () => {

    const { getTotalCartAmount } = useContext(ShopContext);
    let totalAmount = getTotalCartAmount();
    const [checkoutFormValid, setCheckoutFormValid] = useState(false)

    return ( 
        <div className="mt-12 mb-24">
            <div className="flex gap-3 items-center text-lg">
                {/* <input type="radio" name="" id="" checked className="checked:bg-blue-600 checked:border-white"/> */}
                <div className="bg-white rounded-full w-8 h-8 border border-neutral-500 flex justify-center items-center">
                    <div className="bg-blue-600 rounded-full w-3 h-3"></div>
                </div>
                <label htmlFor="">Add New Address</label>
            </div>
            <div className="checkout-main flex justify-between">
                <div className="checkout-main-1 w-5/12">
                    <CheckoutForm checkoutFormValid={checkoutFormValid} setCheckoutFormValid={setCheckoutFormValid}/>
                </div>
                <div className="checkout-main-2 w-5/12 font-semibold mt-11 mr-12">
                    <h2 className="">Order Summary</h2>
                    <OrderSummary 
                        subtotal={totalAmount}
                        tax={'00.00'}
                        shipping={500}
                        total={totalAmount + 500}
                        checkoutFormValid={checkoutFormValid}
                    />
                </div>
            </div>
        </div>
     );
}
 
export default Checkout;