import React from "react";
import { Outlet } from "react-router-dom";
import AdminNavBar from "../../../Components/NavigationBar/AdminNavBar";
import AdminSideBar from "../../../Components/NavigationBar/AdminSideBar";
import AdminFooter from "../../../Components/Footer/AdminFooter";

const AdminLayout = () => {
    return (
        <div className="grid grid-cols-6 md:grid-cols-10 gap-0 min-h-screen">
            <div className="col-span-1 md:col-span-1 lg:col-span-2">
                <AdminSideBar />
            </div>
            <div className="col-span-5 md:col-span-9 lg:col-span-8">
                <div className="relative">
                    <AdminNavBar />
                    <main className="m-3">
                        <Outlet />
                    </main>
                    <AdminFooter />
                </div>
            </div>
        </div>
    );
};

export default AdminLayout;
