import React, { useState, useEffect } from "react";
import DefaultAvatar from "../../assets/Images/default-profile.jpg";
import { PencilIcon } from "@heroicons/react/24/solid";
import Swal from "sweetalert2";
import { axiosClient } from "../../api/axios";

const AdminProfile = () => {
    const [profile, setProfile] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [newPassword, setNewPassword] = useState("");
    const userId = localStorage.getItem("userId");
    const token = localStorage.getItem("token");

    useEffect(() => {
        const fetchUserProfile = async () => {
            setLoading(true);
            try {
                const response = await axiosClient.get(`/users/${userId}`);
                setProfile(response.data);
            } catch (err) {
                Swal.fire("Error", "Could not fetch user profile.", "error");
            } finally {
                setLoading(false);
            }
        };
        fetchUserProfile();
    }, [userId]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProfile((prevProfile) => ({ ...prevProfile, [name]: value }));
    };

    const handleImageChange = (e) => {
        if (e.target.files.length > 0) {
            setProfile((prevProfile) => ({
                ...prevProfile,
                profileImage: e.target.files[0],
            }));
        }
    };

    const handleEditToggle = () => {
        setIsEditing(!isEditing);
    };

    const handleSaveChanges = async (e) => {
        e.preventDefault();
        const formData = new FormData();

        for (const key in profile) {
            formData.append(key, profile[key]);
        }
        if (newPassword) {
            formData.append("password", newPassword);
        }

        try {
            const response = await axiosClient.put(
                `/users/${userId}`,
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "multipart/form-data",
                    },
                }
            );
            setProfile(response.data);
            setIsEditing(false);
            setNewPassword("");
            Swal.fire("Success", "Profile updated successfully!", "success");
        } catch (err) {
            setError("Failed to update profile.");
            console.error(err);
        }
    };

    if (loading) {
        return (
            <div className="py-72 flex items-center justify-center">
                <div className="flex justify-center items-center border-gray-300 h-7 w-7 animate-spin rounded-full border-2 border-t-sky-700"></div>
            </div>
        );
    }

    if (!profile) {
        return <div className="text-center">No user profile found.</div>;
    }

    return (
        <div className="bg-gray-100">
            <div className="bg-white p-6 rounded-md shadow-md">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-gray-800">
                        Profile
                    </h2>
                    <button
                        onClick={handleEditToggle}
                        className="flex items-center text-sky-600 hover:text-sky-800"
                    >
                        <PencilIcon className="w-5 h-5 mr-2" />
                        {isEditing ? "Cancel" : "Edit Profile"}
                    </button>
                </div>

                {error && <div className="text-red-500">{error}</div>}

                <form
                    onSubmit={handleSaveChanges}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
                >
                    <div>
                        <img
                            className="w-32 h-32 rounded-full border-2 border-gray-300 mb-4" // Increased size of the image
                            src={profile.avatar || DefaultAvatar}
                            alt="User Avatar"
                        />
                        {isEditing && (
                            <div>
                                <input
                                    type="file"
                                    accept="image/*"
                                    name="profileImage"
                                    onChange={handleImageChange}
                                    className="mb-2" // Add some margin
                                />
                                <button
                                    type="button"
                                    onClick={() =>
                                        document
                                            .querySelector(
                                                'input[name="profileImage"]'
                                            )
                                            .click()
                                    } // Trigger file input on button click
                                    className="px-4 py-2 bg-sky-600 text-white rounded-md hover:bg-sky-700"
                                >
                                    Upload
                                </button>
                            </div>
                        )}
                    </div>
                    <div>
                        <label className="block text-gray-600 mb-2">
                            Full Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={profile.name || ""}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border rounded-md"
                            disabled={!isEditing}
                        />
                    </div>
                    <div>
                        <label className="block text-gray-600 mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={profile.email || ""}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border rounded-md"
                            disabled={!isEditing}
                        />
                    </div>
                    <div>
                        <label className="block text-gray-600 mb-2">
                            Phone Number
                        </label>
                        <input
                            type="text"
                            name="phone"
                            value={profile.phone || ""}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border rounded-md"
                            disabled={!isEditing}
                        />
                    </div>
                    <div>
                        <label className="block text-gray-600 mb-2">
                            Date of Birth
                        </label>
                        <input
                            type="date"
                            name="dateOfBirth"
                            value={
                                profile.dateOfBirth
                                    ? profile.dateOfBirth.split("T")[0]
                                    : ""
                            }
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border rounded-md"
                            disabled={!isEditing}
                        />
                    </div>
                    {isEditing && (
                        <div>
                            <label className="block text-gray-600 mb-2">
                                New Password
                            </label>
                            <input
                                type="password"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                className="w-full px-4 py-2 border rounded-md"
                            />
                        </div>
                    )}
                </form>

                {isEditing && (
                    <button
                        type="submit"
                        onClick={handleSaveChanges}
                        className="px-4 py-2 bg-sky-600 text-white rounded-md hover:bg-sky-700"
                    >
                        Save Changes
                    </button>
                )}
            </div>
        </div>
    );
};

export default AdminProfile;
