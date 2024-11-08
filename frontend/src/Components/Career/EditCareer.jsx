import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { axiosClient } from "../../api/axios";
import Swal from "sweetalert2";

const EditCareer = () => {
    const { id } = useParams(); // Get the career ID from the URL
    const navigate = useNavigate(); // Use useNavigate for navigation
    const [career, setCareer] = useState(null);
    const [formData, setFormData] = useState({
        title: "",
        location: "",
        deadline: "",
        jobtype: "",
        salary: "",
        requirement: "",
        responsible: "",
        benefit: "",
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        // Fetch the career details when the component mounts
        const fetchCareer = async () => {
            try {
                const response = await axiosClient.get(`/careers/${id}`);
                setCareer(response.data);
                setFormData({
                    title: response.data.title,
                    location: response.data.location,
                    deadline: new Date(response.data.deadline)
                        .toISOString()
                        .split("T")[0],
                    jobtype: response.data.jobtype,
                    salary: response.data.salary,
                    requirement: response.data.requirement,
                    responsible: response.data.responsible,
                    benefit: response.data.benefit,
                });
            } catch (err) {
                setError("Error loading career details");
            } finally {
                setLoading(false);
            }
        };

        fetchCareer();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axiosClient.put(`/careers/${id}`, formData);
            Swal.fire("Success", "Career updated successfully!", "success");
            navigate("/admin/career"); // Redirect to /admin/career after update
        } catch (err) {
            Swal.fire(
                "Error",
                "An error occurred while updating the career",
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
            <h2 className="text-2xl font-bold text-cyan-700 mb-4">
                Edit Career
            </h2>
            <div className="bg-white flex flex-col space-y-6 p-5 shadow-lg rounded-lg">
                <form
                    onSubmit={handleSubmit}
                    className="space-y-4 text-gray-700"
                >
                    {/* Title & Location Fields */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label
                                htmlFor="title"
                                className="block font-medium"
                            >
                                Title
                            </label>
                            <input
                                type="text"
                                name="title"
                                id="title"
                                value={formData.title}
                                onChange={handleChange}
                                className="border p-2 rounded w-full"
                                required
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="location"
                                className="block font-medium"
                            >
                                Location
                            </label>
                            <input
                                type="text"
                                name="location"
                                id="location"
                                value={formData.location}
                                onChange={handleChange}
                                className="border p-2 rounded w-full"
                                required
                            />
                        </div>
                    </div>

                    {/* Deadline, Salary & Job Type Fields */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div>
                            <label
                                htmlFor="deadline"
                                className="block font-medium"
                            >
                                Deadline
                            </label>
                            <input
                                type="date"
                                name="deadline"
                                id="deadline"
                                value={formData.deadline}
                                onChange={handleChange}
                                className="border p-2 rounded w-full"
                                required
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="salary"
                                className="block font-medium"
                            >
                                Salary
                            </label>
                            <input
                                type="number"
                                name="salary"
                                id="salary"
                                value={formData.salary}
                                onChange={handleChange}
                                className="border p-2 rounded w-full"
                                required
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="jobtype"
                                className="block font-medium"
                            >
                                Job Type
                            </label>
                            <select
                                name="jobtype"
                                id="jobtype"
                                value={formData.jobtype}
                                onChange={handleChange}
                                className="border p-2 rounded w-full"
                                required
                            >
                                <option value="full time">Full time</option>
                                <option value="part time">Part time</option>
                            </select>
                        </div>
                    </div>

                    {/* Requirement, Responsible & Benefit Fields */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label
                                htmlFor="requirement"
                                className="block font-medium"
                            >
                                Requirement
                            </label>
                            <textarea
                                name="requirement"
                                id="requirement"
                                value={formData.requirement}
                                onChange={handleChange}
                                className="border p-2 rounded w-full"
                                rows="8"
                                placeholder="Enter the requirements"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="responsible"
                                className="block font-medium"
                            >
                                Responsible
                            </label>
                            <textarea
                                name="responsible"
                                id="responsible"
                                value={formData.responsible}
                                onChange={handleChange}
                                className="border p-2 rounded w-full"
                                rows="8"
                                placeholder="Enter the responsibilities"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="benefit"
                                className="block font-medium"
                            >
                                Benefit
                            </label>
                            <textarea
                                name="benefit"
                                id="benefit"
                                value={formData.benefit}
                                onChange={handleChange}
                                className="border p-2 rounded w-full"
                                rows="5"
                                placeholder="Enter the benefits"
                            />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-end space-x-3 mt-4">
                        <button
                            type="button"
                            className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400"
                            onClick={() => navigate("/admin/career")} // Use navigate to go back to the list
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="bg-cyan-700 text-white px-4 py-2 rounded hover:bg-cyan-800"
                        >
                            Update Career
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditCareer;
