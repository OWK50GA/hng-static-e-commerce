import { useContext, useEffect, useState } from 'react'
import Product from './Product'
import { ProductsContext } from '../context/ProductsContext'
import Pagination from './Pagination'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ShopContext } from '../context/ShopContext';

const ProductsDisplay = () => {

    const {products, loading} = useContext(ProductsContext)
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(12);
    const { cartItems } = useContext(ShopContext)

    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = products.slice(firstPostIndex, lastPostIndex);

    const getRandomElements = (arr, count) => {
        return arr.slice().sort(() => {
            return 0.5 - Math.random();
        }).slice(0, count);
    }
    
    const newArrivals = getRandomElements(products, 6)

    return ( 
        <div className='products mt-24' id='shop'>
            <ToastContainer autoClose={2000}/>
            <div>
                <h2 className='text-4xl font-bold text-center'>Explore Our Products</h2>
                <div className='flex gap-y-20 flex-wrap justify-between mt-16'>
                { 
                    currentPosts.map((product, index) => {
                        const ProductInfo = {
                            name: product.name,
                            quantity: product.available_quantity,
                            price: product.current_price[0].NGN[0],
                            numberOrdered: 0,
                        }
                        const cartNotify = () => toast(`Added ${cartItems[product.unique_id] + 1} ${product.name} to cart`)
                        return (
                            <Product data={product} ProductInfo={ProductInfo} cartNotify={cartNotify}/>)    
                    })
                }
                </div>
                <Pagination totalPosts={products.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
            </div>
            
            <div className='new-arrivals-parent mt-24 pb-20'>
                <h2 className='text-4xl font-bold text-center'>New Arrivals</h2>
                <div className='new-arrivals flex gap-y-20 flex-wrap justify-between mt-8'>
                {
                    newArrivals.map((product) => {
                        const ProductInfo = {
                            name: product.name,
                            quantity: product.available_quantity,
                            price: product.current_price[0].NGN[0],
                            numberOrdered: 0,
                        }
                        return (
                            <Product data={product} ProductInfo={ProductInfo}/>
                        )
                    })
                }
                </div>
            </div>
        </div>
     );
}
 
export default ProductsDisplay;