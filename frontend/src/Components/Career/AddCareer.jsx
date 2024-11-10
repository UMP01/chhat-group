import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { axiosClient } from "../../api/axios"; // Replace with your API logic
import Swal from "sweetalert2";

const AddCareer = () => {
    const [formData, setFormData] = useState({
        title: "",
        location: "",
        deadline: "",
        jobtype: "", // default to 'full time'
        salary: "",
        requirement: "",
        responsible: "",
        benefit: "",
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Make a POST request to create a new career
            await axiosClient.post("/careers", formData);
            Swal.fire("Success", "Career added successfully", "success");
            navigate("/admin/career"); // Redirect to the career list page after successful creation
        } catch (error) {
            Swal.fire("Error", "There was an error adding the career", "error");
        }
    };

    return (
        <div>
            <h2 className="text-2xl font-bold text-cyan-700 mb-4">
                Add Career
            </h2>
            <div className="bg-white flex flex-col space-y-6 p-5 shadow-lg rounded-lg">
                <form
                    onSubmit={handleSubmit}
                    className="space-y-4 text-gray-700"
                >
                    {/* Title & Location Fields */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Title Field */}
                        <div>
                            <label
                                htmlFor="title"
                                className="block font-medium"
                            >
                                Title <span className="text-red-700">*</span>
                            </label>
                            <input
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                placeholder="Enter the job title"
                                className="border p-2 rounded w-full"
                                required
                            />
                        </div>

                        {/* Location Field */}
                        <div>
                            <label
                                htmlFor="location"
                                className="block font-medium"
                            >
                                Location <span className="text-red-700">*</span>
                            </label>
                            <input
                                type="text"
                                name="location"
                                value={formData.location}
                                onChange={handleChange}
                                placeholder="Enter the job location"
                                className="border p-2 rounded w-full"
                                required
                            />
                        </div>
                    </div>

                    {/* Deadline, Salary & Job Type Fields */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {/* Deadline Field */}
                        <div>
                            <label
                                htmlFor="deadline"
                                className="block font-medium"
                            >
                                Deadline <span className="text-red-700">*</span>
                            </label>
                            <input
                                type="date"
                                name="deadline"
                                value={formData.deadline}
                                onChange={handleChange}
                                className="border p-2 rounded w-full"
                                required
                            />
                        </div>

                        {/* Salary Field */}
                        <div>
                            <label
                                htmlFor="salary"
                                className="block font-medium"
                            >
                                Salary <span className="text-red-700">*</span>
                            </label>
                            <input
                                type="number"
                                name="salary"
                                value={formData.salary}
                                onChange={handleChange}
                                placeholder="Enter the salary"
                                className="border p-2 rounded w-full"
                                required
                            />
                        </div>

                        {/* Job Type Field */}
                        <div>
                            <label
                                htmlFor="jobtype"
                                className="block font-medium"
                            >
                                Job Type <span className="text-red-700">*</span>
                            </label>
                            <select
                                name="jobtype"
                                value={formData.jobtype}
                                onChange={handleChange}
                                className="border p-2 rounded w-full"
                            >
                                <option value="" disabled>
                                    Select Category
                                </option>
                                <option value="Full Time">Full time</option>
                                <option value="Part Time">Part time</option>
                            </select>
                        </div>
                    </div>

                    {/* Requirement, Responsible & Benefit Fields */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Requirement Field */}
                        <div>
                            <label
                                htmlFor="requirement"
                                className="block font-medium"
                            >
                                Requirement
                            </label>
                            <textarea
                                name="requirement"
                                value={formData.requirement}
                                onChange={handleChange}
                                placeholder="Enter the job requirements"
                                className="border p-2 rounded w-full"
                                rows="8"
                            />
                        </div>

                        {/* Responsible Field */}
                        <div>
                            <label
                                htmlFor="responsible"
                                className="block font-medium"
                            >
                                Responsible
                            </label>
                            <textarea
                                name="responsible"
                                value={formData.responsible}
                                onChange={handleChange}
                                placeholder="Enter job responsibilities"
                                className="border p-2 rounded w-full"
                                rows="8"
                            />
                        </div>

                        {/* Benefit Field */}
                        <div>
                            <label
                                htmlFor="benefit"
                                className="block font-medium"
                            >
                                Benefit
                            </label>
                            <textarea
                                name="benefit"
                                value={formData.benefit}
                                onChange={handleChange}
                                placeholder="Enter the benefits"
                                className="border p-2 rounded w-full"
                                rows="5"
                            />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-end space-x-3 mt-4">
                        <button
                            type="button"
                            onClick={() => navigate("/admin/career")} // Go back to the career list without saving
                            className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="bg-cyan-700 text-white px-4 py-2 rounded hover:bg-cyan-800"
                        >
                            Add Career
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddCareer;
