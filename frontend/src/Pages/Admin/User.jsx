import React, { useState } from 'react';

const User = () => {
    const [users, setUsers] = useState([]);
    const [editUser, setEditUser] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        dob: '',
        branch: '',
        permission: ''
    });
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editUser) {
            setUsers(users.map(user => (user.id === editUser ? { ...user, ...formData } : user)));
            setEditUser(null);
        } else {
            setUsers([...users, { id: Date.now(), ...formData }]);
        }
        setFormData({
            name: '',
            email: '',
            phone: '',
            dob: '',
            branch: '',
            permission: ''
        });
    };

    const handleEdit = (user) => {
        setEditUser(user.id);
        setFormData({ ...user });
    };

    const handleDelete = (id) => {
        setUsers(users.filter(user => user.id !== id));
    };

    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="flex flex-col space-y-6">
            <form onSubmit={handleSubmit} className="mb-4">
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    className="border p-2 rounded mr-2"
                    required
                />
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="border p-2 rounded mr-2"
                    required
                />
                <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="border p-2 rounded mr-2"
                    required
                />
                <input
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    className="border p-2 rounded mr-2"
                    required
                />
                <input
                    type="text"
                    name="branch"
                    value={formData.branch}
                    onChange={handleChange}
                    placeholder="Branch"
                    className="border p-2 rounded mr-2"
                    required
                />
                <select
                    name="permission"
                    value={formData.permission}
                    onChange={handleChange}
                    className="border p-2 rounded mr-2"
                    required
                >
                    <option value="">Select Permission</option>
                    <option value="admin">Admin</option>
                    <option value="editor">Editor</option>
                    <option value="viewer">Viewer</option>
                </select>
                <button type="submit" className="bg-blue-500 text-white p-2 rounded">
                    {editUser ? 'Update User' : 'Add User'}
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
                <table className="min-w-full border">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="border p-2">Name</th>
                            <th className="border p-2">Email</th>
                            <th className="border p-2">Phone</th>
                            <th className="border p-2">DOB</th>
                            <th className="border p-2">Branch</th>
                            <th className="border p-2">Permission</th>
                            <th className="border p-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredUsers.map(user => (
                            <tr key={user.id} className="border-b">
                                <td className="border p-2">{user.name}</td>
                                <td className="border p-2">{user.email}</td>
                                <td className="border p-2">{user.phone}</td>
                                <td className="border p-2">{user.dob}</td>
                                <td className="border p-2">{user.branch}</td>
                                <td className="border p-2">{user.permission}</td>
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