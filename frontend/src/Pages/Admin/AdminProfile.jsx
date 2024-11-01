import React, { useState, useEffect } from "react";
import DefaultAvatar from "../../assets/Images/default-profile.jpg";
import { PencilIcon } from "@heroicons/react/24/solid";
import Swal from "sweetalert2";
import { axiosClient } from "../../api/axios";

const AdminProfile = ({ toggleSidebar }) => {
    const [profile, setProfile] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [newPassword, setNewPassword] = useState("");
    const userId = localStorage.getItem("userId");
    const token = localStorage.getItem("token");

    // Function to fetch user profile
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

    useEffect(() => {
        fetchUserProfile();
    }, [userId]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProfile((prevProfile) => ({ ...prevProfile, [name]: value }));
    };

    const handleEditToggle = () => {
        setIsEditing(!isEditing);
    };

    const handleSaveChanges = async (e) => {
        e.preventDefault();
        
        const payload = {
            ...profile,
            ...(newPassword && { password: newPassword }), // Include password if provided
        };

        try {
            await axiosClient.put(`/users/${userId}`, payload, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json", // Set content type to JSON
                },
            });

            // Refetch user profile after successful update
            await fetchUserProfile();
            Swal.fire("Success", "Profile updated successfully!", "success");
            setIsEditing(false);
            setNewPassword("");
        } catch (err) {
            setError(err.response?.data?.message || "Failed to update profile.");
            console.error(err);
        }
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                toggleSidebar(false); // Close sidebar on mobile
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Check on initial load

        return () => window.removeEventListener('resize', handleResize);
    }, [toggleSidebar]);

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
        <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Profile</h2>
    
            <div className="bg-white p-6 rounded-md shadow-md w-full">
                {error && <div className="text-red-500">{error}</div>}

                <div className="flex flex-col items-center">
                    <form onSubmit={handleSaveChanges} className="grid grid-cols-1 gap-4 mb-6 w-full">
                        <div className="flex justify-center mb-4">
                            <img
                                className="w-32 h-32 rounded-full border-2 border-gray-300"
                                src={profile.avatar || DefaultAvatar}
                                alt="User Avatar"
                            />
                        </div>
        
                        <div>
                            <label className="block text-gray-600 mb-1 text-left">Full Name</label>
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
                            <label className="block text-gray-600 mb-1 text-left">Email</label>
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
                            <label className="block text-gray-600 mb-1 text-left">Phone Number</label>
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
                            <label className="block text-gray-600 mb-1 text-left">Date of Birth</label>
                            <input
                                type="date"
                                name="dateOfBirth"
                                value={profile.dob ? profile.dob.split("T")[0] : ""}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 border rounded-md"
                                disabled={!isEditing}
                            />
                        </div>
        
                        {isEditing && (
                            <div>
                                <label className="block text-gray-600 mb-1 text-left">New Password</label>
                                <input
                                    type="password"
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                    className="w-full px-4 py-2 border rounded-md"
                                />
                            </div>
                        )}
                    </form>
                </div>

                {isEditing && (
                    <button
                        type="submit"
                        onClick={handleSaveChanges}
                        className="w-full mb-2 px-4 py-2 bg-sky-600 text-white rounded-md hover:bg-sky-700"
                    >
                        Save Changes
                    </button>
                )}
    
                <button
                    onClick={handleEditToggle}
                    className="w-full flex items-center justify-center text-sky-600 hover:text-sky-800"
                >
                    <PencilIcon className="w-5 h-5 mr-2" />
                    {isEditing ? "Cancel" : "Edit Profile"}
                </button>
            </div>
        </div>
    );
};

export default AdminProfile;
