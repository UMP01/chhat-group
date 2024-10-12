import React, { useState, useEffect } from "react";
import { PencilIcon } from "@heroicons/react/24/solid";
import Swal from "sweetalert2";
import { axiosClient } from "../../api/axios";
const AdminProfile = () => {
    const [profile, setProfile] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const userId = localStorage.getItem("userId");
    const token = localStorage.getItem("token");

    const fetchUserProfile = async () => {
        console.log("Fetching user profile...");
        setLoading(true);
        try {
            const response = await axiosClient.get(`/users/${userId}`);
            console.log("User profile fetched:", response.data);
            setProfile(response.data);
        } catch (error) {
            console.error("Error fetching user profile:", error);
            Swal.fire("Error", "Could not fetch user profile.", "error");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUserProfile();
    }, []);
    if (loading) {
        return <div className="text-center">Loading profile...</div>;
    }

    if (!profile) {
        return <div className="text-center">No user profile found.</div>;
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProfile({ ...profile, [name]: value });
    };

    const handleEditToggle = () => {
        setIsEditing(!isEditing);
    };

    const handleSaveChanges = async () => {
        try {
            await axios.put(
                `http://localhost:8000/api/users/${userId}`,
                profile,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            setIsEditing(false);
            alert("Profile updated successfully!");
        } catch (err) {
            setError("Failed to update profile.");
            console.error(err);
        }
    };

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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div>
                        <label className="block text-gray-600 mb-2">
                            Full Name
                        </label>
                        <input
                            type="text"
                            name="fullName"
                            value={profile.name}
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
                            value={profile.email}
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
                            value={profile.phone}
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
                            value={profile.dateOfBirth}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border rounded-md"
                            disabled={!isEditing}
                        />
                    </div>
                </div>

                {isEditing && (
                    <button
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
