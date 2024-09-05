import React from "react";
import {
    EyeIcon,
    CubeIcon,
    UserIcon,
    ShoppingBagIcon,
} from "@heroicons/react/24/solid"; // Updated import
import CardDataStats from "../../Components/CardDataStats/CardDataStats";

const Dashboard = () => {
    const iconClass = "w-10 h-10 text-gray-400";

    return (
        <div className="flex flex-col space-y-6 p-5 shadow-lg">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <CardDataStats title="Products" statics="22,222">
                    <CubeIcon className={iconClass} />
                </CardDataStats>
                <CardDataStats title="Categories" statics="22,222">
                    <EyeIcon className={iconClass} />
                </CardDataStats>
                <CardDataStats title="Customers" statics="22,222">
                    <UserIcon className={iconClass} />
                </CardDataStats>
                <CardDataStats title="Sales" statics="22,222">
                    <ShoppingBagIcon className={iconClass} />
                </CardDataStats>
            </div>
        </div>
    );
};

export default Dashboard;
