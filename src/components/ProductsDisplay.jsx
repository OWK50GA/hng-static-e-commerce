import { products } from '../Products'
import { newArrivals } from '../Products'

const ProductsDisplay = () => {
    return ( 
        <div className='products mt-24' id='shop'>
            <div>
                <h2 className='text-4xl font-bold text-center'>Explore Our Products</h2>
                <div className='flex gap-20 flex-wrap justify-start mt-16'>
                {
                    products.map((product) => (
                        <div className='product bg-sky-100 w-fit'>
                            <div className='product-img-div w-80 h-80'>
                                <img src={product.productImage} alt="" className='max-w-full max-h-full'/>
                            </div>
                            <div className='px-6 py-3 bg-white rounded-t-3xl mt-2'>
                                <p className='text-yellow-300 tracking-tighter'> 
                                    &#x2605; &#x2605; &#x2605; &#x2605; &#x2605;
                                </p>
                                <p className='text-xs'>{product.productName}</p>
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
                <div className='new-arrivals flex gap-20 flex-wrap justify-start mt-8'>
                {
                    newArrivals.map((product) => (
                        <div className='bg-sky-100 rounded-xl'>
                            <div className='w-80 h-80'>
                                <img src={product.productImage} alt="" className='max-w-full max-h-full'/>
                            </div>
                            <div className='px-6 py-3 bg-white rounded-t-3xl mt-2'>
                                <p className='text-yellow-300 tracking-tighter'> 
                                    &#x2605; &#x2605; &#x2605; &#x2605; &#x2605;
                                </p>
                                <p className='text-xs'>{product.productName}</p>
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