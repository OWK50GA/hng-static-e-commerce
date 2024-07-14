import { useContext } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { ProductsContext } from "../context/ProductsContext";

const ProductDetails = () => {
    const products = useContext(ProductsContext)
    const { id } = useParams()
    const items = products.products
    let product = items.find((item) => item.id == id)
    const { cartItems } = useContext(ShopContext);
    const currentStock = parseInt(product.available_quantity)
    const remainingStock = parseInt(product.available_quantity) - parseInt(cartItems[product.unique_id])
    console.log(currentStock)
    const productPrice = product.current_price[0].NGN[0]

    return ( 
        <div className="mt-20 mb-20">
            <div
                className='product bg-sky-100 rounded-lg flex flex-col justify-between w-fit'
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
                    </p>
                    <div className='flex justify-between items-center'>
                        <p className='font-semibold'>&#x20A6;{product.current_price[0].NGN[0]}</p>
                        <div 
                            className='text-white bg-black rounded-full px-1.5 w-fit cursor-pointer'
                        >
                            +
                        </div>
                    </div>
                </div>
            </div>
            <h2 className="text-2xl font-semibold my-3">
                Product Details for {product.name}
            </h2>
            <ul>
                <li>Price - {productPrice}</li>
                <li>Current Stock - {currentStock}</li>
                <li>Stock after your purchase - {remainingStock}</li>
            </ul>
            <h2 className="font-semibold">
                Description
            </h2>
            <p>
                {product.description}
            </p>
            <Link 
                to={{
                    pathname: '/cart'
                }}
            >
                <p className="font-semibold my-3 cursor-pointer">
                    &#x2039;Back To Cart 
                </p>
            </Link>
        </div>
    );
}
 
export default ProductDetails;