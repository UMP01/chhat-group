import React from 'react';
import AdminNavBar from '../../../Components/NavigationBar/AdminNavBar';
import AdminSideBar from '../../../Components/NavigationBar/AdminSideBar';
import AdminFooter from '../../../Components/Footer/AdminFooter';
import Dashboard from '../Dashboard';

const AdminLayout = () => {
    return (
        <div className="grid grid-cols-6 md:grid-cols-10 gap-0 h-full">
            <div className="col-span-1 md:col-span-1 lg:col-span-2">
                <AdminSideBar />
            </div>
            <div className="col-span-5 md:col-span-9 lg:col-span-8 h-full">
                <div className="relative">
                    <AdminNavBar />
                    <main className="p-6 bg-gray-100 dark:bg-gray-900">
                        <Dashboard />
                    </main>
                    <AdminFooter/>
                </div>
            </div>
      </div>
    );
};

export default AdminLayout;