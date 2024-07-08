import CartCard from '../components/CartCard';
import OrderSummary from '../components/OrderSummary';
import { products } from '../Products'

const Cart = () => {
    return ( 
        <div className='cart mb-28'>
            <h2 className='text-3xl font-bold mb-8 mt-16'>Cart</h2>
            <div className='p-4 m-auto'>
                <div className='grid grid-cols-4 gap-4'>
                    <p className='col-span-2'>Product</p>
                    <p className='col-span-1'>Quantity</p>
                    <p className='col-span-1'>Subtotal</p>
                </div>
                <div className='grid grid-cols-4 my-8 gap-4 items-center'>
                    <div className='col-span-2'>
                        <CartCard 
                            productImage={products[3].productImage}
                            productName={products[3].productName}
                        />
                    </div>
                    <p className='col-span-1'>+1</p>
                    <p className='col-span-1'>N45,000</p>
                </div>
                <hr />
                <div className='grid grid-cols-4 my-8 gap-4 items-center'>
                    <div className='col-span-2'>
                        <CartCard 
                            productImage={products[2].productImage}
                            productName={products[2].productName}
                        />
                    </div>
                    <p className='col-span-1'>+1</p>
                    <p className='col-span-1'>N45,000</p>
                </div>
                <hr />
            </div>
            <div className='flex flex-col justify-end items-end mt-16 gap-0'>
                <h2 className='mr-32 -mb-3'>Order Summary</h2>
                <div className='order-summary-container w-96 self-end flex justify-end'>
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