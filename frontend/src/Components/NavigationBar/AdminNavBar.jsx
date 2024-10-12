import React, { useState } from "react";
import {
    ArrowLeftEndOnRectangleIcon,
    BellIcon,
    UserIcon,
} from "@heroicons/react/24/solid"; // Updated import
import UserAvatar from "../../assets/Images/logo.png"; // Update path if needed
import { useLocation } from "react-router-dom";

const AdminNavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    // Get user name from local storage
    const userName = localStorage.getItem("userName") || "User"; // Default to "User"

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
                return "Admin Panel";
        }
    };

    const title = getTitle();

    return (
        <nav className="bg-white dark:bg-boxdark shadow py-4 px-6">
            <div className="flex items-center justify-between">
                <div className="text-xl ml-12 font-normal text-gray-800">
                    {title}
                </div>
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
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <img
                                className="w-8 h-8 rounded-full border-2 border-gray-300"
                                src={UserAvatar}
                                alt="User Avatar"
                            />
                            <span className="font-normal text-gray-800">
                                {userName} {/* Display the user name */}
                            </span>
                        </button>
                        {isOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 border">
                                <ul className="py-2">
                                    <li>
                                        <a
                                            href="/admin/profile"
                                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                                        >
                                            Profile
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/admin/login"
                                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                                        >
                                            Logout
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default AdminNavBar;
