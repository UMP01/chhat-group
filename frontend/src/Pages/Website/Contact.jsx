import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import Logo from "../../assets/Images/logo.png";
import ContactForm from "../../Components/ContactForm/ContactForm";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMailSharp, IoLocationSharp } from "react-icons/io5";
import { FaYoutube, FaFacebookF } from "react-icons/fa";


const Contact = () => {
    return (
        <div>
            <Breadcrumb curPage="Contact" />
            <div className="container mb-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 rubik">
                    <div className="flex flex-wrap items-center">
                        <div className="w-full lg:w-1/2 px-4 lg:px-10 mt-5">
                            <img
                                src={Logo}
                                className="img-fluid w-96 h-auto mx-auto"
                                alt="Chhat Group Logo"
                            />
                        </div>
                        <div className="w-full lg:w-1/2 mt-5 px-4 lg:px-10">
                            <h5 className="uppercase text-xl primary-color my-5">
                                Contact to Chhat Group
                            </h5>
                            <div className="contact-info ml-5">
                                <div className="flex items-center my-2">
                                    <FaPhoneAlt className="mr-3" />
                                    <p className="text-gray-600">+855 12 890 801 / 10 969 005</p>
                                </div>
                                <div className="flex items-center my-2">
                                    <IoMailSharp className="mr-3" />
                                    <a
                                        href="mailto:info@chhatgroup.com"
                                        className="text-gray-600 hover:translate-x-3 duration-200 hover:text-cyan-900"
                                    >
                                        info@chhatgroup.com
                                    </a>
                                </div>
                                <div className="flex items-start justify-start my-2">
                                    <IoLocationSharp className="mr-3" />
                                    <p className="text-gray-600">
                                        Borey Piphup Thmey La Sen Sok 2 #47-49, Street BT-08M, Phum
                                        Krang Angkrong, Sangkat Krang Thnong, Khan Sen Sok, Phnom
                                        Penh, Cambodia, Phnom Penh, Cambodia, 120804
                                    </p>
                                </div>
                            </div>
                            <h5 className="text-xl primary-color my-3 ml-5">Follow us</h5>
                            <div className="container-social-media ml-5 flex">
                                <div className="btn-lg-square primary-bg-color rounded-full flex items-center justify-center w-10 h-10 mr-1">
                                    <a href="https://facebook.com">
                                        <FaFacebookF className="w-5 h-5 text-white" />
                                    </a>
                                </div>
                                <div className="btn-lg-square primary-bg-color rounded-full flex items-center justify-center w-10 h-10 ml-1">
                                    <a href="https://youtube.com">
                                        <FaYoutube className="w-5 h-5 text-white" />
                                    </a>
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
