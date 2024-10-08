import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import {
    HomeIcon,
    UserGroupIcon,
    NewspaperIcon,
    BriefcaseIcon,
    UserIcon,
    ArrowLeftEndOnRectangleIcon,
    XCircleIcon,
    Bars3Icon,
    EnvelopeIcon,
} from "@heroicons/react/24/solid";

const AdminSideBar = () => {
    const [active, setActive] = useState(null);
    const [isOpen, setIsOpen] = useState(true);

    const handleClick = (index) => {
        setActive(index);
    };

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
                window.location.href = "/admin/login";
            }
        } catch (error) {
            Swal.fire("Error", "There was an error logging out", "error");
        }
    };

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            {/* Sidebar Toggle Button */}
            <button
                className="fixed top-3 left-4 z-50 text-gray-300 focus:outline-none"
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

            {/* Sidebar */}
            <aside
                className={`fixed inset-y-0 left-0 z-40 w-64 bg-cyan-900 p-6 border-r border-gray-300 shadow-lg transition-transform duration-300 ease-in-out ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                <ul className="space-y-4 mt-10">
                    <li
                        className={`flex items-center p-2 cursor-pointer transition duration-200 ease-in-out transform ${
                            active === 0
                                ? "bg-cyan-800 text-white rounded-md"
                                : "text-gray-300 hover:text-primary hover:bg-cyan-800 rounded-md"
                        }`}
                        onClick={() => handleClick(0)}
                    >
                        <Link
                            to="/admin/dashboard"
                            className="flex items-center w-full"
                        >
                            <HomeIcon className="w-6 h-6 mr-2" />
                            <span>Dashboard</span>
                        </Link>
                    </li>
                    <li
                        className={`flex items-center p-2 cursor-pointer transition duration-200 ease-in-out transform ${
                            active === 1
                                ? "bg-cyan-800 text-white rounded-md"
                                : "text-gray-300 hover:text-primary hover:bg-cyan-800 rounded-md"
                        }`}
                        onClick={() => handleClick(1)}
                    >
                        <Link
                            to="/admin/chhat-group-blog"
                            className="flex items-center w-full"
                        >
                            <NewspaperIcon className="w-6 h-6 mr-2" />
                            <span>Chhat Group Blog</span>
                        </Link>
                    </li>
                    <li
                        className={`flex items-center p-2 cursor-pointer transition duration-200 ease-in-out transform ${
                            active === 2
                                ? "bg-cyan-800 text-white rounded-md"
                                : "text-gray-300 hover:text-primary hover:bg-cyan-800 rounded-md"
                        }`}
                        onClick={() => handleClick(2)}
                    >
                        <Link
                            to="/admin/chhat-research-blog"
                            className="flex items-center w-full"
                        >
                            <NewspaperIcon className="w-6 h-6 mr-2" />
                            <span>Chhat Research Blog</span>
                        </Link>
                    </li>
                    <li
                        className={`flex items-center p-2 cursor-pointer transition duration-200 ease-in-out transform ${
                            active === 3
                                ? "bg-cyan-800 text-white rounded-md"
                                : "text-gray-300 hover:text-primary hover:bg-cyan-800 rounded-md"
                        }`}
                        onClick={() => handleClick(3)}
                    >
                        <Link
                            to="/admin/career"
                            className="flex items-center w-full"
                        >
                            <BriefcaseIcon className="w-6 h-6 mr-2" />
                            <span>Career</span>
                        </Link>
                    </li>
                    <li
                        className={`flex items-center p-2 cursor-pointer transition duration-200 ease-in-out transform ${
                            active === 4
                                ? "bg-cyan-800 text-white rounded-md"
                                : "text-gray-300 hover:text-primary hover:bg-cyan-800 rounded-md"
                        }`}
                        onClick={() => handleClick(4)}
                    >
                        <Link
                            to="/admin/contact"
                            className="flex items-center w-full"
                        >
                            <EnvelopeIcon className="w-6 h-6 mr-2" />
                            <span>Contact</span>
                        </Link>
                    </li>
                    <li
                        className={`flex items-center p-2 cursor-pointer transition duration-200 ease-in-out transform ${
                            active === 5
                                ? "bg-cyan-800 text-white rounded-md"
                                : "text-gray-300 hover:text-primary hover:bg-cyan-800 rounded-md"
                        }`}
                        onClick={() => handleClick(5)}
                    >
                        <Link
                            to="/admin/user"
                            className="flex items-center w-full"
                        >
                            <UserGroupIcon className="w-6 h-6 mr-2" />
                            <span>User</span>
                        </Link>
                    </li>
                    <li
                        className={`flex items-center p-2 cursor-pointer transition duration-200 ease-in-out transform ${
                            active === 6
                                ? "bg-cyan-800 text-white rounded-md"
                                : "text-gray-300 hover:text-primary hover:bg-cyan-800 rounded-md"
                        }`}
                        onClick={() => handleClick(6)}
                    >
                        <Link
                            to="/admin/profile"
                            className="flex items-center w-full"
                        >
                            <UserIcon className="w-6 h-6 mr-2" />
                            <span>Profile</span>
                        </Link>
                    </li>
                    <li
                        className={`flex items-center p-2 cursor-pointer transition duration-200 ease-in-out transform ${
                            active === 7
                                ? "bg-cyan-800 text-white rounded-md"
                                : "text-gray-300 hover:text-primary hover:bg-cyan-800 rounded-md"
                        }`}
                        onClick={handleLogout}
                    >
                        <ArrowLeftEndOnRectangleIcon className="w-6 h-6 mr-2" />
                        <span>Logout</span>
                    </li>
                </ul>
            </aside>
        </>
    );
};

export default AdminSideBar;
