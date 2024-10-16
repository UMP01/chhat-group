import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import ContactForm from "../../Components/ContactForm/ContactForm";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMailSharp, IoLocationSharp } from "react-icons/io5";
import { FaYoutube, FaFacebookF } from "react-icons/fa";

const Contact = () => {
    return (
        <div>
            <Breadcrumb curPage="Contact" />
            <div className=" bg-style">
                <div className="px-4 sm:px-6 lg:px-8 lg:py-10 sm:py-5">
                    <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center text-white">
                        <div className="w-full my-10 text-center">
                            <h5 className="uppercase text-xl sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-5">
                                Get In Touch
                            </h5>
                            <div className="flex flex-wrap justify-center space-x-4 space-y-4 lg:space-y-0 lg:space-x-0 font-medium">
                                {/* Phone Number Box */}
                                <div className="flex flex-col items-center shadow-md p-4 w-full sm:w-1/3">
                                    <div className=" bg-white rounded-full p-3 mb-5">
                                        <FaPhoneAlt className="text-2xl text-cyan-700" />
                                    </div>
                                    <p>+855 12 890 801 / 10 969 005</p>
                                </div>
                                {/* Address Box */}
                                <div className="flex flex-col items-center shadow-md p-4 w-full sm:w-1/3 font-medium">
                                    <div className=" bg-white rounded-full p-3 mb-5">
                                        <IoLocationSharp className="text-2xl text-cyan-700" />
                                    </div>
                                    <p className="text-center">
                                        Borey Piphup Thmey La Sen Sok 2 #47-49,
                                        <br />
                                        Street BT-08M, Phum Krang Angkrong,
                                        <br />
                                        Sangkat Krang Thnong, Khan Sen Sok,
                                        <br />
                                        Phnom Penh, Cambodia, 120804
                                    </p>
                                </div>

                                {/* Email Box */}
                                <div className="flex flex-col items-center shadow-md p-4 w-full sm:w-1/3 font-medium">
                                    <div className=" bg-white rounded-full p-3 mb-5">
                                        <IoMailSharp className="text-2xl text-cyan-700" />
                                    </div>
                                    <a
                                        href="mailto:info@chhatgroup.com"
                                        className="hover:translate-x-3 duration-200 hover:text-cyan-900"
                                    >
                                        info@chhatgroup.com
                                    </a>
                                    <h5 className="text-lg font-medium my-3">
                                        Follow us
                                    </h5>
                                    <div className="container-social-media flex justify-center">
                                        <div className="btn-lg-square bg-white rounded-full flex items-center justify-center w-10 h-10 mr-2 hover:scale-110 duration-300 transition-transform ease-in-out">
                                            <a href="https://facebook.com">
                                                <FaFacebookF className="w-5 h-5 text-cyan-700 hover:text-cyan-600 duration-500 ease-in-out" />
                                            </a>
                                        </div>
                                        <div className="btn-lg-square bg-white rounded-full flex items-center justify-center w-10 h-10 mr-2 hover:scale-110 duration-300 transition-transform ease-in-out">
                                            <a href="https://youtube.com">
                                                <FaYoutube className="w-5 h-5 text-cyan-700 hover:text-cyan-600 duration-500 ease-in-out" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-feature py-10">
                <div className="max-w-7xl mx-auto flex flex-wrap items-center">
                    <div className="w-full lg:w-1/2 px-4 lg:px-10 mt-5">
                        <ContactForm />
                    </div>
                    <div className="w-full lg:w-1/2 mt-5 px-4 lg:px-10">
                        <div className="relative w-full h-96">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.525617121163!2d104.84040847481751!3d11.585826488616442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310951f6a8559789%3A0x2770b589d8fe299d!2sCHHAT%20GROUP!5e0!3m2!1sen!2skh!4v1721385512244!5m2!1sen!2skh"
                                className="absolute w-full h-full border rounded"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Chhat Group Location"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
