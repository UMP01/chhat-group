import React, { useState } from "react";
import { IoAdd } from "react-icons/io5";

const ChhatGroupBlog = () => {
    const [posts, setPosts] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [currentPost, setCurrentPost] = useState(null);
    const [formData, setFormData] = useState({
        title: "",
        content: "",
        author: "",
        datePosted: "",
        tags: "",
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
            setPosts(
                posts.map((post) =>
                    post.id === currentPost.id
                        ? { ...currentPost, ...postData }
                        : post
                )
            );
        } else {
            setPosts([...posts, { id: Date.now(), ...postData }]);
        }
        resetForm();
    };

    const handleEdit = (post) => {
        setIsEditing(true);
        setCurrentPost(post);
        setFormData({
            title: post.title,
            content: post.content,
            author: post.author,
            datePosted: post.datePosted,
            tags: post.tags,
            media: null,
        });
        setModalOpen(true);
    };

    const handleDelete = (id) => {
        setPosts(posts.filter((post) => post.id !== id));
    };

    const openModal = () => {
        setIsEditing(false);
        resetForm();
        setModalOpen(true);
    };

    const resetForm = () => {
        setFormData({
            title: "",
            content: "",
            author: "",
            datePosted: "",
            tags: "",
            media: null,
        });
        setCurrentPost(null);
        setModalOpen(false);
    };

    return (
        <div className="flex flex-col space-y-6 p-5 shadow-lg rounded-lg">
            <div className="flex flex-wrap justify-between items-center">
                <div className="text-cyan-700">
                    <h3 className="text-2xl">Chhat Group Blog</h3>
                </div>
                <button
                    onClick={openModal}
                    className="bg-cyan-700 px-5 py-3 text-sm rounded-lg text-white flex items-center justify-center hover:bg-cyan-800 transition-colors"
                >
                    <IoAdd className="text-lg text-white font-medium mr-2" />{" "}
                    Add Blog
                </button>
            </div>

            <div className="overflow-x-auto">
                <table className="min-w-full table-auto">
                    <thead>
                        <tr className="bg-cyan-700">
                            <th className="py-4 text-white font-medium">
                                Title
                            </th>
                            <th className="py-4 text-white font-medium">
                                Author
                            </th>
                            <th className="py-4 text-white font-medium">
                                Date Posted
                            </th>
                            <th className="py-4 text-white font-medium">
                                Tags
                            </th>
                            <th className="py-4 text-white font-medium">
                                Media
                            </th>
                            <th className="py-4 text-white font-medium">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts.map((post) => (
                            <tr key={post.id} className="border-b">
                                <td className="border p-2">{post.title}</td>
                                <td className="border p-2">{post.author}</td>
                                <td className="border p-2">
                                    {post.datePosted}
                                </td>
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
                                    <button
                                        onClick={() => handleEdit(post)}
                                        className="text-blue-500 hover:underline mr-2"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDelete(post.id)}
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

            {/* Modal */}
            {modalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded shadow-md w-1/3">
                        <h2 className="text-lg font-normal text-cyan-700 mb-4">
                            {isEditing ? "Edit Blog Post" : "Add Blog Post"}
                        </h2>
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
                                className="border mb-3 text-sm block w-full text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-normal file:bg-gray-200 file:text-gray-700 hover:file:bg-gray-300"
                                accept="image/*,video/*"
                                required
                            />
                            <div className="flex justify-end">
                                <button
                                    type="button"
                                    onClick={resetForm}
                                    className="bg-gray-300 text-black px-5 py-2 rounded mr-2"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="bg-blue-500 text-white px-5 py-2 rounded"
                                >
                                    {isEditing ? "Update" : "Add"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ChhatGroupBlog;
