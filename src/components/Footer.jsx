import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";

const Footer = () => {
    return ( 
        <div className="footer mt-6 pb-12">
            <div className="md:w-88 m-auto">
                <h2 
                    className="text-blue-600 font-bold text-3xl w-fit m-auto mb-5"
                >
                    Newsletter
                </h2>
                <p className="font-semibold text-sm m-auto w-fit mb-3">Subscribe to get information about products and coupons</p>
                <form action="">
                    <div 
                        className="footer-form m-auto bg-sky-50 rounded-md flex justify-between lg:h-12"
                    >
                        <input 
                            type="email" 
                            placeholder="Email Address"
                            className="bg-sky-50 border-none rounded-md"
                        />
                        <button
                            className="footer-btn bg-blue-600 text-white py-2 px-4 rounded-md font-bold"
                        >
                            Shop Now
                        </button>
                    </div>
                </form>
            </div>

            <div className="bottom-footer-details flex gap-8 mt-28">
                <div className="flex flex-col gap-8 justify-center w-full lg:w-5/12">
                    <div>
                        <img src="src\assets\GadgetStore.png" alt="" className=""/>
                    </div>
                    <p className="get-gadgets-text lg:text-sm text-gray-500">
                        Get some awesome gadgets from us any day any time
                    </p>
                    <div className="flex gap-2">
                        <div className="bg-sky-100 w-10 h-10 items-center flex justify-center rounded-xl">
                            <FaFacebookF />
                        </div>
                        <div className="bg-sky-100 w-10 h-10 items-center flex justify-center rounded-xl">
                            <FaInstagram />
                        </div>
                        <div className="bg-sky-100 w-10 h-10 items-center flex justify-center rounded-xl">
                            <FaTwitter />
                        </div>
                        <div className="bg-sky-100 w-10 h-10 items-center flex justify-center rounded-xl">
                            <FaLinkedinIn />
                        </div>
                    </div>
                </div>
                <div className="company-details flex justify-evenly gap-32">
                    <div>
                        <div>
                            <p>Company</p>
                        </div>
                        <div className="mt-9 flex flex-col gap-11 text-gray-300 text-sm">
                            <p>About</p>
                            <p>Contact Us</p>
                            <p>Support</p>
                            <p>Careers</p>
                        </div>
                    </div>
                    <div>
                        <h2>Quick Link</h2>
                        <div className="mt-9 flex flex-col gap-11 text-gray-300 text-sm">
                            <p>Share Location</p>
                            <p>Orders Tracking</p>
                            <p>Size Guide</p>
                            <p>FAQs</p>
                        </div>
                    </div>
                    <div>
                        <h2>Legal</h2>
                        <div className="mt-9 flex flex-col gap-11 text-gray-300 text-sm">
                            <p>Terms & Conditions</p>
                            <p>Privacy Policy</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Footer;