import React from 'react';
import { HomeIcon, UserGroupIcon, NewspaperIcon, BriefcaseIcon } from '@heroicons/react/24/solid';

const AdminSideBar = () => {
    return (
        <aside className="bg-secondary h-screen p-6 shadow-md" style={{ background: "var(--secondary-color)" }}>
            <div className="text-center mb-6">
                <h1 className="text-2xl font-bold text-gray-300">Chhat Group</h1>
            </div>
            <ul className="space-y-4">
                <li className="flex items-center text-gray-300 hover:text-primary cursor-pointer">
                    <HomeIcon className="w-6 h-6 mr-2" />
                    <span>Dashboard</span>
                </li>
                <li className="flex items-center text-gray-300 hover:text-primary cursor-pointer">
                    <NewspaperIcon className="w-6 h-6 mr-2" />
                    <span>Blog</span>
                </li>
                <li className="flex items-center text-gray-300 hover:text-primary cursor-pointer">
                    <NewspaperIcon className="w-6 h-6 mr-2" />
                    <span>Chhat Research Blog</span>
                </li>
                <li className="flex items-center text-gray-300 hover:text-primary cursor-pointer">
                    <BriefcaseIcon className="w-6 h-6 mr-2" />
                    <span>Career</span>
                </li>
                <li className="flex items-center text-gray-300 hover:text-primary cursor-pointer">
                    <UserGroupIcon className="w-6 h-6 mr-2" />
                    <span>Users</span>
                </li>
            </ul>
        </aside>
    );
};

export default AdminSideBar;
