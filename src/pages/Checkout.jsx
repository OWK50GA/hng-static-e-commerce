import CheckoutForm from "../components/CheckoutForm";
import OrderSummary from "../components/OrderSummary";

const Checkout = () => {
    return ( 
        <div className="mt-12 mb-24">
            <div className="flex gap-2 items-center">
                <input type="radio" name="" id="" checked className="checked:bg-blue-600 checked:border-white"/>
                <label htmlFor="">Add New Address</label>
            </div>
            <div className="checkout-main flex justify-between">
                <div className="checkout-main-1 w-5/12">
                    <CheckoutForm />
                </div>
                <div className="checkout-main-2 w-5/12">
                    <h2>Order Summary</h2>
                    <OrderSummary 
                        subtotal={'90000'}
                        tax={'00.00'}
                        shipping={'500'}
                        total={'90,500'}
                    />
                </div>
            </div>
        </div>
     );
}
 
export default Checkout;