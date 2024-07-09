import { products } from '../Products'
import { newArrivals } from '../Products'

const ProductsDisplay = () => {
    return ( 
        <div className='products mt-24' id='shop'>
            <div>
                <h2 className='text-4xl font-bold text-center'>Explore Our Products</h2>
                <div className='flex gap-y-20 flex-wrap justify-between mt-16'>
                {
                    products.map((product) => (
                        <div className='product bg-sky-100 rounded-lg flex flex-col justify-between'>
                            <div className='product-img-div w-80 h-80 flex justify-center items-center md:block md:w-full md:h-auto
                            lg:flex lg:w-80 lg:h-80
                            '>
                                <img src={product.productImage} alt="" className='max-w-full max-h-full'/>
                            </div>
                            <div className='px-6 py-3 bg-white rounded-t-3xl mt-2'>
                                <p className='text-yellow-400 tracking-tighter'> 
                                    &#x2605; &#x2605; &#x2605; &#x2605; &#x2605;
                                </p>
                                <p className='text-xs font-semibold'>{product.productName}</p>
                                <div className='flex justify-between items-center'>
                                    <p className='font-semibold'>&#x20A6;{product.price}</p>
                                    <div className='text-white bg-black rounded-full px-1.5 w-fit'>
                                        +
                                    </div>
                                </div>
                            </div>
                        </div>    
                    ))
                }
                </div>
            </div>
            
            <div className='new-arrivals-parent mt-24 pb-20'>
                <h2 className='text-4xl font-bold text-center'>New Arrivals</h2>
                <div className='new-arrivals flex gap-y-20 flex-wrap justify-between mt-8'>
                {
                    newArrivals.map((product) => (
                        <div className='product bg-sky-100 rounded-lg flex flex-col justify-between'>
                            <div className='new-arrival-div w-80 h-80 flex md:block md:w-full md:h-auto
                            lg:flex lg:w-80 lg:h-80
                            '>
                                <img src={product.productImage} alt="" className='max-w-full max-h-full'/>
                            </div>
                            <div className='px-6 py-3 bg-white rounded-t-3xl mt-auto h-fit'>
                                <p className='text-yellow-400 tracking-tighter'> 
                                    &#x2605; &#x2605; &#x2605; &#x2605; &#x2605;
                                </p>
                                <p className='text-xs font-semibold'>{product.productName}</p>
                                <div className='flex justify-between items-center'>
                                    <p className='font-semibold'>&#x20A6;{product.price}</p>
                                    <div className='text-white bg-black rounded-full px-1.5 w-fit'>
                                        +
                                    </div>
                                </div>
                            </div>
                        </div>    
                    ))
                }
                </div>
            </div>
        </div>
     );
}
 
export default ProductsDisplay;