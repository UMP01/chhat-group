import { useState } from "react";
import {
    FaYoutube,
    FaFacebookF,
    FaTwitter,
    FaGithub,
    FaDribbble,
} from "react-icons/fa";
import { IoIosMenu, IoMdClose } from "react-icons/io";
import Logo from "../../assets/Images/logo.png";

const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    // Function to copy text to clipboard
    const copyToClipboard = (text) => {
        navigator.clipboard
            .writeText(text)
            .then(() => alert(`${text} copied to clipboard!`))
            .catch((err) => console.error("Failed to copy: ", err));
    };

    return (
        <footer
            className="bg-white dark:bg-gray-900"
            style={{ background: "var(--secondary-color)" }}
        >
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="grid grid-cols-12 gap-8">
                    <div className="col-span-12 md:col-span-4 mb-6 md:mb-0 flex justify-center md:justify-start">
                        <a
                            href="/"
                            className="flex items-center bg-neutral-100 p-2 rounded shadow-sm"
                        >
                            <img
                                src={Logo}
                                className="h-20"
                                alt="Chhat Group Logo"
                            />
                        </a>
                    </div>

                    <div className="col-span-12 md:col-span-8 grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-lg font-semibold text-neutral-300 uppercase dark:text-white">
                                Contact
                            </h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a
                                        className="hover:underline text-neutral-400"
                                        onClick={() =>
                                            copyToClipboard(
                                                "info@chhatgroup.com"
                                            )
                                        }
                                    >
                                        Email: info@chhatgroup.com
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a
                                        className="hover:underline text-neutral-400"
                                        onClick={() =>
                                            copyToClipboard("+855-12-890-801")
                                        }
                                    >
                                        Phone Number: +855-12-890-801
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a
                                        className="hover:underline text-neutral-400"
                                        onClick={() =>
                                            copyToClipboard("+855-10-969-005")
                                        }
                                    >
                                        +855-10-969-005
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="mb-6 text-lg font-semibold text-neutral-300 uppercase dark:text-white">
                                Quick Links
                            </h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a
                                        href="/about"
                                        className="hover:underline text-neutral-400"
                                    >
                                        About Us
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a
                                        href="/contact"
                                        className="hover:underline text-neutral-400"
                                    >
                                        Contact Us
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a className="hover:underline text-neutral-400">
                                        Privacy & Policy
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="mb-6 text-xl font-semibold text-neutral-300 uppercase dark:text-white">
                                Address
                            </h2>
                            <ul className="text-gray-600 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a
                                        className="hover:underline text-neutral-400"
                                        onClick={() =>
                                            copyToClipboard(
                                                "Borey Piphup Thmey La Sen Sok 2 #47-49, Street BT-08M, Phum Krang Angkrong, Sangkat Krang Thnong, Khan Sen Sok, Phnom Penh, Cambodia"
                                            )
                                        }
                                    >
                                        Borey Piphup Thmey La Sen Sok 2 #47-49,
                                        Street BT-08M, Phum Krang Angkrong,
                                        Sangkat Krang Thnong, Khan Sen Sok,
                                        Phnom Penh, Cambodia
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-neutral-400 sm:text-center dark:text-gray-400">
                        © 2024{" "}
                        <a href="/" className="hover:underline ">
                            Chhat Group™
                        </a>
                        . All Rights Reserved.
                    </span>
                    <div className="flex mt-4 sm:justify-center sm:mt-0">
                        <a
                            href="https://web.facebook.com/chhatgroup"
                            className="text-neutral-400 hover:text-gray-900 dark:hover:text-white"
                        >
                            <FaFacebookF className="w-4 h-4" />
                            <span className="sr-only">Facebook page</span>
                        </a>
                        <a
                            href="https://www.youtube.com/@chhatgroup7225"
                            className="text-neutral-400 hover:text-gray-900 dark:hover:text-white ms-5"
                        >
                            <FaYoutube className="w-4 h-4" />
                            <span className="sr-only">Youtube channel</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Navbar;
