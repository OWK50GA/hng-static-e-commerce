import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

const Product = (props) => {

    const product = props.data
    const uniqueId = product.unique_id;
    const { addToCart, cartItems } = useContext(ShopContext)
    
    return ( 
        <div
            className='product bg-sky-100 rounded-lg flex flex-col justify-between'
            key={product.unique_id}
        >
            <div className='product-img-div w-80 h-80 flex justify-center items-center md:block md:w-full md:h-auto
            lg:flex lg:w-80 lg:h-80
            '>
                <img src={`https://api.timbu.cloud/images/${product.photos[0]?.url}`} alt="" className='max-w-full max-h-full'/>
            </div>
            <div className='px-6 py-3 bg-white rounded-t-3xl mt-2'>
                <p className='text-yellow-400 tracking-tighter'> 
                    &#x2605; &#x2605; &#x2605; &#x2605; &#x2605;
                </p>
                <p className='text-xs font-semibold'>
                    {product.name}
                    {cartItems[uniqueId] > 0 && <>({cartItems[uniqueId]})</>}
                </p>
                <div className='flex justify-between items-center'>
                    <p className='font-semibold'>&#x20A6;{product.current_price[0].NGN[0]}</p>
                    <div 
                        className='text-white bg-black rounded-full px-1.5 w-fit cursor-pointer'
                        onClick={() => addToCart(product.unique_id)}
                    >
                        +
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Product;