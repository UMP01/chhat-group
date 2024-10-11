import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import AdminNavBar from "../../../Components/NavigationBar/AdminNavBar";
import AdminSideBar from "../../../Components/NavigationBar/AdminSideBar";
import AdminFooter from "../../../Components/Footer/AdminFooter";

const AdminLayout = () => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="flex h-screen overflow-hidden">
            {/* Sidebar */}
            <aside
                className={`fixed inset-y-0 left-0 z-40 w-64 bg-cyan-900 p-6 border-r border-gray-300 shadow-lg transition-transform duration-300 ease-in-out ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                <AdminSideBar /> {/* Ensure AdminSideBar accepts props if needed */}
            </aside>

            {/* Main content area */}
            <div className={`flex-1 flex flex-col transition-all duration-300 ${isOpen ? "ml-64" : "ml-0"}`}>
                <AdminNavBar toggleSidebar={toggleSidebar} isOpen={isOpen} />
                <main className="flex-1 p-4 overflow-auto bg-gray-100">
                    <Outlet />
                </main>
                <AdminFooter />
            </div>
        </div>
    );
};

export default AdminLayout;
