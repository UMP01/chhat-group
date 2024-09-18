import React, { useState } from "react";
import {
    ArrowLeftEndOnRectangleIcon,
    BellIcon,
    UserIcon,
} from "@heroicons/react/24/solid"; // Updated import
import UserAvatar from "../../assets/Images/logo.png"; // Update path if needed
import { useLocation } from "react-router-dom";

const AdminNavBar = () => {
    const [isOpen, setIsOpen] = useState(false); // State to manage dropdown visibility
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
        <nav className="bg-white dark:bg-boxdark shadow py-4 px-6">
            <div className="flex items-center justify-between">
                <div className="text-xl ml-12 font-normal text-gray-800">
                    {title} {/* Display the dynamic title */}
                </div>
                <div className="flex items-center space-x-4">
                    <div className="relative">
                        <BellIcon className="w-6 h-6 text-gray-600 hover:text-primary" />
                        <span className="absolute top-0 right-0 flex items-center justify-center w-3 h-3 bg-red-600 text-white text-xs rounded-full">
                            3
                        </span>
                    </div>
                    <div className="relative">
                        <div className="relative">
                            {/* Dropdown Toggle Button */}
                            <button
                                className="flex items-center space-x-2 focus:outline-none"
                                onClick={() => setIsOpen(!isOpen)}
                            >
                                <div className="relative">
                                    {/* Avatar with Circle Border */}
                                    <img
                                        className="w-8 h-8 rounded-full border-2 border-gray-300"
                                        src={UserAvatar}
                                        alt="User Avatar"
                                    />
                                </div>
                                <span className="font-normal text-gray-800">
                                    Super User
                                </span>
                            </button>

                            {/* Dropdown Menu */}
                            {isOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 border">
                                    <ul className="py-2">
                                        <li>
                                            <a
                                                href="/admin/profile"
                                                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text"
                                            >
                                                {/* <UserIcon className="w-5 h-5 mr-2" aria-hidden="true" /> */}
                                                Profile
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="/admin/login"
                                                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                                            >
                                                {/* <ArrowLeftEndOnRectangleIcon className="w-5 h-5 mr-2" aria-hidden="true" /> */}
                                                Logout
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default AdminNavBar;
