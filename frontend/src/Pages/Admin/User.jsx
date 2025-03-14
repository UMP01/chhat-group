import React, { useState, useEffect } from "react";
import { axiosClient } from "../../api/axios";
import Swal from "sweetalert2";
import { FaRegEdit, FaTrash, FaSync } from "react-icons/fa";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import { IoPersonAdd } from "react-icons/io5";
import { TiTick } from "react-icons/ti";

const ITEMS_PER_PAGE = 5;

const User = () => {
    const [users, setUsers] = useState([]);
    const [editUser, setEditUser] = useState(null);
    const [formData, setFormData] = useState(initialFormData());
    const [searchTerm, setSearchTerm] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        fetchUsers();
    }, []);

    async function fetchUsers() {
        setLoading(true);
        try {
            const response = await axiosClient.get("/users");
            setUsers(Array.isArray(response.data) ? response.data : []);
        } catch (error) {
            console.error("Error fetching users:", error);
            setError("An error occurred while fetching data");
        } finally {
            setLoading(false);
        }
    }

    function initialFormData() {
        return {
            name: "",
            email: "",
            phone: "",
            dob: "",
            branch: "Phnom Penh",
            permission: "admin",
            password: "",
        };
    }

    const filteredUsers = users.filter(
        ({ name, email, phone, dob, branch, permission }) =>
            [name, email, phone, dob, branch, permission].some((field) =>
                field.toLowerCase().includes(searchTerm.toLowerCase())
            )
    );

    const indexOfLastUser = currentPage * ITEMS_PER_PAGE;
    const indexOfFirstUser = indexOfLastUser - ITEMS_PER_PAGE;
    const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
    const totalPages = Math.ceil(filteredUsers.length / ITEMS_PER_PAGE);

    function resetFormData() {
        setFormData(initialFormData());
        setEditUser(null);
        setIsModalOpen(false);
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    }

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const updatedFormData = { ...formData };
            if (editUser) {
                await axiosClient.put(`/users/${editUser}`, updatedFormData);
                Swal.fire("Success", "User updated successfully", "success");
            } else {
                await axiosClient.post("/users", updatedFormData);
                Swal.fire("Success", "User created successfully", "success");
            }
            fetchUsers();
            resetFormData();
        } catch (error) {
            console.error("Error submitting form:", error);
            Swal.fire(
                "Error",
                "There was an error submitting the form",
                "error"
            );
        }
    }

    function handleEdit(user) {
        setEditUser(user.id);
        setFormData({
            name: user.name,
            email: user.email,
            phone: user.phone,
            dob: user.dob.split("T")[0],
            branch: "Phnom Penh",
            permission: user.permission,
            password: user.password,
        });
        setIsModalOpen(true);
    }

    function handlePageChange(pageNumber) {
        setCurrentPage(pageNumber);
    }

    async function handleDelete(id) {
        try {
            const result = await Swal.fire({
                title: "Are you sure?",
                text: "Do you really want to delete this user?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!",
            });

            if (result.isConfirmed) {
                await axiosClient.delete(`/users/${id}`);
                Swal.fire("Deleted!", "User has been deleted.", "success");
                fetchUsers();
            }
        } catch (error) {
            console.error("Error deleting user:", error);
            Swal.fire("Error", "There was an error deleting the user", "error");
        }
    }

    if (loading) {
        return (
            <div className="py-72 flex items-center justify-center">
                <div className="flex justify-center items-center border-gray-300 h-7 w-7 animate-spin rounded-full border-2 border-t-sky-700"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="bg-red-100 text-red-700 py-5 px-5 rounded-md">
                <p>Error: {error}</p>
            </div>
        );
    }

    const formatDate = (dateString) =>
        new Date(dateString).toLocaleDateString();

    return (
        <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">User</h2>
            <div className="bg-white flex flex-col space-y-6 p-5 shadow-lg rounded-lg">
                <div className="flex justify-between px-2 text-sm">
                    <input
                        type="text"
                        placeholder="Search Users"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="border px-3 py-2 rounded w-2/6 font-medium text-gray-600"
                    />
                    <div className="flex gap-5">
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="bg-cyan-700 font-medium text-white py-1 px-4 rounded hover:bg-cyan-800 flex items-center"
                        >
                            <IoPersonAdd className="mr-2" /> Add User
                        </button>
                        <button
                            onClick={fetchUsers}
                            className="bg-green-600 font-medium text-white py-2 px-4 rounded hover:bg-green-700 flex items-center"
                        >
                            <FaSync className="mr-2" /> Refresh
                        </button>
                    </div>
                </div>

                <div className="overflow-x-auto px-2">
                    <table className="min-w-full text-sm table-auto">
                        <thead>
                            <tr className="bg-cyan-700 text-white">
                                {[
                                    "No.",
                                    "Name",
                                    "Email",
                                    "Branch",
                                    "Permission",
                                    "Created Date",
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
                            {currentUsers.length > 0 ? (
                                currentUsers.map((user, index) => (
                                    <tr
                                        key={user.id}
                                        className="border-b hover:bg-gray-100"
                                    >
                                        <td className="border py-2 px-4 font-medium text-gray-700" style={{width: '4%'}}>
                                            {index +
                                                1 +
                                                (currentPage - 1) *
                                                    ITEMS_PER_PAGE}
                                        </td>
                                        <td className="border py-2 px-4 font-medium text-gray-700">
                                            {user.name}
                                        </td>
                                        <td className="border py-2 px-4 font-medium text-gray-700">
                                            {user.email}
                                        </td>
                                        <td className="border py-2 px-4 font-medium text-gray-700 w-1/12">
                                            {user.branch}
                                        </td>
                                        <td className="border py-2 px-4 capitalize font-medium text-gray-700 w-1/12">
                                            {user.permission}
                                        </td>
                                        <td className="border py-2 px-4 font-medium text-gray-700 w-2/12">
                                            {formatDate(user.created_at)}
                                        </td>
                                        <td className="border py-2 px-4 w-2/12">
                                            <div className="flex">
                                                <button
                                                    className="bg-cyan-700 font-medium text-white px-4 py-2 flex items-center rounded-l-md hover:bg-cyan-800 duration-300 ease-in-out"
                                                    onClick={() =>
                                                        handleEdit(user)
                                                    }
                                                >
                                                    <FaRegEdit className="mr-2" />{" "}
                                                    Edit
                                                </button>
                                                <button
                                                    className="bg-red-600 font-medium text-white px-4 py-2 rounded-r-md hover:bg-red-700 flex items-center duration-300 ease-in-out"
                                                    onClick={() =>
                                                        handleDelete(user.id)
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
                                        No users found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                {/* Pagination */}
                <div className="flex justify-between items-center mt-4">
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        aria-label="Previous page"
                        className="bg-cyan-700 text-white text-sm px-4 py-2 rounded disabled:opacity-50 inline-flex hover:shadow-lg duration-300 hover:bg-cyan-600"
                    >
                        <GoArrowLeft className="mr-2 mt-1" />
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
                        <GoArrowRight className="mt-1 ml-2" />
                    </button>
                </div>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg shadow-lg p-5 w-1/3">
                        <h2 className="text-lg font-normal mb-4 text-cyan-700">
                            {editUser ? "Edit User" : "Add User"}
                        </h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="name" className="block mb-2">
                                    Name{" "}
                                    <span className="text-red-700">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Enter Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="border w-full px-3 py-2"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block mb-2">
                                    Email{" "}
                                    <span className="text-red-700">*</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Enter Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="border w-full px-3 py-2"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="phone" className="block mb-2">
                                    Phone{" "}
                                    <span className="text-red-700">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="phone"
                                    id="phone"
                                    placeholder="Enter Phone Number"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="border w-full px-3 py-2"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="dob" className="block mb-2">
                                    Date of Birth{" "}
                                    <span className="text-red-700">*</span>
                                </label>
                                <input
                                    type="date"
                                    name="dob"
                                    id="dob"
                                    value={formData.dob}
                                    onChange={handleChange}
                                    className="border w-full px-3 py-2"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="branch" className="block mb-2">
                                    Branch{" "}
                                    <span className="text-red-700">*</span>
                                </label>
                                <select
                                    name="branch"
                                    id="branch"
                                    value={formData.branch}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded"
                                >
                                    <option value="Phnom Penh">
                                        Phnom Penh
                                    </option>
                                </select>
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="permission"
                                    className="block mb-2"
                                >
                                    Permission{" "}
                                    <span className="text-red-700">*</span>
                                </label>
                                <select
                                    name="permission"
                                    id="permission"
                                    value={formData.permission}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded"
                                >
                                    <option value="admin">Admin</option>
                                    <option value="user">User</option>
                                </select>
                            </div>
                            {/* {!editUser && ( */}
                                <div className="mb-4">
                                    <label
                                        htmlFor="password"
                                        className="block mb-2"
                                    >
                                        Password{" "}
                                        <span className="text-red-700">*</span>
                                    </label>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="Enter New Password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        className="border w-full px-3 py-2"
                                        // required={!editUser}
                                    />
                                </div>
                            {/* )} */}
                            <div className="flex justify-end space-x-3">
                                <button
                                    type="button"
                                    onClick={resetFormData}
                                    className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="bg-cyan-700 text-white px-4 py-2 rounded hover:bg-cyan-800"
                                >
                                    {editUser ? "Update User" : "Add User"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default User;
