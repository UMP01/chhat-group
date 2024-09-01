import React, { useState } from 'react';

const ChhatResearchBlog = () => {
    const [posts, setPosts] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [currentPost, setCurrentPost] = useState(null);
    const [formData, setFormData] = useState({
        title: '',
        content: '',
        author: '',
        datePosted: '',
        tags: '',
        media: null, // Store the uploaded file
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, media: e.target.files[0] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const mediaUrl = URL.createObjectURL(formData.media); // Create a URL for the uploaded file
        const postData = { ...formData, media: mediaUrl };

        if (isEditing) {
            setPosts(posts.map(post => (post.id === currentPost.id ? { ...currentPost, ...postData } : post)));
        } else {
            setPosts([...posts, { id: Date.now(), ...postData }]);
        }
        resetForm();
    };

    const handleEdit = (post) => {
        setIsEditing(true);
        setCurrentPost(post);
        setFormData({ title: post.title, content: post.content, author: post.author, datePosted: post.datePosted, tags: post.tags, media: null });
        setModalOpen(true);
    };

    const handleDelete = (id) => {
        setPosts(posts.filter(post => post.id !== id));
    };

    const openModal = () => {
        setIsEditing(false);
        resetForm();
        setModalOpen(true);
    };

    const resetForm = () => {
        setFormData({
            title: '',
            content: '',
            author: '',
            datePosted: '',
            tags: '',
            media: null,
        });
        setCurrentPost(null);
        setModalOpen(false);
    };

    return (
        <div className="flex flex-col space-y-6">
            <button onClick={openModal} className="bg-sky-500 text-white p-2 rounded mb-4">
                Add Blog Post
            </button>

            <div className="overflow-x-auto">
                <table className="min-w-full border">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="border p-2">Title</th>
                            <th className="border p-2">Author</th>
                            <th className="border p-2">Date Posted</th>
                            <th className="border p-2">Tags</th>
                            <th className="border p-2">Media</th>
                            <th className="border p-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts.map(post => (
                            <tr key={post.id} className="border-b">
                                <td className="border p-2">{post.title}</td>
                                <td className="border p-2">{post.author}</td>
                                <td className="border p-2">{post.datePosted}</td>
                                <td className="border p-2">{post.tags}</td>
                                <td className="border p-2">
                                    {post.media && (
                                        <img 
                                            src={post.media} 
                                            alt="Media Thumbnail" 
                                            className="w-20 h-20 object-cover"
                                        />
                                    )}
                                </td>
                                <td className="border p-2">
                                    <button onClick={() => handleEdit(post)} className="text-blue-500 hover:underline mr-2">
                                        Edit
                                    </button>
                                    <button onClick={() => handleDelete(post.id)} className="text-red-500 hover:underline">
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
                        <h2 className="text-lg font-bold mb-4">{isEditing ? 'Edit Blog Post' : 'Add Blog Post'}</h2>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                placeholder="Title"
                                className="border p-2 rounded mb-2 w-full"
                                required
                            />
                            <textarea
                                name="content"
                                value={formData.content}
                                onChange={handleChange}
                                placeholder="Content"
                                className="border p-2 rounded mb-2 w-full"
                                rows="5"
                                required
                            />
                            <input
                                type="text"
                                name="author"
                                value={formData.author}
                                onChange={handleChange}
                                placeholder="Author"
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
                                name="tags"
                                value={formData.tags}
                                onChange={handleChange}
                                placeholder="Tags (comma-separated)"
                                className="border p-2 rounded mb-2 w-full"
                            />
                            <input
                                type="file"
                                name="media"
                                onChange={handleFileChange}
                                className="border p-2 rounded mb-2 w-full"
                                accept="image/*,video/*"
                                required
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

export default ChhatResearchBlog;