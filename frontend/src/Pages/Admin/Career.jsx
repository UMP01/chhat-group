import React, { useEffect, useState } from "react";
import { IoAdd } from "react-icons/io5";
import { axiosClient } from "../../api/axios";
import { FaRegEdit, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";

const Career = () => {
    const [careers, setCareers] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    // const [currentCareer, setCurrentCareer] = useState(null);
    const [formData, setFormData] = useState({
        title: "",
        location: "",
        dateposted: "",
        jobtype: "",
        salary: "",
        requirement: "",
        benefit: "",
    });

    const fetchCareers = async () => {
        try {
            const response = await axiosClient.get("/careers");
            const activeUsers = Array.isArray(response.data)
                ? response.data
                : [];
                setCareers(activeUsers);
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };

    useEffect(() => {
        fetchCareers();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };


    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString();
    };
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if (isEditing) {
                await axiosClient.put(`/careers/${isEditing}`, formData);
                Swal.fire("Success", "Career updated successfully", "success");
            } else {
                await axiosClient.post("/careers", formData);
                Swal.fire("Success", "Career created successfully", "success");
            }
            resetForm();
            fetchCareers();
        } catch (error) {
            console.error("Error submitting form:", error);
            Swal.fire(
                "Error",
                "There was an error submitting the form",
                "error"
            );
        }
        
    };

    const handleEdit = (career) => {
        setIsEditing(career.id);
        // setCurrentCareer(career);
        setFormData({
            title: career.title,
            location: career.location,
            dateposted: career.dateposted,
            jobtype: career.jobtype,
            salary: career.salary,
            requirement: career.requirement,
            benefit: career.benefit,
         });
        setModalOpen(true);
    };

    const handleDelete =async (id) => {
        try {
            const result = await Swal.fire({
                title: "Are you sure?",
                text: "Do you really want to delete this item?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!",
            });

            if (result.isConfirmed) {
                await axiosClient.delete(`/careers/${id}`);
                Swal.fire("Deleted!", "Career has been deleted.", "success");
                fetchCareers();
            }
        } catch (error) {
            console.error("Error deleting career:", error);
            Swal.fire("Error", "There was an error deleting the career", "error");
        }
    };

    const openModal = () => {
        setIsEditing(false);
        resetForm();
        setModalOpen(true);
    };

    const resetForm = () => {
        setFormData({
            title: "",
            location: "",
            dateposted: "",
            jobtype: "",
            salary: "",
            requirement: "",
            benefit: "",
        });
        // setCurrentCareer(null);
        setModalOpen(false);
    };

    return (
        <div className="flex flex-col space-y-6 p-5 shadow-lg rounded-lg">
            <div className="flex flex-wrap justify-between items-center">
                <div className="text-cyan-700">
                    <h3 className="text-2xl">Career</h3>
                </div>
                <button
                    onClick={openModal}
                    className="bg-cyan-700 px-5 py-3 text-sm rounded-lg text-white flex items-center justify-center hover:bg-cyan-800 transition-colors"
                >
                    <IoAdd className="text-lg text-white font-medium mr-2" />{" "}
                    Add Career
                </button>
            </div>

            <div className="overflow-x-auto px-2">
                <table className="min-w-full table-auto text-sm">
                    <thead>
                        <tr className="bg-cyan-700 rounded-lg text-left">
                            <th className="py-2 px-4 border-2 border-tl-0 border-cyan-700 text-white">
                                No.
                            </th>
                            <th className="py-2 px-4 border-2 border-cyan-700 text-white">
                                Title
                            </th>
                            <th className="py-2 px-4 border-2 border-cyan-700 text-white">
                                Location
                            </th>
                            <th className="py-2 px-4 border-2 border-cyan-700 text-white">
                                DatePosted
                            </th>
                            <th className="py-2 px-4 border-2 border-cyan-700 text-white">
                                JobType
                            </th>
                            <th className="py-2 px-4 border-2 border-cyan-700 text-white">
                                Salary
                            </th>
                            <th className="py-2 px-4 border-2 border-cyan-700 text-white">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {careers.map((career,index) => (
                            <tr
                                key={career.id}
                                className="border-b transition duration-300 ease-in-out hover:bg-gray-100"
                            >
                                <td className="border p-2">
                                    {index+1}
                                </td>
                                <td className="border p-2">
                                    {career.title}
                                </td>
                                <td className="border p-2">
                                    {career.location}
                                </td>
                                <td className="border p-2">
                                    {formatDate(career.dateposted)}
                                </td>
                                <td className="border p-2">
                                    {career.jobtype}
                                </td>
                                <td className="border p-2">
                                    {career.salary}
                                </td>
                                <td className="border p-3">
                                    <div className="flex">
                                        <button
                                            className="rounded-md rounded-r-none border-cyan-700 bg-cyan-700 text-white px-4 py-2 flex items-center hover:bg-cyan-800 duration-300 ease-in-out"
                                            onClick={() => handleEdit(career)}
                                        >
                                            <FaRegEdit className="mr-2" />
                                            Edit
                                        </button>
                                        <button
                                            className="rounded-md rounded-l-none border-red-600 px-4 py-2 bg-red-600 text-white flex items-center hover:bg-red-700 duration-300 ease-in-out"
                                            onClick={() =>
                                                handleDelete(career.id)
                                            }
                                        >
                                            <FaTrash className="mr-2" />{" "}
                                            Delete
                                        </button>
                                    </div>
                                    </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Modal */}
            {modalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded shadow-md w-1/3">
                        <h2 className="text-lg font-normal text-cyan-700 mb-4">
                            {isEditing
                                ? "Edit Career Opportunity"
                                : "Add Career Opportunity"}
                        </h2>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                placeholder="Job Title"
                                className="border p-2 rounded mb-2 w-full"
                                required
                            />
                            <input
                                type="text"
                                name="location"
                                value={formData.location}
                                onChange={handleChange}
                                placeholder="Location"
                                className="border p-2 rounded mb-2 w-full"
                                required
                            />
                            <input
                                type="date"
                                name="dateposted"
                                value={formData.dateposted}
                                onChange={handleChange}
                                className="border p-2 rounded mb-2 w-full"
                                required
                            />
                            <input
                                type="text"
                                name="jobtype"
                                value={formData.jobtype}
                                onChange={handleChange}
                                placeholder="Job Type (e.g., Full-time, Part-time)"
                                className="border p-2 rounded mb-2 w-full"
                                required
                            />
                            <input
                                type="text"
                                name="salary"
                                value={formData.salary}
                                onChange={handleChange}
                                placeholder="Salary"
                                className="border p-2 rounded mb-2 w-full"
                                required
                            />
                            <textarea
                                name="requirement"
                                value={formData.requirement}
                                onChange={handleChange}
                                placeholder="Requirements"
                                className="border p-2 rounded mb-2 w-full"
                                rows="3"
                            />
                            <textarea
                                name="benefit"
                                value={formData.benefit}
                                onChange={handleChange}
                                placeholder="Benefits"
                                className="border p-2 rounded mb-2 w-full"
                                rows="3"
                            />
                            <div className="flex justify-end">
                                <button
                                    type="button"
                                    onClick={resetForm}
                                    className="bg-gray-300 text-black px-5 py-2 rounded mr-2"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="bg-blue-500 text-white px-5 py-2 rounded"
                                >
                                    {isEditing ? "Update" : "Add"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Career;
