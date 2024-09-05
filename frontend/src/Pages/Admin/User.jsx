import React, { useState, useEffect } from "react";
import axios from "axios";

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

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await axios.get("http://localhost:8000/api/users");
            setUsers(response.data);
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (editUser) {
                // Update user
                await axios.put(
                    `http://localhost:8000/api/users/${editUser}`,
                    formData
                );
            } else {
                // Create new user
                await axios.post("http://localhost:8000/api/users", formData);
            }
            fetchUsers(); // Refresh the user list
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
        }
    };

    const handleEdit = (user) => {
        setEditUser(user.id);
        setFormData({ ...user });
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8000/api/users/${id}`);
            fetchUsers(); // Refresh the user list
        } catch (error) {
            console.error("Error deleting user:", error);
        }
    };

    const filteredUsers = users.filter(
        (user) =>
            user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

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
                        {filteredUsers.map((user) => (
                            <tr key={user.id} className="border-b">
                                <td className="border p-2">{user.name}</td>
                                <td className="border p-2">{user.email}</td>
                                <td className="border p-2">{user.phone}</td>
                                <td className="border p-2">{user.dob}</td>
                                <td className="border p-2">{user.branch}</td>
                                <td className="border p-2">
                                    {user.permission}
                                </td>
                                <td className="border p-2">
                                    <button
                                        onClick={() => handleEdit(user)}
                                        className="text-blue-500 hover:underline mr-2"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDelete(user.id)}
                                        className="text-red-500 hover:underline"
                                    >
                                        Remove
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default User;
