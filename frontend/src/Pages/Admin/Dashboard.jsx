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
    const iconClass = "w-8 h-8 text-gray-700";
    const [contactCount, setContactCount] = useState(0);
    const [groupBlogCount, setGroupBlogCount] = useState(0);
    const [researchBlogCount, setResearchBlogCount] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchCounts = async () => {
        setLoading(true);
        try {
            const [contactsResponse, blogsResponse] = await Promise.all([
                axiosClient.get("/contacts"),
                axiosClient.get("/blogs"),
            ]);

            setContactCount(contactsResponse.data.length);

            if (Array.isArray(blogsResponse.data)) {
                const groupArticles = blogsResponse.data.filter(
                    (article) => article.category === "Chhat Group"
                );
                const researchArticles = blogsResponse.data.filter(
                    (article) => article.category === "Chhat Research"
                );

                setGroupBlogCount(groupArticles.length);
                setResearchBlogCount(researchArticles.length);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
            setError("An error occurred while fetching data");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCounts();
    }, []);

    if (loading) {
        return (
            <div className="py-72 flex items-center justify-center">
                <div className="flex justify-center items-center border-gray-300 h-7 w-7 animate-spin rounded-full border-2 border-t-sky-700"></div>
            </div>
        );
    }
    if (error) {
        return (
            <div className="bg-red-100 text-red-700 py-5 px-5 rounded-md text-center">
                <p>Error: {error}</p>
            </div>
        );
    }

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
            title: "Chhat Group Articles",
            statics: groupBlogCount.toString(), // Use the group blog count
            background: "bg-yellow-100",
            icon: <NewspaperIcon className={iconClass} />,
            link: "/admin/blog",
        },
        {
            title: "Chhat Research Articles",
            statics: researchBlogCount.toString(), // Use the research blog count
            background: "bg-red-100",
            icon: <NewspaperIcon className={iconClass} />,
            link: "/admin/blog",
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
