import React, { useState, useEffect } from "react";
import { axiosClient } from "../../api/axios";
import Swal from "sweetalert2"; // Import SweetAlert2
import { FaRegEdit, FaTrash } from "react-icons/fa";

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
            console.log(response); // Log the response for debugging
            // No status filtering if column does not exist
            const activeUsers = Array.isArray(response.data)
                ? response.data
                : [];
            setUsers(activeUsers);
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };

    useEffect(() => {
        fetchUsers(); // Fetch users when component mounts
    }, []);

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
            setFormData({
                name: "",
                email: "",
                phone: "",
                dob: "",
                branch: "",
                permission: "",
            });
            setEditUser(null);
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
                // If status is not required, simply delete the user or use a different approach
                await axiosClient.delete(`/users/${id}`);
                Swal.fire("Deleted!", "User has been deleted.", "success");
                fetchUsers(); // Refresh the user list after deletion
            }
        } catch (error) {
            console.error("Error deleting user:", error);
            Swal.fire("Error", "There was an error deleting the user", "error");
        }
    };

    return (
        <div className="flex flex-col space-y-6 p-2 shadow-lg rounded-lg">
            <form onSubmit={handleSubmit} className="mb-4">
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    className="border p-2 rounded m-2"
                    required
                />
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="border p-2 rounded m-2"
                    required
                />
                <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="border p-2 rounded m-2"
                    required
                />
                <input
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    className="border p-2 rounded m-2"
                    required
                />
                <input
                    type="text"
                    name="branch"
                    value={formData.branch}
                    onChange={handleChange}
                    placeholder="Branch"
                    className="border p-2 rounded m-2"
                    required
                />
                <select
                    name="permission"
                    value={formData.permission}
                    onChange={handleChange}
                    className="border p-2 rounded m-2"
                    required
                >
                    <option value="">Select Permission</option>
                    <option value="admin">Admin</option>
                    <option value="editor">Editor</option>
                    <option value="viewer">Viewer</option>
                </select>
                <button
                    type="submit"
                    className="bg-cyan-700 text-white py-2 px-5 rounded hover:bg-cyan-800"
                >
                    {editUser ? "Update User" : "Add User"}
                </button>
            </form>

            <input
                type="text"
                placeholder="Search by name or email"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="border p-2 rounded mb-4"
            />

            <div className="overflow-x-auto">
                <table className="min-w-full table-auto">
                    <thead>
                        <tr className="bg-cyan-700">
                            <th className="py-4 text-white font-medium">
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
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.length > 0 ? (
                            users.map((user) => (
                                <tr key={user.id} className="border-b">
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
                                        <div className="flex justify-center">
                                            <button
                                                className="rounded-md rounded-r-none border-cyan-700 bg-cyan-700 text-white px-4 py-2 flex items-center"
                                                onClick={() => handleEdit(user)}
                                            >
                                                <FaRegEdit className="mr-2" />
                                                Edit
                                            </button>
                                            <button
                                                className="rounded-md rounded-l-none border-red-500 px-4 py-2 bg-red-600 text-white flex items-center"
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
