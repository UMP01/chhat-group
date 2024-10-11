import React, { useState } from "react";
import {
    ArrowLeftEndOnRectangleIcon,
    BellIcon,
    UserIcon,
    XCircleIcon,
    Bars3Icon,
} from "@heroicons/react/24/solid"; 
import UserAvatar from "../../assets/Images/logo.png"; // Update path if needed
import { useLocation, Link } from "react-router-dom"; // Import Link for routing

const AdminNavBar = ({ toggleSidebar, isOpen }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to manage dropdown visibility
    const location = useLocation(); // Get the current location

    // Function to determine the title based on the current URL
    const getTitle = () => {
        switch (location.pathname) {
            case "/admin/dashboard":
                return "Dashboard";
            case "/admin/chhat-group-blog":
                return "Chhat Group Blog";
            case "/admin/chhat-research-blog":
                return "Chhat Research Blog";
            case "/admin/career":
                return "Career";
            case "/admin/user":
                return "User";
            case "/admin/contact":
                return "Contact";
            case "/admin/profile":
                return "Profile";
            default:
                return "Admin Panel"; // Default title
        }
    };

    const title = getTitle(); // Get the title based on URL

    return (
        <nav className="bg-white dark:bg-boxdark shadow py-4 px-6 flex justify-between items-center">
            {/* Sidebar Toggle Button */}
            <button
                className="text-gray-300 focus:outline-none"
                onClick={toggleSidebar}
            >
                <span className="sr-only">
                    {isOpen ? "Close Sidebar" : "Open Sidebar"}
                </span>
                {isOpen ? (
                    <XCircleIcon className="w-10 h-10" />
                ) : (
                    <Bars3Icon className="w-10 h-10 text-cyan-700" />
                )}
            </button>
            <h1 className="text-xl text-gray-800">{title}</h1> {/* Show dynamic title */}
            <div className="flex items-center space-x-4">
                <div className="relative">
                    <BellIcon className="w-6 h-6 text-gray-600 hover:text-primary" />
                    <span className="absolute top-0 right-0 flex items-center justify-center w-3 h-3 bg-red-600 text-white text-xs rounded-full">
                        3
                    </span>
                </div>
                <div className="relative">
                    <button
                        className="flex items-center space-x-2 focus:outline-none"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    >
                        <img
                            className="w-8 h-8 rounded-full border-2 border-gray-300"
                            src={UserAvatar}
                            alt="User Avatar"
                        />
                        <span className="font-normal text-gray-800">Super User</span>
                    </button>

                    {/* Dropdown Menu */}
                    {isDropdownOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 border">
                            <ul className="py-2">
                                <li>
                                    <Link
                                        to="/admin/profile"
                                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center"
                                    >
                                        <UserIcon className="w-5 h-5 mr-2" />
                                        Profile
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/admin/login"
                                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center"
                                        onClick={() => {
                                            setIsDropdownOpen(false);
                                            // You can add logout logic here if needed
                                        }}
                                    >
                                        <ArrowLeftEndOnRectangleIcon className="w-5 h-5 mr-2" />
                                        Logout
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default AdminNavBar;
