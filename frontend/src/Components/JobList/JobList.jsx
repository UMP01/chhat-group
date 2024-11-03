import React, { useState, useEffect } from "react";
import { axiosClient } from "../../api/axios";
import { IoLocationOutline } from "react-icons/io5";
import { IoTimeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const JobList = () => {
    const [jobs, setJobs] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchJobs = async () => {
        setLoading(true);
        setError(null); // Reset error state on fetch
        try {
            const response = await axiosClient.get("/careers");
            const jobList = Array.isArray(response.data) ? response.data : [];
            if (jobList.length === 0) {
                setError("No job listings available at this time.");
            }
            setJobs(jobList);
        } catch (error) {
            console.error("Error fetching jobs:", error);
            setError("Failed to fetch job listings. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchJobs();
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();
        const filteredJobs = jobs.filter((job) =>
            job.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setJobs(filteredJobs);
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
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

    return (
        <div className="rubik">
            <form
                onSubmit={handleSearch}
                className="search-container flex items-center mb-4"
            >
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full py-2 pl-4 pr-20 rounded-l-md text-gray-700 border-t-2 border-l-2 border-b-2 border-sky-600 focus:outline-none focus:ring-0 focus:ring-sky-600"
                    placeholder="Search for jobs..."
                />
                <button
                    type="submit"
                    className="py-2 px-4 bg-sky-600 text-white border-2 border-sky-600 rounded-r-md hover:bg-sky-700"
                >
                    Search
                </button>
            </form>
            <div className="mt-4">
                <ul className="space-y-2">
                    {jobs.length > 0 ? (
                        jobs.map((job) => (
                            <li
                                key={job.id}
                                className="py-2 px-5 rounded-md shadow-md border border-gray-100"
                            >
                                <h3 className="text-xl text-cyan-700 py-1 font-medium">
                                    {job.title}
                                </h3>
                                <div className="flex">
                                    <IoLocationOutline className="mt-3" />
                                    <h3 className="text-gray-700 pb-3 pt-2 pl-2">
                                        {job.location}
                                    </h3>
                                </div>
                                <div className="flex flex-row justify-between text-center">
                                    <div className="flex">
                                        <IoTimeOutline className="mt-1" />
                                        <h3 className="text-gray-700 pb-3 pl-2">
                                            Deadline:{" "}
                                            {new Date(
                                                job.deadline
                                            ).toLocaleDateString()}
                                        </h3>
                                    </div>
                                    <Link to={`/careerdetails/${job.id}`}>
                                        <span className="text-cyan-700 text-sm font-medium hover:text-cyan-600 duration-75 cursor-pointer">
                                            View More
                                        </span>
                                    </Link>
                                </div>
                            </li>
                        ))
                    ) : (
                        <p>No jobs found</p>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default JobList;
