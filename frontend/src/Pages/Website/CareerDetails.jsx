import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { axiosClient } from "../../api/axios";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";

const CareerDetails = () => {
    const { id } = useParams();
    const [jobs, setJobs] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchJobs = async () => {
        setLoading(true);
        try {
            const response = await axiosClient.get(`/careers/${id}`);
            setJobs(response.data);
        } catch (error) {
            console.error("Error fetching jobs:", error);
            setError("Failed to fetch job listings");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchJobs();
    }, [id]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center flex-col">
                <div className="flex justify-center items-center border-gray-300 h-7 w-7 animate-spin rounded-full border-2 border-t-sky-700"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="max-w-7xl mx-auto text-cyan-700">
                <div className="flex flex-col text-center items-center py-32">
                    <div className="w-full">
                        <h1 className="font-semibold text-5xl sm:text-5xl md:text-6xl lg:text-7xl">
                            Sorry!
                        </h1>
                    </div>
                    <div className="w-full py-5">
                        <p className="font-medium text-lg sm:text-lg md:text-lg lg:text-xl">
                            {error}
                        </p>
                    </div>
                    <a
                        href="/"
                        className="py-2 border-b-2 font-medium border-cyan-700 hover:scale-110 duration-200 text-sm sm:text-base md:text-base lg:text-base"
                    >
                        Back to homepage
                    </a>
                </div>
            </div>
        );
    }

    if (!jobs) {
        return <p>No job details found.</p>;
    }

    return (
        <div className="max-w-7xl mx-auto mb-5 px-5 font-medium">
            <Breadcrumb curPage={jobs.title} lastPage="Career" lastPageLink="/career" />
            <div className="bg-cyan-100 bg-opacity-50 py-4 px-5 rounded-md text-gray-600">
                <h2 className="text-xl">{jobs.title}</h2>
                <div className="flex justify-between items-center mb-2">
                    <span className="pt-3 font-base">
                        Expire Date: &nbsp;
                        {new Date(jobs.deadline).toLocaleDateString()}
                    </span>
                    <div className="flex items-center text-base">
                        <h2>Location:</h2>
                        <p>&nbsp;{jobs.location}</p>
                    </div>
                </div>
            </div>
            <div className="mt-6 px-5">
                <h2 className="text-lg text-cyan-700">
                    Duties & Responsibilities
                </h2>
                <ul className="pl-5 pt-3 list-disc text-base text-gray-700">
                    {jobs.responsible ? (
                        jobs.responsible
                            .split(".")
                            .filter(Boolean)
                            .map((responsibility, index) => (
                                <li key={index}>{responsibility.trim()}</li>
                            ))
                    ) : (
                        <li>No responsibilities listed.</li>
                    )}
                </ul>
            </div>
            <div className="mt-6 px-5">
                <h2 className="text-lg text-cyan-700">
                    Qualification and Requirement
                </h2>
                <ul className="pl-5 pt-3 list-disc text-gray-700">
                    {jobs.requirement ? (
                        jobs.requirement
                            .split(".")
                            .filter(Boolean)
                            .map((requirement, index) => (
                                <li key={index}>{requirement.trim()}</li>
                            ))
                    ) : (
                        <li>No requirements listed.</li>
                    )}
                </ul>
            </div>
            <div className="mt-6 px-5">
                <h2 className="text-lg text-cyan-700">Benefit Packages:</h2>
                <ul className="pl-5 pt-3 list-disc text-gray-700">
                    {jobs.benefit ? (
                        jobs.benefit
                            .split(".")
                            .filter(Boolean)
                            .map((benefit, index) => (
                                <li key={index}>{benefit.trim()}</li>
                            ))
                    ) : (
                        <li>No benefits listed.</li>
                    )}
                </ul>
            </div>
            <div className="mt-6 px-5 text-gray-700">
                <h2 className="text-xl text-cyan-700 mb-3">How to Apply</h2>
                <a
                    href="mailto:info@chhatgroup.com"
                    className="hover:text-cyan-700 duration-200 underline"
                >
                    Email: info@chhatgroup.com
                </a>
                <p>Phone: +855 12 890 801 / 10 969 005</p>
                <p>
                    Head Office Address: Borey Piphup Thmey La Sen Sok 2 #47-49,
                    Street BT-08M, Phum Krang Angkrong, Sangkat Krang Thnong,
                    Khan Sen Sok, Phnom Penh, Cambodia, 120804
                </p>
            </div>
        </div>
    );
};

export default CareerDetails;
