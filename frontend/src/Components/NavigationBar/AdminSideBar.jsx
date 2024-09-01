import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import {
    HomeIcon,
    UserGroupIcon,
    NewspaperIcon,
    BriefcaseIcon,
    UserIcon,
    ArrowLeftEndOnRectangleIcon,
} from "@heroicons/react/24/solid";

const AdminSideBar = () => {
    const [active, setActive] = useState(null); // State to track active link

    const handleClick = (index) => {
        setActive(index); // Set the active link index
    };

    return (
        <aside
            className="bg-secondary h-screen p-6 shadow-md"
            style={{ background: "var(--secondary-color)" }}
        >
            <div className="text-center mb-6">
                <h1 className="text-2xl font-bold text-gray-300">Chhat Group</h1>
            </div>
            <ul className="space-y-4">
                <li
                    className={`flex items-center p-2 cursor-pointer transition duration-200 ease-in-out transform ${
                        active === 0
                            ? "bg-sky-600 text-white font-bold rounded-md"
                            : "text-gray-300 hover:text-primary hover:bg-sky-800 rounded-md"
                    }`}
                    onClick={() => handleClick(0)}
                >
                    <Link to="/admin/dashboard" className="flex items-center w-full">
                        <HomeIcon className="w-6 h-6 mr-2" />
                        <span>Dashboard</span>
                    </Link>
                </li>
                <li
                    className={`flex items-center p-2 cursor-pointer transition duration-200 ease-in-out transform ${
                        active === 1
                            ? "bg-sky-600 text-white font-bold rounded-md"
                            : "text-gray-300 hover:text-primary hover:bg-sky-800 rounded-md"
                    }`}
                    onClick={() => handleClick(1)}
                >
                    <Link to="/admin/chhat-group-blog" className="flex items-center w-full">
                        <NewspaperIcon className="w-6 h-6 mr-2" />
                        <span>Chhat Group Blog</span>
                    </Link>
                </li>
                <li
                    className={`flex items-center p-2 cursor-pointer transition duration-200 ease-in-out transform ${
                        active === 2
                            ? "bg-sky-600 text-white font-bold rounded-md"
                            : "text-gray-300 hover:text-primary hover:bg-sky-800 rounded-md"
                    }`}
                    onClick={() => handleClick(2)}
                >
                    <Link to="/admin/chhat-research-blog" className="flex items-center w-full">
                        <NewspaperIcon className="w-6 h-6 mr-2" />
                        <span>Chhat Research Blog</span>
                    </Link>
                </li>
                <li
                    className={`flex items-center p-2 cursor-pointer transition duration-200 ease-in-out transform ${
                        active === 3
                            ? "bg-sky-600 text-white font-bold rounded-md"
                            : "text-gray-300 hover:text-primary hover:bg-sky-800 rounded-md"
                    }`}
                    onClick={() => handleClick(3)}
                >
                    <Link to="/admin/career" className="flex items-center w-full">
                        <BriefcaseIcon className="w-6 h-6 mr-2" />
                        <span>Career</span>
                    </Link>
                </li>
                <li
                    className={`flex items-center p-2 cursor-pointer transition duration-200 ease-in-out transform ${
                        active === 4
                            ? "bg-sky-600 text-white font-bold rounded-md"
                            : "text-gray-300 hover:text-primary hover:bg-sky-800 rounded-md"
                    }`}
                    onClick={() => handleClick(4)}
                >
                    <Link to="/admin/user" className="flex items-center w-full">
                        <UserGroupIcon className="w-6 h-6 mr-2" />
                        <span>User</span>
                    </Link>
                </li>
                <li
                    className={`flex items-center p-2 cursor-pointer transition duration-200 ease-in-out transform ${
                        active === 5
                            ? "bg-sky-600 text-white font-bold rounded-md"
                            : "text-gray-300 hover:text-primary hover:bg-sky-800 rounded-md"
                    }`}
                    onClick={() => handleClick(5)}
                >
                    <Link to="/admin/profile" className="flex items-center w-full">
                        <UserIcon className="w-6 h-6 mr-2" />
                        <span>Profile</span>
                    </Link>
                </li>
                <li
                    className={`flex items-center p-2 cursor-pointer transition duration-200 ease-in-out transform ${
                        active === 6
                            ? "bg-sky-600 text-white font-bold rounded-md"
                            : "text-gray-300 hover:text-primary hover:bg-sky-800 rounded-md"
                    }`}
                    onClick={() => handleClick(6)}
                >
                    <Link to="/admin/login" className="flex items-center w-full">
                        <ArrowLeftEndOnRectangleIcon className="w-6 h-6 mr-2" />
                        <span>Logout</span>
                    </Link>
                </li>
            </ul>
        </aside>
    );
};

export default AdminSideBar;
