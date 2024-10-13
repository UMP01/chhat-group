import React, { useState } from "react";
import { Link } from "react-router-dom";
import LogoSidebar from "../../assets/Images/logo.png";
import Swal from "sweetalert2";
import {
    HomeIcon,
    UserGroupIcon,
    NewspaperIcon,
    BriefcaseIcon,
    UserIcon,
    ArrowLeftEndOnRectangleIcon,
    EnvelopeIcon,
} from "@heroicons/react/24/solid";

const AdminSideBar = () => {
    const [active, setActive] = useState(null);

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
                // Perform the logout logic here, if applicable
                window.location.href = "/admin/login";
            }
        } catch (error) {
            Swal.fire("Error", "There was an error logging out", "error");
        }
    };

    return (
        <>
            <aside
                className={`fixed inset-y-0 left-0 z-40 w-64 bg-cyan-900 transition-transform duration-300 ease-in-out `}
            >
                <div className="bg-white py-4">
                    <img
                        className="w-24 mx-auto"
                        src={LogoSidebar}
                        alt="Logo Sidebar"
                    />
                </div>
                <ul className="space-y-4 mt-5 px-6">
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
