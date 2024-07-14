import { useContext } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { ProductsContext } from "../context/ProductsContext";

const ProductDetails = () => {

    const { id } = useParams()

    return ( 
        <div className="text-3xl">
            {id}
        </div>
     );
}
 
export default ProductDetails;