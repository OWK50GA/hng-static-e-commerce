import { useFormik, validateYupSchema } from "formik";
import { useState } from "react";
import * as Yup from 'yup';

const CheckoutForm = ({setCheckoutFormValid}) => {

    const options = ['Pay on Delivery', 'Bank Transfer', 'Card Payment']
    const [currentOption, setCurrentOption] = useState(options[0])

    const validationSchema = Yup.object({
        fullname: Yup.string().required('Required'),
        address: Yup.string().required('Required'),
        country: Yup.string().required('Required'),
        townOrCity: Yup.string().required('Required'),
        aptNumber: Yup.number().required('Required'),
    })

    const formik = useFormik({
        initialValues: {
            fullname: '',
            address: '',
            country: '',
            townOrCity: '',
            aptNumber: '',
        },
        onSubmit: (values) => {
            console.log(values)
            setCheckoutFormValid(true)
            formik.resetForm();
        },
        validationSchema,
    })

     return ( 
        <div>
            <form 
                action="" 
                className="mt-6"
                onSubmit={formik.handleSubmit}
            >
                <div className="mt-3">
                    <label htmlFor="fullname" className="block font-semibold">Full Name</label>
                    <input 
                        type="text" 
                        name="fullname" 
                        id="fullname"
                        placeholder="Dikko" 
                        className="w-full rounded-md border-gray-400"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.firstname}
                    />
                    {
                        formik.touched.firstname && formik.errors.firstname?
                        <div className="text-red-600">{formik.errors.firstname}</div>
                        :
                        null
                    }
                </div>
                {/* <div className="mt-3">
                    <label htmlFor="lastname" className="block font-semibold">Last Name</label>
                    <input 
                        type="text" 
                        name="lastname" 
                        id="lastname" 
                        placeholder="Oladapo"
                        className="w-full rounded-md border-gray-400"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.lastname}
                    />
                    {
                        formik.touched.lastname && formik.errors.lastname?
                        <div className="text-red-600">{formik.errors.lastname}</div>
                        :
                        null
                    }
                </div> */}
                <div className="mt-3">
                    <label htmlFor="address" className="block font-semibold">Street Address</label>
                    <input 
                        type="text" 
                        name="address" 
                        id="address" 
                        placeholder="e.g King's Landing"
                        className="w-full rounded-md border-gray-400"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.address}
                    />
                    {
                        formik.touched.address && formik.errors.address?
                        <div className="text-red-600">{formik.errors.address}</div>
                        :
                        null
                    }
                </div>
                <div className="mt-3">
                    <label htmlFor="country" className="block font-semibold">Country or Region</label>
                    <input 
                        type="text" 
                        name="country" 
                        id="country" 
                        placeholder="e.g Westeros"
                        className="w-full rounded-md border-gray-400"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.country}
                    />
                    {
                        formik.touched.country && formik.errors.country?
                        <div className="text-red-600">{formik.errors.country}</div>
                        :
                        null
                    }
                </div>
                <div className="mt-3">
                    <label htmlFor="townOrCity" className="block font-semibold">Town City</label>
                    <input 
                        type="text" 
                        name="townOrCity" 
                        id="townOrCity" 
                        className="w-full rounded-md border-gray-400"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.townOrCity}
                    />
                    {
                        formik.touched.townOrCity && formik.errors.townOrCity?
                        <div className="text-red-600">{formik.errors.townOrCity}</div>
                        :
                        null
                    }
                </div>
                <div className="mt-3">
                    <label htmlFor="aptNumber" className="block font-semibold">Apt Number</label>
                    <input 
                        type="number" 
                        name="aptNumber" 
                        id="aptNumber" 
                        className="w-full rounded-md border-gray-400"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.aptNumber}
                    />
                    {
                        formik.touched.aptNumber && formik.errors.aptNumber?
                        <div className="text-red-600">{formik.errors.aptNumber}</div>
                        :
                        null
                    }
                </div>
                <div>
                    <label htmlFor="payment-method" className="block font-semibold">Select Payment Method</label>
                    <select 
                        name="payment-method" 
                        id=""
                        onChange={(e) => setCurrentOption(e.target.value)}
                    >
                        {
                            options.map((option) => {
                                return (
                                    <option value={option}>{option}</option>
                                )
                            })
                        }
                    </select>
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