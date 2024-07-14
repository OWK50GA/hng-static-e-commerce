import { useContext } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { ProductsContext } from "../context/ProductsContext";

const ProductDetails = () => {

    const { id } = 'useParams()'
    const product = useLoaderData();
    console.log(product)
    const { cartItems } = useContext(ShopContext);
    const { products } = useContext(ProductsContext);
    const currentStock = product.available_quantity - cartItems[id]

    return ( 
        <div>
            <h2>Product Details for {product.name}</h2>
            <h2>Price {product.current_price}</h2>
            <h2>Stock {currentStock}</h2>
            <p>Description:</p>
        </div>
     );
}

export const productDetailsLoader = async ({params}) => {
    const { id } = params

    const res = await fetch(`/api/products/8faecc4a9c8b42d4886d8d9e70049a12?organization_id=bc5b290b3e3a4d5d90426466523defa5&reverse_sort=false&Appid=6HVJ5A7MUNX2B2K&Apikey=70c333f3d3f64b32a9a03d81fe2e183e20240713081007078314`)

}
 
export default ProductDetails;