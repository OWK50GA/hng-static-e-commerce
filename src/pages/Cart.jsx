import { useContext } from 'react';
import CartCard from '../components/CartCard';
import OrderSummary from '../components/OrderSummary';
// import { products } from '../Products'
import { ShopContext } from '../context/ShopContext';
import { ProductsContext } from '../context/ProductsContext';
import { Link } from 'react-router-dom';

const Cart = () => {
    const {addToCart, removeFromCart, cartItems, updateCartItemCount, getTotalCartAmount, removeItem, clearCart} = useContext(ShopContext)
    const {products} = useContext(ProductsContext);
    const totalAmount = getTotalCartAmount();

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
                    {
                        products.map((product) => {
                            if (cartItems[product.unique_id] !== 0) {
                                let productImage = `https://api.timbu.cloud/images/${product.photos[0]?.url}`
                                let productName = product.name
                                let uniqueId = product.unique_id;
                                let productPrice = product.current_price[0].NGN[0]
                                return (
                                    <div className='flex flex-col'>
                                        <div className='cart-card-container grid grid-cols-4 my-8 gap-4 items-center'>
                                        <div className='col-span-2 font-semibold'>
                                        <Link to={`${product.id}`}>
                                            <CartCard 
                                                productImage={productImage}
                                                uniqueId={product.unique_id}
                                                productName={productName}
                                                removeItem={removeItem}
                                            />
                                        </Link>
                                        </div>
                                        <p className='cart-btns col-span-1 flex text-xs md:gap-1 gap-0 items-center md:text-base'>
                                            <span className="py-2 border border-black cursor-pointer"
                                                onClick={() => addToCart(product.unique_id)}
                                            >
                                                +
                                            </span>
                                            {/* <span className='px-3 py-2 border border-black'>
                                                {cartItems[product.unique_id]}
                                            </span> */}
                                            <input 
                                                type="text" 
                                                value={cartItems[uniqueId]}
                                                className="w-9 h-9 text=xs"
                                                onChange={(e) => updateCartItemCount(Number(e.target.value), uniqueId)}
                                            />
                                            <span className="py-2 border border-black cursor-pointer"
                                                onClick={() => removeFromCart(product.unique_id)}
                                            >
                                                -
                                            </span>
                                        </p>
                                        <p className='col-span-1 font-semibold md:font-bold'>&#x20A6;{cartItems[uniqueId] * productPrice}</p>
                                        </div>
                                        <hr />
                                    </div>
                                )
                            }
                        })
                    }
                    {
                        totalAmount > 0?
                        <button 
                            className="checkout-btn bg-blue-600 w-full text-white p-2 mt-2 rounded-md"
                            onClick={() => clearCart()}
                        >
                            Clear Cart
                        </button>
                        :
                        null
                    }
                    
            </div>
            {
                totalAmount > 0?
                <div className='flex flex-col justify-end items-end mt-16 gap-0'>
                    <h2 className='w-fit mx-auto md:mr-32 md:-mb-3 font-semibold'>Order Summary</h2>
                    <div className='order-summary-container w-96 self-end flex justify-end font-semibold'>
                        <OrderSummary 
                            subtotal={totalAmount}
                            tax={'00.00'}
                            shipping={2000}
                            total={totalAmount + 2000}
                        />
                    </div>
                </div>
                :
                <h1 className="text-3xl" >Your Cart is Empty</h1>
            }
            
        </div>
     );
}
 
export default Cart;