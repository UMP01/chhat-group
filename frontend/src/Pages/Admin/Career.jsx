import React, { useState } from 'react';

const Career = () => {
    const [careers, setCareers] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [currentCareer, setCurrentCareer] = useState(null);
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        location: '',
        datePosted: '',
        jobType: '',
        salary: '',
        requirements: '',
        benefits: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isEditing) {
            setCareers(careers.map(career => (career.id === currentCareer.id ? { ...currentCareer, ...formData } : career)));
        } else {
            setCareers([...careers, { id: Date.now(), ...formData }]);
        }
        resetForm();
    };

    const handleEdit = (career) => {
        setIsEditing(true);
        setCurrentCareer(career);
        setFormData({ ...career });
        setModalOpen(true);
    };

    const handleDelete = (id) => {
        setCareers(careers.filter(career => career.id !== id));
    };

    const openModal = () => {
        setIsEditing(false);
        resetForm();
        setModalOpen(true);
    };

    const resetForm = () => {
        setFormData({
            title: '',
            description: '',
            location: '',
            datePosted: '',
            jobType: '',
            salary: '',
            requirements: '',
            benefits: ''
        });
        setCurrentCareer(null);
        setModalOpen(false);
    };

    return (
        <div className="flex flex-col space-y-6">
            <button onClick={openModal} className="bg-blue-500 text-white p-2 rounded mb-4">
                Add Career Opportunity
            </button>

            <div className="overflow-x-auto">
                <table className="min-w-full border">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="border p-2">Title</th>
                            <th className="border p-2">Location</th>
                            <th className="border p-2">Date Posted</th>
                            <th className="border p-2">Job Type</th>
                            <th className="border p-2">Salary</th>
                            <th className="border p-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {careers.map(career => (
                            <tr key={career.id} className="border-b">
                                <td className="border p-2">{career.title}</td>
                                <td className="border p-2">{career.location}</td>
                                <td className="border p-2">{career.datePosted}</td>
                                <td className="border p-2">{career.jobType}</td>
                                <td className="border p-2">{career.salary}</td>
                                <td className="border p-2">
                                    <button onClick={() => handleEdit(career)} className="text-blue-500 hover:underline mr-2">
                                        Edit
                                    </button>
                                    <button onClick={() => handleDelete(career.id)} className="text-red-500 hover:underline">
                                        Remove
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
                        <h2 className="text-lg font-bold mb-4">{isEditing ? 'Edit Career Opportunity' : 'Add Career Opportunity'}</h2>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                placeholder="Job Title"
                                className="border p-2 rounded mb-2 w-full"
                                required
                            />
                            <input
                                type="text"
                                name="location"
                                value={formData.location}
                                onChange={handleChange}
                                placeholder="Location"
                                className="border p-2 rounded mb-2 w-full"
                                required
                            />
                            <input
                                type="date"
                                name="datePosted"
                                value={formData.datePosted}
                                onChange={handleChange}
                                className="border p-2 rounded mb-2 w-full"
                                required
                            />
                            <input
                                type="text"
                                name="jobType"
                                value={formData.jobType}
                                onChange={handleChange}
                                placeholder="Job Type (e.g., Full-time, Part-time)"
                                className="border p-2 rounded mb-2 w-full"
                                required
                            />
                            <input
                                type="text"
                                name="salary"
                                value={formData.salary}
                                onChange={handleChange}
                                placeholder="Salary"
                                className="border p-2 rounded mb-2 w-full"
                                required
                            />
                            <textarea
                                name="requirements"
                                value={formData.requirements}
                                onChange={handleChange}
                                placeholder="Requirements"
                                className="border p-2 rounded mb-2 w-full"
                                rows="3"
                            />
                            <textarea
                                name="benefits"
                                value={formData.benefits}
                                onChange={handleChange}
                                placeholder="Benefits"
                                className="border p-2 rounded mb-2 w-full"
                                rows="3"
                            />
                            <div className="flex justify-end">
                                <button type="button" onClick={resetForm} className="bg-gray-300 text-black p-2 rounded mr-2">
                                    Cancel
                                </button>
                                <button type="submit" className="bg-blue-500 text-white p-2 rounded">
                                    {isEditing ? 'Update' : 'Add'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Career;