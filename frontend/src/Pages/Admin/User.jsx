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
    });
    const [searchTerm, setSearchTerm] = useState("");

    // Fetch users and update state
    const fetchUsers = async () => {
        try {
            const response = await axiosClient.get("/users");
            console.log("Fetched users:", response.data); // Log the response for debugging
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

    // Filter users based on searchTerm
    const filteredUsers = users.filter(
        (user) =>
            user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.phone.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.dob.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.branch.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.permission.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Reset form data to initial state
    const resetFormData = () => {
        setFormData({
            name: "",
            email: "",
            phone: "",
            dob: "",
            branch: "",
            permission: "",
        });
        setEditUser(null);
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
            fetchUsers(); // Refresh the user list after submission
            resetFormData(); // Reset the form fields
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
        setFormData({ ...user });
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
                fetchUsers(); // Refresh the user list after deletion
            }
        } catch (error) {
            console.error("Error deleting user:", error);
            Swal.fire("Error", "There was an error deleting the user", "error");
        }
    };

    // Refresh button handler
    const handleRefresh = () => {
        fetchUsers(); // Refresh the user list
        resetFormData(); // Reset the form fields
    };
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString(); // Customize format if needed
    };

    return (
        <div className="flex flex-col p-2 space-y-6 shadow-lg rounded-lg">
            <form onSubmit={handleSubmit} className="flex justify-between">
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    className="border p-2 rounded m-1 w-1/6"
                    required
                />
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="border p-2 rounded m-1 w-1/6"
                    required
                />
                <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="border p-2 rounded m-1 w-1/6"
                    required
                />
                <input
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    className="border p-2 rounded m-1"
                    required
                />
                <input
                    type="text"
                    name="branch"
                    value={formData.branch}
                    onChange={handleChange}
                    placeholder="Branch"
                    className="border p-2 rounded m-1"
                    required
                />
                <select
                    name="permission"
                    value={formData.permission}
                    onChange={handleChange}
                    className="border p-2 rounded m-1"
                    required
                >
                    <option value="">Select Permission</option>
                    <option value="admin">Admin</option>
                    <option value="editor">Editor</option>
                    <option value="viewer">Viewer</option>
                </select>
                <button
                    type="submit"
                    className="bg-cyan-700 text-white py-2 px-5 m-1 rounded hover:bg-cyan-800"
                >
                    {editUser ? (
                        <div className="flex items-center">
                            <TiTick className="mr-2 w-5 h-5" />
                            Update User
                        </div>
                    ) : (
                        <div className="flex items-center">
                            <IoPersonAdd className="mr-2" />
                            Add User
                        </div>
                    )}
                </button>
            </form>

            <div className="flex justify-between px-2">
                <input
                    type="text"
                    placeholder="Search Users"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="border px-3 py-2 rounded w-1/6"
                />
                <button
                    onClick={handleRefresh}
                    className="bg-green-600 text-white py-2 px-5 rounded hover:bg-green-700 duration-300 ease-in-out flex items-center justify-center"
                >
                    <FaSync className="mr-2" />
                    Refresh
                </button>
            </div>

            <div className="overflow-x-auto px-2">
                <table className="min-w-full table-auto">
                    <thead>
                        <tr className="bg-cyan-700 rounded-lg">
                            <th className="py-4 text-white font-medium rounded-tl-md">
                                Name
                            </th>
                            <th className="py-4 text-white font-medium">
                                Email
                            </th>
                            <th className="py-4 text-white font-medium">
                                Phone
                            </th>
                            <th className="py-4 text-white font-medium">DOB</th>
                            <th className="py-4 text-white font-medium">
                                Branch
                            </th>
                            <th className="py-4 text-white font-medium">
                                Permission
                            </th>
                            <th className="py-4 text-white font-medium">
                                Created Date
                            </th>
                            <th className="py-4 text-white font-medium rounded-tr-md">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredUsers.length > 0 ? (
                            filteredUsers.map((user) => (
                                <tr
                                    key={user.id}
                                    className="border-b text-gray-700"
                                >
                                    <td className="border p-3">{user.name}</td>
                                    <td className="border p-3">{user.email}</td>
                                    <td className="border p-3">{user.phone}</td>
                                    <td className="border p-3">{user.dob}</td>
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
                                        <div className="flex justify-center">
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
                                                <FaTrash className="mr-2" />
                                                Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="7" className="text-center p-4">
                                    No users found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default User;
