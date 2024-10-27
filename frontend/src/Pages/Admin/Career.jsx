import React, { useEffect, useState } from "react";
import { IoAdd } from "react-icons/io5";
import { axiosClient } from "../../api/axios";
import { FaRegEdit, FaTrash, FaSync } from "react-icons/fa";
import Swal from "sweetalert2";

const Career = () => {
    const [careers, setCareers] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [modalOpen, setModalOpen] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState(initialFormData());
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    function initialFormData() {
        return {
            title: "",
            location: "",
            dateline: "",
            jobtype: "",
            salary: "",
            requirement: "",
            responsible: "",
            benefit: "",
        };
    }

    const fetchCareers = async () => {
        setLoading(true);
        try {
            const response = await axiosClient.get("/careers");
            setCareers(Array.isArray(response.data) ? response.data : []);
        } catch (error) {
            console.error("Error fetching careers:", error);
            setError("An error occured while fetching data");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCareers();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
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
        setFormData({
            title: career.title,
            location: career.location,
            dateline: new Date(career.dateline).toISOString().split('T')[0],
            jobtype: career.jobtype,
            salary: career.salary,
            requirement: career.requirement,
            responsible: career.responsible,
            benefit: career.benefit,
        });
        setModalOpen(true);
    };

    const handleDelete = async (id) => {
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
            Swal.fire(
                "Error",
                "There was an error deleting the career",
                "error"
            );
        }
    };

    const resetForm = () => {
        setFormData(initialFormData());
        setIsEditing(false);
        setModalOpen(false);
    };

    const filteredCareers = careers.filter(
        ({ title, location, dateline, jobtype }) =>
            [title, location, dateline, jobtype].some((field) =>
                field.toLowerCase().includes(searchTerm.toLowerCase())
            )
    );
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
        <div className="flex flex-col p-2 space-y-6 shadow-lg rounded-lg">
            <div className="flex justify-between px-2 text-sm">
                <input
                    type="text"
                    placeholder="Search Careers"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="border px-3 py-2 rounded w-2/6 font-medium text-gray-600"
                />
                <div className="flex gap-5">
                    <button
                        onClick={() => {
                            resetForm();
                            setModalOpen(true);
                        }}
                        className="bg-cyan-700 font-medium text-white py-1 px-4 rounded hover:bg-cyan-800 flex items-center"
                    >
                        <IoAdd className="mr-2" /> Add Career
                    </button>
                    <button
                        onClick={fetchCareers}
                        className="bg-green-600 font-medium text-white py-2 px-4 rounded hover:bg-green-700 flex items-center"
                    >
                        <FaSync className="mr-2" /> Refresh
                    </button>
                </div>
            </div>

            <div className="overflow-x-auto px-2">
                <table className="min-w-full text-sm">
                    <thead>
                        <tr className="bg-cyan-700 text-white">
                            {[
                                "No.",
                                "Title",
                                "Location",

                                "Date Line",
                                "Job Type",
                                "Salary",
                                "Actions",
                            ].map((header, i) => (
                                <th
                                    key={i}
                                    className="py-2 px-4 font-medium text-start"
                                >
                                    {header}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {filteredCareers.length > 0 ? (
                            filteredCareers.map((career, index) => (
                                <tr
                                    key={career.id}
                                    className="border-b hover:bg-gray-100"
                                >
                                    <td className="border py-2 px-4 font-medium text-gray-700">
                                        {index + 1}
                                    </td>
                                    <td className="border py-2 px-4 font-medium text-gray-700">
                                        {career.title}
                                    </td>
                                    <td className="border py-2 px-4 font-medium text-gray-700">
                                        {career.location}
                                    </td>
                                    <td className="border py-2 px-4 font-medium text-gray-700">
                                        {new Date(
                                            career.dateline
                                        ).toLocaleDateString()}
                                    </td>
                                    <td className="border py-2 px-4 font-medium text-gray-700">
                                        {career.jobtype}
                                    </td>
                                    <td className="border py-2 px-4 font-medium text-gray-700">
                                        {career.salary}
                                    </td>
                                    <td className="border py-2 px-4 font-medium text-gray-700">
                                        <div className="flex">
                                            <button
                                                className="bg-cyan-700 font-medium text-white px-4 py-2 flex items-center rounded-l-md hover:bg-cyan-800  duration-300 ease-in-out"
                                                onClick={() =>
                                                    handleEdit(career)
                                                }
                                            >
                                                <FaRegEdit className="mr-2" />{" "}
                                                Edit
                                            </button>
                                            <button
                                                className="bg-red-600 font-medium text-white px-4 py-2 rounded-r-md hover:bg-red-700 flex items-center duration-300 ease-in-out"
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

            {modalOpen && (
                <Modal
                    isOpen={modalOpen}
                    onClose={resetForm}
                    formData={formData}
                    onChange={handleChange}
                    onSubmit={handleSubmit}
                    isEditing={isEditing}
                />
            )}
        </div>
    );
};

const Modal = ({
    isOpen,
    onClose,
    formData,
    onChange,
    onSubmit,
    isEditing,
}) => (
    <div
        className={`fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 ${
            isOpen ? "block" : "hidden"
        }`}
    >
        <div className="bg-white rounded-lg shadow-lg px-6 py-3 w-1/3 border-2 max-h-[90vh] overflow-y-auto">
            <h2 className="text-lg font-normal mb-4 text-cyan-700">
                {isEditing
                    ? "Edit Career Opportunity"
                    : "Add Career Opportunity"}
            </h2>
            <form onSubmit={onSubmit}>
                {["title", "location", "dateline", "jobtype", "salary"].map(
                    (field, i) => (
                        <InputField
                            key={i}
                            name={field}
                            value={formData[field]}
                            onChange={onChange}
                            required={
                                field === "title" ||
                                field === "location" ||
                                field === "jobtype" ||
                                field === "salary"
                            }
                        />
                    )
                )}
                <div className="mb-4">
                    <label className="block text-gray-700 font-normal mb-3">
                        Requirement
                    </label>
                    <textarea
                        name="requirement"
                        value={formData.requirement}
                        onChange={onChange}
                        className="w-full p-2 border rounded"
                        required
                        placeholder="requirement"
                        rows="5"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-normal mb-3">
                        Responsible
                    </label>
                    <textarea
                        name="responsible"
                        value={formData.responsible}
                        onChange={onChange}
                        className="w-full p-2 border rounded"
                        required
                        placeholder="Responsible"
                        rows="5"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-normal mb-3">
                        Benefit
                    </label>
                    <textarea
                        name="benefit"
                        value={formData.benefit}
                        onChange={onChange}
                        className="w-full p-2 border rounded"
                        required
                        placeholder="Benefit"
                        rows="5"
                    />
                </div>
                <div className="flex justify-end space-x-2">
                    <button
                        type="submit"
                        className="bg-cyan-700 text-white px-4 py-2 rounded hover:bg-cyan-800"
                    >
                        {isEditing ? "Update" : "Add"}
                    </button>
                    <button
                        type="button"
                        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
                        onClick={onClose}
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    </div>
);

const InputField = ({ name, value, onChange, required }) => (
    <div className="mb-4">
        <label className="block text-gray-700 mb-3" htmlFor={name}>
            {name.charAt(0).toUpperCase() + name.slice(1)}
        </label>
        {name === "dateline" ? (
            <input
                type="date"
                name={name}
                value={value}
                onChange={onChange}
                className="border p-2 rounded w-full"
                required={required}
            />
        ) : (
            <input
                type={name === "dateline" ? "date" : "text"}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={`Enter ${name}`}
                className="border p-2 rounded w-full"
                required={required}
            />
        )}
    </div>
);

export default Career;
