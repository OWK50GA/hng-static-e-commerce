const CheckoutForm = () => {

     return ( 
        <div>
            <form 
                action="" 
                className="mt-6"
            >
                <div className="mt-3">
                    <label htmlFor="firstname" className="block font-semibold">First Name</label>
                    <input 
                        type="text" 
                        name="firstname" 
                        id="firstname"
                        // placeholder="Dikko" 
                        className="w-full rounded-md border-gray-400"
                    />
                </div>
                <div className="mt-3">
                    <label htmlFor="lastname" className="block font-semibold">Last Name</label>
                    <input 
                        type="text" 
                        name="lastname" 
                        id="lastname" 
                        // placeholder="Oladapo"
                        className="w-full rounded-md border-gray-400"
                    />
                </div>
                <div className="mt-3">
                    <label htmlFor="address" className="block font-semibold">Street Address</label>
                    <input 
                        type="text" 
                        name="address" 
                        id="address" 
                        // placeholder="e.g King's Landing"
                        className="w-full rounded-md border-gray-400"
                    />
                </div>
                <div className="mt-3">
                    <label htmlFor="country" className="block font-semibold">Country or Region</label>
                    <input 
                        type="text" 
                        name="country" 
                        id="country" 
                        // placeholder="e.g Westeros"
                        className="w-full rounded-md border-gray-400"
                    />
                </div>
                <div className="mt-3">
                    <label htmlFor="townOrCity" className="block font-semibold">Town City</label>
                    <input 
                        type="text" 
                        name="townOrCity" 
                        id="townOrCity" 
                        className="w-full rounded-md border-gray-400"
                    />
                </div>
                <div className="mt-3">
                    <label htmlFor="aptNumber" className="block font-semibold">Apt Number</label>
                    <input 
                        type="number" 
                        name="aptNumber" 
                        id="aptNumber" 
                        className="w-full rounded-md border-gray-400"
                    />
                </div>
                <div className="mt-10">
                    <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-md">
                        Save this address
                    </button>
                </div>
            </form>
        </div>
     );
}
 
export default CheckoutForm;