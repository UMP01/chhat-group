import React, { useState, useEffect } from "react";
import { axiosClient } from "../../api/axios";
import Swal from "sweetalert2";
import { FaRegEdit, FaTrash, FaSync } from "react-icons/fa";
import { IoPersonAdd } from "react-icons/io5";
import { TiTick } from "react-icons/ti";

const User = () => {
    const [users, setUsers] = useState([]);
    const [editUser, setEditUser] = useState(null);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        dob: "",
        branch: "",
        permission: "",
        password: "",
    });
    const [searchTerm, setSearchTerm] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false); // State for modal

    const fetchUsers = async () => {
        try {
            const response = await axiosClient.get("/users");
            const activeUsers = Array.isArray(response.data)
                ? response.data
                : [];
            setUsers(activeUsers);
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const filteredUsers = users.filter(
        (user) =>
            user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.phone.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.dob.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.branch.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.permission.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const resetFormData = () => {
        setFormData({
            name: "",
            email: "",
            phone: "",
            dob: "",
            branch: "",
            permission: "",
            password: "",
        });
        setEditUser(null);
        setIsModalOpen(false); // Close modal on reset
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (editUser) {
                await axiosClient.put(`/users/${editUser}`, formData);
                Swal.fire("Success", "User updated successfully", "success");
            } else {
                await axiosClient.post("/users", formData);
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
    };

    const handleEdit = (user) => {
        setEditUser(user.id);
        setFormData({
            name: user.name,
            email: user.email,
            phone: user.phone,
            dob: user.dob.split("T")[0], // Adjust date format here
            branch: user.branch,
            permission: user.permission,
            password: "", // Password is not needed when editing
        });
        setIsModalOpen(true); // Open modal on edit
    };

    const handleDelete = async (id) => {
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
    };

    const handleRefresh = () => {
        fetchUsers();
        resetFormData();
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString();
    };

    return (
        <div className="flex flex-col p-2 space-y-6 shadow-lg rounded-lg">
            <div className="flex justify-between px-2 text-sm">
                <input
                    type="text"
                    placeholder="Search Users"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="border px-3 py-2 rounded w-2/6"
                />
                <div className="flex justify-between gap-5">
                    <button
                        onClick={() => setIsModalOpen(true)} // Open modal for adding new user
                        className="bg-cyan-700 text-white py-1 px-4 rounded hover:bg-cyan-800 flex justify-center items-center"
                    >
                        <IoPersonAdd className="mr-2" />
                        Add User
                    </button>
                    <button
                        onClick={handleRefresh}
                        className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 duration-300 ease-in-out flex items-center justify-center"
                    >
                        <FaSync className="mr-2" />
                        Refresh
                    </button>
                </div>
            </div>

            <div className="overflow-x-auto px-2">
                <table className="min-w-full table-auto text-sm">
                    <thead>
                        <tr className="bg-cyan-700 rounded-lg text-left">
                            <th className="py-2 px-4 border-2 border-tl-0 border-cyan-700 text-white">
                                No.
                            </th>
                            <th className="py-2 px-4 border-2 border-cyan-700 text-white">
                                Name
                            </th>
                            <th className="py-2 px-4 border-2 border-cyan-700 text-white">
                                Email
                            </th>
                            <th className="py-2 px-4 border-2 border-cyan-700 text-white">
                                Phone
                            </th>
                            <th className="py-2 px-4 border-2 border-cyan-700 text-white">
                                DOB
                            </th>
                            <th className="py-2 px-4 border-2 border-cyan-700 text-white">
                                Branch
                            </th>
                            <th className="py-2 px-4 border-2 border-cyan-700 text-white">
                                Permission
                            </th>
                            <th className="py-2 px-4 border-2 border-cyan-700 text-white">
                                Created Date
                            </th>
                            <th className="py-2 px-4 border-2 border-cyan-700 text-white">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredUsers.length > 0 ? (
                            filteredUsers.map((user, index) => (
                                <tr
                                    key={user.id}
                                    className="border-b text-gray-700 transition duration-300 ease-in-out hover:bg-gray-100"
                                >
                                    <td className="border py-2 px-4">
                                        {index + 1}
                                    </td>
                                    <td className="border py-2 px-4">
                                        {user.name}
                                    </td>
                                    <td className="border py-2 px-4">
                                        {user.email}
                                    </td>
                                    <td className="border py-2 px-4">
                                        {user.phone}
                                    </td>
                                    <td className="border py-2 px-4">
                                        {formatDate(user.dob)}
                                    </td>
                                    <td className="border p-3">
                                        {user.branch}
                                    </td>
                                    <td className="border p-3 capitalize">
                                        {user.permission}
                                    </td>
                                    <td className="border p-3">
                                        {formatDate(user.created_at)}
                                    </td>
                                    <td className="border p-3">
                                        <div className="flex">
                                            <button
                                                className="rounded-md rounded-r-none border-cyan-700 bg-cyan-700 text-white px-4 py-2 flex items-center hover:bg-cyan-800 duration-300 ease-in-out"
                                                onClick={() => handleEdit(user)}
                                            >
                                                <FaRegEdit className="mr-2" />
                                                Edit
                                            </button>
                                            <button
                                                className="rounded-md rounded-l-none border-red-600 px-4 py-2 bg-red-600 text-white flex items-center hover:bg-red-700 duration-300 ease-in-out"
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
                                <td colSpan="10" className="text-center p-4">
                                    No users found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50 text-sm">
                    <div className="bg-white rounded-lg shadow-lg px-6 py-3 w-1/3 border-2">
                        <h2 className="text-lg font-bold mb-4 text-cyan-700">
                            {editUser ? "Edit User" : "Add User"}
                        </h2>
                        <form onSubmit={handleSubmit}>
                            <label className="text-cyan-700 font-medium">
                                Fullname
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Name"
                                className="border p-2 rounded w-full my-3 text-gray-800"
                                required
                            />
                            <label className="text-cyan-700 font-medium">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email"
                                className="border p-2 rounded w-full my-3 text-gray-800"
                                required
                            />
                            <label className="text-cyan-700 font-medium">
                                Phone
                            </label>
                            <input
                                type="text"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Phone Number"
                                className="border p-2 rounded w-full my-3 text-gray-800"
                                required
                            />
                            <label className="text-cyan-700 font-medium">
                                Date of Birth
                            </label>
                            <input
                                type="date"
                                name="dob"
                                value={formData.dob}
                                onChange={handleChange}
                                className="border p-2 rounded w-full my-3 text-gray-800"
                                required
                            />
                            <label className="text-cyan-700 font-medium">
                                Branch
                            </label>
                            <input
                                type="text"
                                name="branch"
                                value={formData.branch}
                                onChange={handleChange}
                                placeholder="Branch"
                                className="border p-2 rounded w-full my-3 text-gray-800"
                                required
                            />
                            <select
                                name="permission"
                                value={formData.permission}
                                onChange={handleChange}
                                className="border p-2 rounded w-full my-3 bg-white"
                                required
                            >
                                <option value="">Select Permission</option>
                                <option value="admin">Admin</option>
                                <option value="editor">Editor</option>
                                <option value="viewer">Viewer</option>
                            </select>
                            <label className="text-cyan-700 font-medium">
                                Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Password"
                                className="border p-2 rounded w-full my-3 text-gray-800"
                                required={!editUser}
                            />
                            <div className="flex justify-end mt-4">
                                <button
                                    type="button"
                                    onClick={resetFormData}
                                    className="mr-2 py-2 px-4 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 duration-500 ease-in-out"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="bg-cyan-700 text-white py-2 px-4 rounded hover:bg-cyan-800 flex justify-center items-center duration-500 ease-in-out"
                                >
                                    {editUser ? (
                                        <TiTick className="mr-2" />
                                    ) : (
                                        <IoPersonAdd className="mr-2" />
                                    )}
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
