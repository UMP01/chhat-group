import React from "react";
import ChhatResearchLogo from "../../assets/Images/ChhatResearch/ChhatResearchLogo.png";
const Sidebar = ({ activeTab, onTabChange, categories }) => {
    return (
        <div className="lg:w-1/4 lg:h-screen">
            <div className="p-4 ps-6">
                <img src={ChhatResearchLogo} alt="Chhat Research Logo" className="h-16" />
            </div>
            <nav className="ms-8">
                <ul>
                    {categories.map((category) => (
                        <li key={category.id}>
                            <button
                                className={`block py-2 px-4 w-full text-left my-2 ${
                                    activeTab === category.id
                                        ? "text-cyan-700 bg-cyan-50 rounded-md font-medium"
                                        : "hover:bg-gray-100 text-gray-700 rounded-md font-medium"
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
