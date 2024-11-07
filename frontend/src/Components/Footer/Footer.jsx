import { FaYoutube, FaFacebookF, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaLink } from "react-icons/fa";

const Footer = () => {
    const copyToClipboard = (text) => {
        navigator.clipboard
            .writeText(text)
            .then(() => alert(`${text} copied to clipboard!`))
            .catch((err) => console.error("Failed to copy: ", err));
    };

    return (
        <footer style={{ background: "var(--secondary-color)" }} className="py-8">
            <div className="max-w-screen-xl mx-auto px-4">
                {/* Desktop Layout */}
                <div className="hidden md:grid grid-cols-3 gap-8 text-center md:text-left">
                    {/* Contact Section */}
                    <div>
                        <h2 className="mb-4 text-lg font-medium text-neutral-300 uppercase flex items-center gap-2">
                            <FaPhoneAlt className="text-neutral-300" /> Contact
                        </h2>
                        <ul className="text-neutral space-y-2">
                            <li>
                                <a href="mailto:info@chhatgroup.com" className="text-neutral-300 hover:text-neutral-500 flex items-center gap-2">
                                    Email: info@chhatgroup.com
                                </a>
                            </li>
                            <li>
                                <button onClick={() => copyToClipboard("+855-12-890-801")} className="text-neutral-300 hover:text-neutral-500 flex items-center gap-2">
                                    Phone: +855 12 890 801 / +855 10 969 005
                                </button>
                            </li>
                        </ul>
                    </div>
                    
                    {/* Quick Links Section */}
                    <div>
                        <h2 className="mb-4 text-lg font-medium text-neutral-300 uppercase flex items-center gap-2">
                            <FaLink className="text-neutral-300" /> Quick Links
                        </h2>
                        <ul className="text-neutral space-y-2">
                            <li><a href="/about" className="text-neutral-300 hover:text-neutral-500">About Us</a></li>
                            <li><a href="/contact" className="text-neutral-300 hover:text-neutral-500">Contact Us</a></li>
                            {/* <li><a className="text-neutral-300 hover:text-neutral-500">Privacy & Policy</a></li> */}
                        </ul>
                    </div>

                    {/* Address Section */}
                    <div>
                        <h2 className="mb-4 text-lg font-medium text-neutral-300 uppercase flex items-center gap-2">
                            <FaMapMarkerAlt className="text-neutral-300" /> Address
                        </h2>
                        <button
                            onClick={() => copyToClipboard("Borey Piphup Thmey La Sen Sok 2 #47-49, Street BT-08M, Phum Krang Angkrong, Sangkat Krang Thnong, Khan Sen Sok, Phnom Penh, Cambodia")}
                            className="text-neutral-300 hover:text-neutral-500 text-left gap-2"
                        >
                            Borey Piphup Thmey La Sen Sok 2, Phnom Penh, Cambodia
                        </button>
                    </div>
                </div>

                {/* Mobile Layout */}
                <div className="md:hidden space-y-4">
                    {/* Condensed Contact Info */}
                    <button onClick={() => copyToClipboard("+855-12-890-801")} className="block text-neutral-300 hover:text-neutral-500 flex items-center gap-2">
                        <FaPhoneAlt /> Phone: <b>+855 12 890 801</b>
                    </button>
                    <a href="mailto:info@chhatgroup.com" className="block text-neutral-300 hover:text-neutral-500 flex items-center gap-2">
                        <FaEnvelope /> Mail: <b>info@chhatgroup.com</b>
                    </a>
                    
                    {/* Condensed Address */}
                    <button
                        onClick={() => copyToClipboard("Borey Piphup Thmey La Sen Sok 2, Phnom Penh")}
                        className="block text-neutral-300 hover:text-neutral-500 text-left flex items-center gap-2"
                    >
                        <FaMapMarkerAlt /> Address: <b>Borey Piphup Thmey La Sen Sok 2, Phnom Penh, Cambodia</b>
                    </button>
                </div>

                <hr className="my-6 border-gray-400" />

                {/* Footer Bottom */}
                <div className="flex flex-col sm:flex-row items-center justify-between text-center text-sm text-neutral-300 space-y-4 sm:space-y-0">
                    <span>© 2024 <a href="/" className="text-neutral-300 hover:underline">Chhat Group™</a>. All Rights Reserved.</span>
                    <div className="flex justify-center space-x-4">
                        <a href="https://web.facebook.com/chhatgroup" className="text-neutral hover:text-gray-700">
                            <FaFacebookF className="w-5 h-5" />
                            <span className="sr-only">Facebook page</span>
                        </a>
                        <a href="https://www.youtube.com/@chhatgroup7225" className="text-neutral hover:text-gray-700">
                            <FaYoutube className="w-5 h-5" />
                            <span className="sr-only">YouTube channel</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
