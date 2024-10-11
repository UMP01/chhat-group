import React, { useState, useEffect } from "react";
import { axiosClient } from "../../api/axios";
import Swal from "sweetalert2";
import { FaRegEdit, FaTrash } from "react-icons/fa";
import { IoAdd } from "react-icons/io5";
import { TiTick } from "react-icons/ti";

const User = () => {
    const [users, setUsers] = useState([]);
    const [editUser, setEditUser] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
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

    const fetchUsers = async () => {
        try {
            const response = await axiosClient.get("/users");
            setUsers(response.data || []);
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

    const openModal = () => {
        setEditUser(null);
        resetFormData();
        setModalOpen(true);
    };

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
        setModalOpen(false);
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
            Swal.fire("Error", "Error submitting form", "error");
        }
    };

    const handleEdit = (user) => {
        setEditUser(user.id);
        setFormData({ ...user, password: "" });
        setModalOpen(true);
    };

    const handleDelete = async (id) => {
        try {
            const result = await Swal.fire({
                title: "Are you sure?",
                text: "Do you really want to delete this user?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Yes, delete it!",
            });

            if (result.isConfirmed) {
                await axiosClient.delete(`/users/${id}`);
                Swal.fire("Deleted!", "User has been deleted.", "success");
                fetchUsers();
            }
        } catch (error) {
            Swal.fire("Error", "Error deleting user", "error");
        }
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString(); // Customize format if needed
    };

    return (
        <div className="flex flex-col space-y-6 p-5 shadow-lg rounded-lg">
            <div className="flex justify-between items-center">
                <h3 className="text-2xl text-cyan-700">User</h3>
                <button
                    onClick={openModal}
                    className="bg-cyan-700 px-5 py-3 text-sm rounded-lg text-white flex items-center justify-center hover:bg-cyan-800"
                >
                    <IoAdd className="mr-2" /> Add User
                </button>
            </div>

            <div className="flex justify-end">
                <input
                    type="text"
                    placeholder="Search Users"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="border px-3 py-2 rounded w-1/6"
                />
            </div>

            <div className="overflow-x-auto">
                <table className="min-w-full table-auto">
                    <thead>
                        <tr className="bg-cyan-700 text-center">
                            <th className="py-4 px-3 text-white">No.</th>
                            <th className="py-4 px-3 text-white">Name</th>
                            <th className="py-4 px-3 text-white">Email</th>
                            <th className="py-4 px-3 text-white">Phone</th>
                            <th className="py-4 px-3 text-white">DOB</th>
                            <th className="py-4 px-3 text-white">Branch</th>
                            <th className="py-4 px-3 text-white">Permission</th>
                            <th className="py-4 px-3 text-white">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredUsers.map((user, index) => (
                            <tr key={user.id} className="border-b text-center hover:bg-gray-100">
                                <td className="border p-3">{index + 1}</td>
                                <td className="border p-3">{user.name}</td>
                                <td className="border p-3">{user.email}</td>
                                <td className="border p-3">{user.phone}</td>
                                <td className="border p-3">{formatDate(user.dob)}</td>
                                <td className="border p-3">{user.branch}</td>
                                <td className="border p-3 capitalize">{user.permission}</td>
                                <td className="border p-3">
                                    <button
                                        className="bg-cyan-700 text-white px-3 py-2 rounded-md mr-2"
                                        onClick={() => handleEdit(user)}
                                    >
                                        <FaRegEdit className="mr-1" /> Edit
                                    </button>
                                    <button
                                        className="bg-red-600 text-white px-3 py-2 rounded-md"
                                        onClick={() => handleDelete(user.id)}
                                    >
                                        <FaTrash className="mr-1" /> Delete
                                    </button>
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
                        <h2 className="text-xl font-semibold mb-4">
                            {editUser ? "Edit User" : "Add User"}
                        </h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-2">
                                <label className="block mb-1" htmlFor="name">
                                    Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="border p-2 w-full rounded"
                                    required
                                />
                            </div>
                            <div className="mb-2">
                                <label className="block mb-1" htmlFor="email">
                                    Email <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="border p-2 w-full rounded"
                                    required
                                />
                            </div>
                            <div className="mb-2">
                                <label className="block mb-1" htmlFor="phone">
                                    Phone <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="border p-2 w-full rounded"
                                    required
                                />
                            </div>
                            <div className="mb-2">
                                <label className="block mb-1" htmlFor="dob">
                                    Date of Birth <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="date"
                                    name="dob"
                                    value={formData.dob}
                                    onChange={handleChange}
                                    className="border p-2 w-full rounded"
                                    required
                                />
                            </div>
                            <div className="mb-2">
                                <label className="block mb-1" htmlFor="branch">
                                    Branch <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="branch"
                                    value={formData.branch}
                                    onChange={handleChange}
                                    className="border p-2 w-full rounded"
                                    required
                                />
                            </div>
                            <div className="mb-2">
                                <label className="block mb-1" htmlFor="permission">
                                    Permission <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="permission"
                                    value={formData.permission}
                                    onChange={handleChange}
                                    className="border p-2 w-full rounded"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block mb-1" htmlFor="password">
                                    Password {editUser ? "" : <span className="text-red-500">*</span>}
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="border p-2 w-full rounded"
                                    readOnly={!!editUser}
                                />
                            </div>
                            <div className="flex justify-end">
                                <button
                                    type="button"
                                    onClick={resetFormData}
                                    className="bg-gray-300 text-black px-4 py-2 rounded mr-2"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="bg-cyan-700 text-white px-4 py-2 rounded"
                                >
                                    {editUser ? "Update" : "Add"}
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
