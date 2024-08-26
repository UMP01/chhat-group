import React from 'react';
import { BellIcon, UserIcon } from '@heroicons/react/24/solid'; // Import icons
import UserAvatar from '../../assets/Images/logo.png'; // Update path if needed
import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import Content from '../ContentChhatReasech/Content';

const AdminNavBar = () => {
    return (
        <nav className="bg-white dark:bg-boxdark shadow py-4 px-6">
            <div className="flex items-center justify-between">
                <div className="text-xl font-semibold text-gray-800 dark:text-white">
                    Dashboard
                </div>
                <div className="flex items-center space-x-4">
                    <div className="relative">
                        <BellIcon className="w-6 h-6 text-gray-600 dark:text-white hover:text-primary" />
                        <span className="absolute top-0 right-0 flex items-center justify-center w-3 h-3 bg-red-600 text-white text-xs rounded-full">3</span>
                    </div>
                    <Menu as="div" className="relative">
                        <Menu.Button className="flex items-center space-x-2">
                            <img className="w-8 h-8 rounded-full" src={UserAvatar} alt="User Avatar" />
                            <span className="font-medium text-gray-800 dark:text-white">Super User</span>
                        </Menu.Button>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right bg-white dark:bg-boxdark divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <div className="p-1">
                                    <Menu.Item>
                                        {({ active }) => (
                                            <button
                                                className={`${
                                                    active ? 'bg-indigo-600 text-white' : 'text-gray-900 dark:text-gray-100'
                                                } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                                            >
                                                <UserIcon className="w-5 h-5 mr-2" aria-hidden="true" />
                                                User Profile
                                            </button>
                                        )}
                                    </Menu.Item>
                                </div>
                                <div className="p-1">
                                    <Menu.Item>
                                        {({ active }) => (
                                            <button
                                                className={`${
                                                    active ? 'bg-indigo-600 text-white' : 'text-gray-900 dark:text-gray-100'
                                                } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                                            >
                                                <svg
                                                    className="w-5 h-5 mr-2 stroke-current"
                                                    aria-hidden="true"
                                                    fill="none"
                                                    strokeWidth="1.5"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" strokeLinecap="round" strokeLinejoin="round"></path>
                                                </svg>
                                                Logout
                                            </button>
                                        )}
                                    </Menu.Item>
                                </div>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                </div>
            </div>
        </nav>
    );
};

export default AdminNavBar;
