const CartCard = ({productImage, productName, uniqueId, removeItem}) => {

    return ( 
        <div className="cart-card flex items-center w-fit">
            <div className="w-32 h-32 bg-blue-50 rounded-t-md">
                <img src={productImage} alt="" className="max-w-full max-h-full"/>
            </div>
            <div className="cart-card-text flex flex-col gap-5 p-4">
                <p>{productName}</p>
                <p className="p-3 border-b border-gray-300 w-fit text-gray-300 cursor-pointer"
                    onClick={() => {
                        removeItem(uniqueId)
                    }}
                >
                    Remove
                </p>
            </div>
        </div>
     );
}
 
export default CartCard;