import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { axiosClient } from "../../api/axios"; // Replace with your API logic
import { FaRegEdit, FaTrash, FaSyncAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { IoAdd } from "react-icons/io5";

const ITEMS_PER_PAGE = 5;

const Career = () => {
    const [careers, setCareers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState(""); // Track search input

    const fetchCareers = async () => {
        setLoading(true);
        try {
            const response = await axiosClient.get("/careers");
            setCareers(response.data || []);
        } catch (err) {
            setError("An error occurred while fetching careers");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCareers();
    }, []);

    // Filter careers based on the search term
    const filteredCareers = careers.filter(({ title, location, jobtype }) =>
        [title, location, jobtype].some((field) =>
            field.toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

    const indexOfLastCareer = currentPage * ITEMS_PER_PAGE;
    const indexOfFirstCareer = indexOfLastCareer - ITEMS_PER_PAGE;
    const currentCareers = filteredCareers.slice(
        indexOfFirstCareer,
        indexOfLastCareer
    );
    const totalPages = Math.ceil(filteredCareers.length / ITEMS_PER_PAGE);

    const handlePageChange = (pageNumber) => {
        if (pageNumber < 1 || pageNumber > totalPages) return;
        setCurrentPage(pageNumber);
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleRefresh = () => {
        fetchCareers(); // Simply call the fetch function again
        setSearchTerm(""); // Reset search field
    };

    const handleDelete = async (id) => {
        try {
            const result = await Swal.fire({
                title: "Are you sure?",
                text: "Do you really want to delete this career?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!",
            });

            if (result.isConfirmed) {
                await axiosClient.delete(`/careers/${id}`);
                Swal.fire(
                    "Deleted!",
                    "The career has been deleted.",
                    "success"
                );
                fetchCareers();
            }
        } catch (err) {
            Swal.fire(
                "Error",
                "There was an error deleting the career",
                "error"
            );
        }
    };

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

    return (
        <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Career</h2>
            <div className="bg-white flex flex-col space-y-6 p-5 shadow-lg rounded-lg">
                <div className="flex justify-between px-2 text-sm">
                    <input
                        type="text"
                        placeholder="Search Careers (Title, Location, Job Type)"
                        value={searchTerm}
                        onChange={handleSearchChange}
                        className="border px-3 py-2 rounded w-2/6 font-medium text-gray-600"
                    />
                    <div className="flex gap-5">
                        <Link
                            to="/admin/career/add"
                            className="bg-cyan-700 font-medium text-white py-1 px-4 rounded hover:bg-cyan-800 flex items-center"
                        >
                            <IoAdd className="mr-2" /> Add Career
                        </Link>
                        <button
                            onClick={handleRefresh}
                            className="bg-green-600 font-medium text-white py-2 px-4 rounded hover:bg-green-700 flex items-center"
                        >
                            <FaSyncAlt className="mr-2" /> Refresh
                        </button>
                    </div>
                </div>

                <div className="overflow-x-auto px-2 mt-6">
                    <table className="min-w-full text-sm table-auto">
                        <thead>
                            <tr className="bg-cyan-700 text-white">
                                {[
                                    "No.",
                                    "Title",
                                    "Location",
                                    "Deadline",
                                    "Job Type",
                                    "Salary",
                                    "Actions",
                                ].map((header, i) => (
                                    <th
                                        key={i}
                                        className="py-2 px-4 font-medium text-left"
                                    >
                                        {header}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {currentCareers.length > 0 ? (
                                currentCareers.map((career, index) => (
                                    <tr
                                        key={career.id}
                                        className="border-b hover:bg-gray-100"
                                    >
                                        <td className="border py-2 px-4 font-medium text-gray-700">
                                            {index +
                                                1 +
                                                (currentPage - 1) *
                                                    ITEMS_PER_PAGE}
                                        </td>
                                        <td className="border py-2 px-4 font-medium text-gray-700">
                                            {career.title}
                                        </td>
                                        <td className="border py-2 px-4 font-medium text-gray-700">
                                            {career.location}
                                        </td>
                                        <td className="border py-2 px-4 font-medium text-gray-700">
                                            {new Date(
                                                career.deadline
                                            ).toLocaleDateString()}
                                        </td>
                                        <td className="border py-2 px-4 font-medium text-gray-700 capitalize">
                                            {career.jobtype}
                                        </td>
                                        <td className="border py-2 px-4 font-medium text-gray-700">
                                            {career.salary} $
                                        </td>
                                        <td className="border py-2 px-4 font-medium text-gray-700">
                                            <div className="flex">
                                                <Link
                                                    to={`/admin/career/edit/${career.id}`}
                                                    className="bg-cyan-700 font-medium text-white px-4 py-2 flex items-center rounded-l-md hover:bg-cyan-800"
                                                >
                                                    <FaRegEdit className="mr-2" />{" "}
                                                    Edit
                                                </Link>
                                                <button
                                                    onClick={() =>
                                                        handleDelete(career.id)
                                                    }
                                                    className="bg-red-600 font-medium text-white px-4 py-2 rounded-r-md hover:bg-red-700 flex items-center"
                                                >
                                                    <FaTrash className="mr-2" />{" "}
                                                    Delete
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td
                                        colSpan="7"
                                        className="text-center p-4 font-medium text-gray-700"
                                    >
                                        No careers found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                <div className="flex justify-between items-center mt-4">
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="bg-cyan-700 text-white text-sm px-4 py-2 rounded disabled:opacity-50"
                    >
                        Previous
                    </button>
                    <div>
                        Page {currentPage} of {totalPages}
                    </div>
                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="bg-cyan-700 text-white text-sm px-4 py-2 rounded disabled:opacity-50"
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Career;
