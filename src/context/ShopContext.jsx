import { createContext, useContext, useState } from "react";
import { ProductsContext } from "./ProductsContext";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {

    const { products } = useContext(ProductsContext)
    const cart = products.reduce((acc, obj) => {
        acc[obj.unique_id] = 0;
        return acc;
    }, {})

    const [cartItems, setCartItems] = useState(cart)
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = products.find((product) => product.unique_id == item)
                totalAmount += cartItems[item] * itemInfo.current_price[0].NGN[0]
            }
        }

        return totalAmount;
    }

    const addToCart = (itemUniqueId) => {
        setCartItems((prev) => ({...prev, [itemUniqueId]: prev[itemUniqueId] + 1}));
    }

    const removeFromCart = (itemUniqueId) => {
        setCartItems((prev) => ({...prev, [itemUniqueId]: prev[itemUniqueId] - 1}));
    }

    const updateCartItemCount = (newAmount, itemUniqueId) => {
        setCartItems((prev) => ({...prev, [itemUniqueId]: newAmount}));
    }

    const removeItem = (itemUniqueId) => {
        setCartItems((prev) => ({...prev, [itemUniqueId]: 0}));
    }

    const clearCart = () => setCartItems(cart)

    const shopContextValue = { cartItems, setCartItems, addToCart, removeFromCart, updateCartItemCount, getTotalCartAmount, removeItem, clearCart };

    return ( 
        <ShopContext.Provider value={shopContextValue}>
            {props.children}
        </ShopContext.Provider>
     );
}
 
export default ShopContextProvider;