import React from "react";

const Sidebar = ({ activeTab, onTabChange, categories }) => {
    return (
        <div className="lg:w-1/4">
            <div className="p-4 ps-6">
                <h1 className="text-xl text-gray-700">Chhat Research</h1>
            </div>
            <nav className="ms-8">
                <ul>
                    {categories.map((category) => (
                        <li key={category.id}>
                            <button
                                className={`block py-2 px-4 w-full text-left ${
                                    activeTab === category.id
                                        ? "text-cyan-700"
                                        : "hover:bg-gray-100 text-gray-700 rounded-md"
                                }`}
                                onClick={() => onTabChange(category.id)}
                            >
                                {category.name}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;
