import React, { useState } from "react";
import { BellIcon, UserIcon } from "@heroicons/react/24/solid"; // Updated import
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
            default:
                return "Admin Panel"; // Default title
        }
    };

    const title = getTitle(); // Get the title based on URL

    return (
        <nav className="bg-white dark:bg-boxdark shadow py-4 px-6">
            <div className="flex items-center justify-between">
                <div className="text-xl font-semibold text-gray-800 dark:text-white">
                    {title} {/* Display the dynamic title */}
                </div>
                <div className="flex items-center space-x-4">
                    <div className="relative">
                        <BellIcon className="w-6 h-6 text-gray-600 dark:text-white hover:text-primary" />
                        <span className="absolute top-0 right-0 flex items-center justify-center w-3 h-3 bg-red-600 text-white text-xs rounded-full">
                            3
                        </span>
                    </div>
                    <div className="relative">
                        <button
                            className="flex items-center space-x-2"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <img
                                className="w-8 h-8 rounded-full"
                                src={UserAvatar}
                                alt="User Avatar"
                            />
                            <span className="font-medium text-gray-800 dark:text-white">
                                Super User
                            </span>
                        </button>
                        {isOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-boxdark divide-y divide-gray-100 rounded-md shadow-lg focus:outline-none">
                                <div className="p-1">
                                    <button className="group flex rounded-md items-center w-full px-2 py-2 text-sm text-gray-900 dark:text-gray-100 hover:bg-indigo-600 hover:text-white">
                                        <UserIcon
                                            className="w-5 h-5 mr-2"
                                            aria-hidden="true"
                                        />
                                        User Profile
                                    </button>
                                </div>
                                <div className="p-1">
                                    <button className="group flex rounded-md items-center w-full px-2 py-2 text-sm text-gray-900 dark:text-gray-100 hover:bg-indigo-600 hover:text-white">
                                        <svg
                                            className="w-5 h-5 mr-2 stroke-current"
                                            aria-hidden="true"
                                            fill="none"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            ></path>
                                        </svg>
                                        Logout
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default AdminNavBar;
