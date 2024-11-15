import { useState, useEffect } from "react";
import { FaAngleDown } from "react-icons/fa";
import { IoIosMenu, IoMdClose } from "react-icons/io";
import Logo from "../../assets/Images/logo.png";
import { useLocation } from "react-router-dom"; // React Router hook for getting the current URL path

const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    const location = useLocation(); // This hook gives the current URL
    const currentPath = location.pathname; // Get the current path

    const navItems = [
        { name: "About Us", link: "/about" },
        { name: "Chhat Research", link: "/chhat-research" },
        {
            name: "Member Companies",
            dropdown: true,
            subNav: [
                { name: "Chhat Research", link: "/chhat-research" },
                { name: "Chhat Diamond", link: "/chhat-diamond" },
                { name: "Chhat Trading", link: "/chhat-trading" },
                // { name: "Chhat Capital", link: "/chhat-capital" },
                // { name: "Chhat Real Estate", link: "/chhat-real-estate" },
                // { name: "Chhat Construction", link: "/chhat-construction" },
                // { name: "Chhat Agriculture", link: "/chhat-agriculture" },
                // { name: "Chhat Cosmetic", link: "/chhat-cosmetic" },
            ],
        },
        { name: "Blog", link: "/blog" },
        { name: "Career", link: "/career" },
        { name: "Contact", link: "/contact" },
        { name: "Admin", link: "/admin/login", target: "_blank" },
    ];

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    const toggleDropdown = (index) => {
        setActiveDropdown(activeDropdown === index ? null : index);
    };

    const closeDropdown = () => {
        setActiveDropdown(null);
    };

    // Check if the current path matches the nav item's link
    const isActiveLink = (link) => currentPath === link;

    return (
        <nav className="sticky top-0 z-50">
            {/* Desktop Screen */}
            <div className="bg-white mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-20">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <a href="/">
                                <img
                                    className="h-12 w-auto"
                                    src={Logo}
                                    alt="Logo"
                                />
                            </a>
                        </div>
                    </div>
                    <div className="hidden sm:block">
                        <div className="flex space-x-4 items-center">
                            {navItems.map((item, index) => (
                                <div key={index} className="font-medium">
                                    {item.dropdown ? (
                                        <div className="relative">
                                            <button
                                                onClick={() =>
                                                    toggleDropdown(index)
                                                }
                                                className={`px-3 rounded-md text-md rubik ${
                                                    activeDropdown === index
                                                        ? "text-sky-600"
                                                        : "text-gray-700"
                                                } ${
                                                    isActiveLink(item.link)
                                                        ? "text-sky-600"
                                                        : ""
                                                }`}
                                            >
                                                {item.name}
                                                <FaAngleDown
                                                    className={`h-3 w-3 ml-1 inline-block ${
                                                        activeDropdown === index
                                                            ? "transform rotate-180"
                                                            : ""
                                                    }`}
                                                />
                                            </button>
                                            {activeDropdown === index && (
                                                <div
                                                    onClick={closeDropdown}
                                                    className="origin-top-left absolute left-0 mt-7 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-20"
                                                >
                                                    <div>
                                                        {item.subNav.map(
                                                            (
                                                                subItem,
                                                                subIndex
                                                            ) => (
                                                                <a
                                                                    key={
                                                                        subIndex
                                                                    }
                                                                    href={
                                                                        subItem.link
                                                                    }
                                                                    className={`block px-5 py-3 text-md text-dark text-gray-600 hover:bg-gray-100 rubik hover:rounded-md ${
                                                                        isActiveLink(
                                                                            subItem.link
                                                                        )
                                                                            ? "text-sky-600"
                                                                            : ""
                                                                    }`}
                                                                >
                                                                    {
                                                                        subItem.name
                                                                    }
                                                                </a>
                                                            )
                                                        )}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    ) : (
                                        <a
                                            href={item.link}
                                            className={`text-gray-700 px-3 py-2 rounded-md text-md rubik ${
                                                isActiveLink(item.link)
                                                    ? "text-sky-600"
                                                    : ""
                                            }`}
                                            target={item.target}
                                        >
                                            {item.name}
                                        </a>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                        <button
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-dark focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded={isMobileMenuOpen}
                            onClick={toggleMobileMenu}
                        >
                            <span className="sr-only">Open main menu</span>
                            {isMobileMenuOpen ? (
                                <IoMdClose className="block h-6 w-6" />
                            ) : (
                                <IoIosMenu className="block h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Phone Screen */}
            {isMobileMenuOpen && (
                <div
                    className="sm:hidden md:hidden font-medium bg-white"
                    id="mobile-menu"
                >
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        {navItems.map((item, index) => (
                            <div key={index} className="text-gray-700">
                                {item.dropdown ? (
                                    <>
                                        <button
                                            onClick={() =>
                                                toggleDropdown(index)
                                            }
                                            className={`block px-3 py-2 rounded-md text-md w-full text-left hover:bg-gray-100 ${
                                                activeDropdown === index
                                                    ? "text-sky-600"
                                                    : ""
                                            } ${
                                                isActiveLink(item.link)
                                                    ? "text-sky-600"
                                                    : ""
                                            }`}
                                        >
                                            {item.name}
                                            <FaAngleDown
                                                className={`h-3 w-3 ml-1 inline-block ${
                                                    activeDropdown === index
                                                        ? "transform rotate-180"
                                                        : ""
                                                }`}
                                            />
                                        </button>
                                        {activeDropdown === index && (
                                            <div
                                                onClick={closeDropdown}
                                                className="mt-1"
                                            >
                                                <div className="py-1">
                                                    {item.subNav.map(
                                                        (subItem, subIndex) => (
                                                            <a
                                                                key={subIndex}
                                                                href={
                                                                    subItem.link
                                                                }
                                                                className={`block pl-10 py-2 text-md text-dark text-gray-600 hover:bg-gray-100 rubik ${
                                                                    isActiveLink(
                                                                        subItem.link
                                                                    )
                                                                        ? "text-sky-600"
                                                                        : ""
                                                                }`}
                                                            >
                                                                {subItem.name}
                                                            </a>
                                                        )
                                                    )}
                                                </div>
                                            </div>
                                        )}
                                    </>
                                ) : (
                                    <a
                                        href={item.link}
                                        className={`block px-3 py-2 rounded-md text-md hover:bg-gray-100 ${
                                            isActiveLink(item.link)
                                                ? "text-sky-600"
                                                : ""
                                        }`}
                                    >
                                        {item.name}
                                    </a>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
