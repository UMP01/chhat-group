import React, { useState, useEffect } from "react";
import { axiosClient } from "../../api/axios";
import { IoLocationOutline, IoTimeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const ITEMS_PER_PAGE = 5; // Number of jobs per page

const JobList = () => {
    const [jobs, setJobs] = useState([]); // Full list of jobs
    const [filteredJobs, setFilteredJobs] = useState([]); // Jobs to display (filtered)
    const [searchTerm, setSearchTerm] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);

    // Fetch jobs from API
    const fetchJobs = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await axiosClient.get("/careers");
            const jobList = Array.isArray(response.data) ? response.data : [];
            if (jobList.length === 0) {
                setError("No job listings available at this time.");
            }
            setJobs(jobList); // Save full list of jobs
            setFilteredJobs(jobList); // Initially show all jobs
        } catch (error) {
            console.error("Error fetching jobs:", error);
            setError("Failed to fetch job listings. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    // Handle search functionality
    const handleSearch = (e) => {
        e.preventDefault();
        const filtered = jobs.filter((job) =>
            job.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredJobs(filtered);
        setCurrentPage(1); // Reset to first page after search
    };

    // Handle pagination change
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // Get jobs for the current page
    const indexOfLastJob = currentPage * ITEMS_PER_PAGE;
    const indexOfFirstJob = indexOfLastJob - ITEMS_PER_PAGE;
    const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

    // Calculate total pages
    const totalPages = Math.ceil(filteredJobs.length / ITEMS_PER_PAGE);

    useEffect(() => {
        fetchJobs();
    }, []);

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
        <div className="font-medium">
            <form
                onSubmit={handleSearch}
                className="search-container flex items-center mb-4"
            >
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full py-2 pl-4 pr-20 text-sm sm:text-sm md:text-base lg:text-base rounded-l-md text-gray-700 border-t-2 border-l-2 border-b-2 border-cyan-700 focus:outline-none focus:ring-0 focus:ring-cyan-700"
                    placeholder="Search for jobs..."
                />
                <button
                    type="submit"
                    className="py-2 px-4 bg-cyan-700 text-white border-2 text-sm sm:text-sm md:text-base lg:text-base border-cyan-700 rounded-r-md hover:bg-cyan-800"
                >
                    Search
                </button>
            </form>
            <div className="mt-4">
                <ul className="space-y-2">
                    {currentJobs.length > 0 ? (
                        currentJobs.map((job) => (
                            <li
                                key={job.id}
                                className="py-2 px-5 rounded-md shadow-sm bg-cyan-50 bg-opacity-20 border border-gray-100"
                            >
                                <h3 className="text-base sm:text-base md:text-base lg:text-lg text-cyan-700 py-1 font-medium">
                                    {job.title}
                                </h3>
                                <div className="flex">
                                    <IoLocationOutline className="mt-3" />
                                    <h3 className="text-gray-700 pb-3 pt-2 pl-2 text-sm sm:text-base md:text-base lg:text-base">
                                        {job.location}
                                    </h3>
                                </div>
                                <div className="flex flex-row justify-between text-center">
                                    <div className="flex">
                                        <IoTimeOutline className="mt-1" />
                                        <h3 className="text-gray-700 pb-3 pl-2 text-sm sm:text-base md:text-base lg:text-base">
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
                        <div className="bg-cyan-100 bg-opacity-50 text-cyan-700 p-5">
                            <p className="text-center">No Jobs Found.</p>
                        </div>
                    )}
                </ul>
            </div>

            {/* Conditionally render pagination if jobs are found */}
            {filteredJobs.length > 0 && (
                <div className="flex justify-between items-center mt-4">
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="bg-cyan-700 text-white text-sm px-4 py-2 rounded disabled:opacity-50 inline-flex hover:shadow-lg duration-300 hover:bg-cyan-600"
                    >
                        Previous
                    </button>
                    <div>
                        Page {currentPage} of {totalPages}
                    </div>
                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="bg-cyan-700 text-white text-sm px-4 py-2 rounded disabled:opacity-50 inline-flex hover:shadow-lg duration-300 hover:bg-cyan-600"
                    >
                        Next
                    </button>
                </div>
            )}
        </div>
    );
};

export default JobList;
