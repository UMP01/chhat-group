import React, { useEffect, useState } from "react";
import {
    BookOpenIcon,
    EnvelopeIcon,
    NewspaperIcon,
} from "@heroicons/react/24/solid";
import CardDataStats from "../../Components/CardDataStats/CardDataStats";
import { axiosClient } from "../../api/axios";
import ApexCharts from "react-apexcharts";

const Dashboard = () => {
    const iconClass = "w-8 h-8 text-gray-700";
    const [contactCount, setContactCount] = useState(0);
    const [groupBlogCount, setGroupBlogCount] = useState(0);
    const [researchBlogCount, setResearchBlogCount] = useState(0);
    const [careersCount, setCareersCount] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchCounts = async () => {
        setLoading(true);
        try {
            const [contactsResponse, blogsResponse, careersResponse] =
                await Promise.all([
                    axiosClient.get("/contacts"),
                    axiosClient.get("/blogs"),
                    axiosClient.get("/careers"),
                ]);

            setContactCount(contactsResponse.data.length);
            setCareersCount(careersResponse.data.length);

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
            title: "Job Announcement",
            statics: careersCount.toString(),
            background: "bg-green-100",
            icon: <BookOpenIcon className={iconClass} />,
            link: "/admin/career",
        },
        {
            title: "Chhat Group Articles",
            statics: groupBlogCount.toString(),
            background: "bg-yellow-100",
            icon: <NewspaperIcon className={iconClass} />,
            link: "/admin/blog",
        },
        {
            title: "Chhat Research Articles",
            statics: researchBlogCount.toString(),
            background: "bg-red-100",
            icon: <NewspaperIcon className={iconClass} />,
            link: "/admin/blog",
        },
    ];

    // Data for ApexCharts
    const donutSeries = [contactCount, careersCount, groupBlogCount, researchBlogCount];
    const donutOptions = {
        chart: {
            type: "donut",
            width: "100%", // Set chart width
            height: 200, // Adjusted height for smaller size
        },
        labels: ["Contacts", "Careers", "Group Articles", "Research Articles"],
        dataLabels: {
            enabled: true,
            formatter: (val) => `${val.toFixed(1)}%`,
        },
        legend: {
            position: "bottom",
        },
        tooltip: {
            enabled: true,
            y: {
                formatter: (value) => `${value} entries`,
            },
        },
    };

    const columnSeries = [
        {
            data: [
                { x: "Contacts", y: contactCount },
                { x: "Careers", y: careersCount },
                { x: "Group Articles", y: groupBlogCount },
                { x: "Research Articles", y: researchBlogCount },
            ],
        },
    ];
    const columnOptions = {
        chart: {
            type: "bar",
            distributed: true,
            width: "100%",
            height: 200, // Adjusted height for smaller size
        },
        colors: ["#1E90FF", "#3CB371", "#FFD700", "#FF6347"],
        xaxis: {
            categories: ["Contacts", "Careers", "Group Articles", "Research Articles"],
        },
        legend: {
            show: false,
        },
    };

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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-6">
                <div className="bg-white shadow-md rounded-lg p-4">
                    <h2 className="text-sm font-semibold text-center mb-2">Data Distribution - Donut Chart</h2>
                    <ApexCharts
                        options={donutOptions}
                        series={donutSeries}
                        type="donut"
                        width="100%"
                    />
                </div>
                <div className="bg-white shadow-md rounded-lg p-4">
                    <h2 className="text-sm font-semibold text-center mb-2">Data Count - Column Chart</h2>
                    <ApexCharts
                        options={columnOptions}
                        series={columnSeries}
                        type="bar"
                        width="100%"
                    />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
