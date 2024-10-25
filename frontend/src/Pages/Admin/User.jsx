import React, { useState, useEffect } from "react";
import { axiosClient } from "../../api/axios";
import Swal from "sweetalert2";
import { FaRegEdit, FaTrash, FaSync } from "react-icons/fa";
import { IoPersonAdd } from "react-icons/io5";
import { TiTick } from "react-icons/ti";

const User = () => {
    const [users, setUsers] = useState([]);
    const [editUser, setEditUser] = useState(null);
    const [formData, setFormData] = useState(initialFormData());
    const [searchTerm, setSearchTerm] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const defaultLogoUrl = "../assets/Images/default-profile.jpg";
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchUsers();
    }, []);

    function initialFormData() {
        return {
            name: "",
            email: "",
            phone: "",
            dob: "",
            branch: "",
            permission: "",
            password: "",
            profileImage: "",
        };
    }

    async function fetchUsers() {
        setLoading(true);
        try {
            const response = await axiosClient.get("/users");
            setUsers(Array.isArray(response.data) ? response.data : []);
        } catch (error) {
            console.error("Error fetching users:", error);
        } finally {
            setLoading(false);
        }
    }

    const filteredUsers = users.filter(
        ({ name, email, phone, dob, branch, permission }) =>
            [name, email, phone, dob, branch, permission].some((field) =>
                field.toLowerCase().includes(searchTerm.toLowerCase())
            )
    );

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
            const updatedFormData = {
                ...formData,
                profileImage: formData.profileImage || defaultLogoUrl,
            };
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
            branch: user.branch,
            permission: user.permission,
            password: "",
            profileImage: "",
        });
        setIsModalOpen(true);
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

    const formatDate = (dateString) =>
        new Date(dateString).toLocaleDateString();

    return (
        <div className="flex flex-col p-2 space-y-6 shadow-lg rounded-lg">
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
                <table className="min-w-full text-sm">
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
                                <th key={i} className="py-2 px-4 font-medium text-start">
                                    {header}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {filteredUsers.length > 0 ? (
                            filteredUsers.map((user, index) => (
                                <tr
                                    key={user.id}
                                    className="border-b hover:bg-gray-100"
                                >
                                    <td className="border py-2 px-4 font-medium text-gray-700">
                                        {index + 1}
                                    </td>
                                    <td className="border py-2 px-4 font-medium text-gray-700">
                                        {user.name}
                                    </td>
                                    <td className="border py-2 px-4 font-medium text-gray-700">
                                        {user.email}
                                    </td>
                                    
                                    <td className="border py-2 px-4 font-medium text-gray-700">
                                        {user.branch}
                                    </td>
                                    <td className="border py-2 px-4 capitalize font-medium text-gray-700">
                                        {user.permission}
                                    </td>
                                    <td className="border py-2 px-4 font-medium text-gray-700">
                                        {formatDate(user.created_at)}
                                    </td>
                                    <td className="border py-2 px-4">
                                        <div className="flex">
                                            <button
                                                className="bg-cyan-700 font-medium text-white px-4 py-2 flex items-center rounded-l-md hover:bg-cyan-800  duration-300 ease-in-out"
                                                onClick={() => handleEdit(user)}
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
                                    colSpan="9"
                                    className="text-center p-4 font-medium text-gray-700"
                                >
                                    No users found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {isModalOpen && (
                <Modal
                    isOpen={isModalOpen}
                    onClose={resetFormData}
                    formData={formData}
                    onChange={handleChange}
                    onSubmit={handleSubmit}
                    isEditMode={!!editUser}
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
    isEditMode,
}) => (
    <div
        className={`fixed inset-0 flex items-center justify-center z-50 ${
            isOpen ? "block" : "hidden"
        }`}
    >
        <div className="bg-white rounded-lg shadow-lg px-6 py-3 w-1/3 border-2">
            <h2 className="text-lg font-bold mb-4 text-cyan-700">
                {isEditMode ? "Edit User" : "Add User"}
            </h2>
            <form onSubmit={onSubmit}>
                {["name", "email", "phone", "dob", "branch", "password"].map(
                    (field, i) => (
                        <InputField
                            key={i}
                            name={field}
                            value={formData[field]}
                            onChange={onChange}
                            required={!isEditMode && field === "password"}
                        />
                    )
                )}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Permission
                    </label>
                    <select
                        name="permission"
                        value={formData.permission}
                        onChange={onChange}
                        className="w-full p-2 border rounded"
                        required
                    >
                        <option value="" disabled>
                            Select permission
                        </option>
                        <option value="admin">Admin</option>
                        <option value="user">User</option>
                    </select>
                </div>
                <div className="flex justify-end space-x-2">
                    <button
                        type="submit"
                        className="bg-cyan-700 text-white px-4 py-2 rounded hover:bg-cyan-800"
                    >
                        <TiTick className="inline-block" /> Save
                    </button>
                    <button
                        type="button"
                        onClick={onClose}
                        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
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
        <label className="block text-gray-700 text-sm font-bold mb-2 capitalize">
            {name}
        </label>
        <input
            type={name === "dob" ? "date" : "text"}
            name={name}
            value={value}
            onChange={onChange}
            required={required}
            className="w-full p-2 border rounded"
        />
    </div>
);

export default User;
