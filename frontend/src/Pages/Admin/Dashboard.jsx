// src/Dashboard.js
import React, { useEffect, useState } from "react";
import {
    BookOpenIcon,
    EnvelopeIcon,
    NewspaperIcon,
} from "@heroicons/react/24/solid";
import CardDataStats from "../../Components/CardDataStats/CardDataStats";
import { axiosClient } from "../../api/axios";

const Dashboard = () => {
    const iconClass = "w-9 h-9 text-gray-700";
    const [contactCount, setContactCount] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCounts = async () => {
            setLoading(true);
            try {
                const [productsResponse] = await Promise.all([
                    axiosClient.get("/contacts"),
                ]);

                setContactCount(productsResponse.data.length);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchCounts();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    const cardData = [
        {
            title: "Contact Submit",
            statics: contactCount.toString(),
            background: "bg-blue-100",
            icon: <EnvelopeIcon className={iconClass} />,
            link: "/admin/contact",
        },
        {
            title: "Applicant Apply",
            statics: "3",
            background: "bg-green-100",
            icon: <BookOpenIcon className={iconClass} />,
            link: "/admin/career",
        },
        {
            title: "Articles",
            statics: "3",
            background: "bg-yellow-100",
            icon: <NewspaperIcon className={iconClass} />,
            link: "/admin/chhat-group-blog",
        },
        {
            title: "Articles",
            statics: "3",
            background: "bg-red-100",
            icon: <NewspaperIcon className={iconClass} />,
            link: "/admin/chhat-research-blog",
        },
    ];

    return (
        <div className="flex flex-col space-y-6 p-5 shadow-lg">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {cardData.map((card, index) => (
                    <CardDataStats
                        key={index}
                        title={card.title}
                        statics={card.statics}
                        background={card.background}
                        link={card.link}
                    >
                        {card.icon}
                    </CardDataStats>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;
