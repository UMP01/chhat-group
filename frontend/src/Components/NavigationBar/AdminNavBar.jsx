import React, { useState, useEffect } from "react";
import {
    ArrowLeftEndOnRectangleIcon,
    BellIcon,
    UserIcon,
    XCircleIcon,
    Bars3Icon,
} from "@heroicons/react/24/solid";
import { useLocation, Link } from "react-router-dom";
import Swal from "sweetalert2";
import DefaultAvatar from "../../assets/Images/default-profile.jpg";

const AdminNavBar = ({ toggleSidebar, isOpen }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const location = useLocation();
    const userName = localStorage.getItem("userName") || "User"; 
    const [userData, setUserData] = useState({
        name: userName,
        avatar: DefaultAvatar,
    });

    useEffect(() => {
        const storedAvatar = localStorage.getItem("userAvatar");
        if (storedAvatar) {
            setUserData((prevData) => ({
                ...prevData,
                avatar: storedAvatar,
            }));
        }
    }, []);

    const handleLogout = async () => {
        try {
            const result = await Swal.fire({
                title: "Are you sure?",
                text: "Do you really want to log out?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, log out!",
            });

            if (result.isConfirmed) {
                localStorage.removeItem("authToken");
                localStorage.removeItem("userName");
                localStorage.removeItem("userAvatar");
                window.location.href = "/admin/login";
            }
        } catch (error) {
            Swal.fire("Error", "There was an error logging out", "error");
        }
    };

    const handleSidebarToggle = () => {
        toggleSidebar();
        if (isDropdownOpen) {
            setIsDropdownOpen(false);
        }
    };

    const handleDropdownToggle = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <nav className="bg-white py-4 px-6 flex justify-between items-center">
            <button
                className="text-gray-300 focus:outline-none"
                onClick={handleSidebarToggle}
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
                        onClick={handleDropdownToggle}
                    >
                        <img
                            className="w-8 h-8 rounded-full border-2 border-gray-300"
                            src={userData.avatar || DefaultAvatar}
                            alt="User Avatar"
                        />
                        <span className="font-bold text-gray-800">
                            {userData.name}
                        </span>
                    </button>

                    {isDropdownOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 border">
                            <ul className="py-2">
                                <li>
                                    <Link
                                        to="/admin/profile"
                                        className="px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center"
                                    >
                                        <UserIcon className="w-5 h-5 mr-2" />
                                        Profile
                                    </Link>
                                </li>
                                <li>
                                    <button
                                        className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center"
                                        onClick={handleLogout}
                                    >
                                        <ArrowLeftEndOnRectangleIcon className="w-5 h-5 mr-2" />
                                        Logout
                                    </button>
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
