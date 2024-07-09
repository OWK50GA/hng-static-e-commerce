import CartCard from '../components/CartCard';
import OrderSummary from '../components/OrderSummary';
import { products } from '../Products'

const Cart = () => {
    return ( 
        <div className='cart mb-28'>
            <div className='flex items-center gap-1 text-3xl mb-8 mt-16'>
                <p>&#x2039;</p>
                <h2 className='font-bold'>Cart</h2>
            </div>
            <div className='md:p-4 m-auto'>
                <div className='hidden md:grid grid-cols-4 gap-4 font-semibold'>
                    <p className='col-span-2'>Product</p>
                    <p className='col-span-1'>Quantity</p>
                    <p className='col-span-1'>Subtotal</p>
                </div>
                <div className='cart-card-container grid grid-cols-4 my-8 gap-4 items-center'>
                    <div className='col-span-2 font-semibold'>
                        <CartCard 
                            productImage={products[3].productImage}
                            productName={products[3].productName}
                        />
                    </div>
                    <p className='col-span-1'>+<span className='text-gray-300'>1</span></p>
                    <p className='col-span-1 font-semibold md:font-bold'>&#x20A6;45,000</p>
                </div>
                <hr />
                <div className='cart-card-container grid grid-cols-4 my-8 gap-4 items-center'>
                    <div className='col-span-2 font-semibold'>
                        <CartCard 
                            productImage={products[2].productImage}
                            productName={products[2].productName}
                        />
                    </div>
                    <p className='col-span-1'>+<span className='text-gray-300'>1</span></p>
                    <p className='col-span-1 font-semibold md:font-bold'>&#x20A6;45,000</p>
                </div>
                <hr />
            </div>
            <div className='flex flex-col justify-end items-end mt-16 gap-0'>
                <h2 className='w-fit mx-auto md:mr-32 md:-mb-3 font-semibold'>Order Summary</h2>
                <div className='order-summary-container w-96 self-end flex justify-end font-semibold'>
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
 
export default Cart;