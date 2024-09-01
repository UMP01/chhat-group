import React, { useState } from "react";
import { PencilIcon, LockClosedIcon } from "@heroicons/react/24/solid";

const AdminProfile = () => {
    // State to handle form inputs
    const [profile, setProfile] = useState({
        fullName: "Super User",
        email: "superuser@admin.com",
        phone: "123-456-7890",
        dateOfBirth: "1985-05-15",
        role: "Administrator",
    });

    const [password, setPassword] = useState({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
    });

    const [isEditing, setIsEditing] = useState(false);

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProfile({ ...profile, [name]: value });
    };

    const handlePasswordChange = (e) => {
        const { name, value } = e.target;
        setPassword({ ...password, [name]: value });
    };

    const handleEditToggle = () => {
        setIsEditing(!isEditing);
    };

    const handleSaveChanges = () => {
        // Implement save changes functionality
        console.log("Profile saved:", profile);
        setIsEditing(false);
    };

    const handlePasswordSubmit = () => {
        // Implement password change functionality
        console.log("Password changed:", password);
    };

    return (
        <div className="bg-gray-100">
            <div className="bg-white p-6 rounded-md shadow-md">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-gray-800">Profile</h2>
                    <button
                        onClick={handleEditToggle}
                        className="flex items-center text-sky-600 hover:text-sky-800"
                    >
                        <PencilIcon className="w-5 h-5 mr-2" />
                        {isEditing ? "Cancel" : "Edit Profile"}
                    </button>
                </div>
                {/* Profile Picture and Basic Info */}
                <div className="flex items-center mb-6">
                    <img
                        src="https://via.placeholder.com/100"
                        alt="Profile"
                        className="w-24 h-24 rounded-full border-4 border-sky-600"
                    />
                    <div className="ml-6">
                        <h3 className="text-xl font-bold text-gray-700">{profile.fullName}</h3>
                        <p className="text-gray-500">{profile.role}</p>
                    </div>
                </div>

                {/* Profile Information Form */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div>
                        <label className="block text-gray-600 mb-2">Full Name</label>
                        <input
                            type="text"
                            name="fullName"
                            value={profile.fullName}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border rounded-md"
                            disabled={!isEditing}
                        />
                    </div>
                    <div>
                        <label className="block text-gray-600 mb-2">Email</label>
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
                        <label className="block text-gray-600 mb-2">Phone Number</label>
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
                        <label className="block text-gray-600 mb-2">Date of Birth</label>
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

            {/* Change Password Section */}
            <div className=" mt-8 bg-white p-6 rounded-md shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Change Password</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div>
                        <label className="block text-gray-600 mb-2">Current Password</label>
                        <input
                            type="password"
                            name="currentPassword"
                            value={password.currentPassword}
                            onChange={handlePasswordChange}
                            className="w-full px-4 py-2 border rounded-md"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-600 mb-2">New Password</label>
                        <input
                            type="password"
                            name="newPassword"
                            value={password.newPassword}
                            onChange={handlePasswordChange}
                            className="w-full px-4 py-2 border rounded-md"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-600 mb-2">Confirm Password</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            value={password.confirmPassword}
                            onChange={handlePasswordChange}
                            className="w-full px-4 py-2 border rounded-md"
                        />
                    </div>
                </div>
                <button
                    onClick={handlePasswordSubmit}
                    className="px-4 py-2 bg-sky-600 text-white rounded-md hover:bg-sky-700"
                >
                    Change Password
                </button>
            </div>
        </div>
    );
};

export default AdminProfile;
