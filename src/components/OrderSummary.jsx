import { Link } from "react-router-dom";

const OrderSummary = ({subtotal, tax, shipping, total}) => {
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
            <button className="checkout-btn bg-blue-600 w-full text-white p-2 mt-2">
                <Link to={{
                    pathname: '/checkout',
                    state: {
                        // optional props
                    }
                }}>
                    Proceed Checkout
                </Link>
            </button>
        </div>
     );
}
 
export default OrderSummary;