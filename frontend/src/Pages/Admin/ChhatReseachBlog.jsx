import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { FaRegEdit, FaTrash } from "react-icons/fa";
import { axiosClient } from "../../api/axios"; // Make sure axiosClient is set up properly
import { IoAdd } from "react-icons/io5";

const ChhatResearchBlog = () => {
    const [posts, setPosts] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [currentPost, setCurrentPost] = useState(null);
    const [formData, setFormData] = useState({
        title: "",
        content: "",
        category: "",
        media: null,
    });
    const [searchTerm, setSearchTerm] = useState("");

    // Fetch blog posts from the API
    const fetchPosts = async () => {
        try {
            const response = await axiosClient.get("/blogs");
            console.log("Fetched blogs:", response.data);
            setPosts(Array.isArray(response.data) ? response.data : []);
        } catch (error) {
            console.error("Error fetching blogs:", error);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, media: e.target.files[0] });
    };

    const createPost = async (postData) => {
        const response = await axiosClient.post("/blogs", postData);
        if (response.status !== 201) {
            throw new Error("Failed to create post");
        }
        return response.data;
    };

    const updatePost = async (id, postData) => {
        try {
            await axiosClient.put(`/blogs/${id}`, postData);
        } catch (error) {
            console.error(
                "Update failed:",
                error.response ? error.response.data : error
            );
            throw new Error("Failed to update post");
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Ensure all required fields are filled
        if (!formData.title || !formData.content || !formData.category) {
            alert("Please fill out all required fields.");
            return;
        }

        try {
            // FormData construction
            const postData = new FormData();
            postData.append("title", formData.title);
            postData.append("content", formData.content);
            postData.append("category", formData.category);

            if (formData.media) {
                postData.append("image", formData.media);
            }

            if (isEditing && currentPost) {
                await updatePost(currentPost.id, postData);
                // Update local state accordingly
                const updatedPosts = posts.map((post) =>
                    post.id === currentPost.id ? { ...post, ...formData } : post
                );
                setPosts(updatedPosts);
            } else {
                const newPost = await createPost(postData);
                setPosts([...posts, newPost]);
            }
            resetForm();
        } catch (error) {
            console.error("Error during submit:", error.message);
            Swal.fire(
                "Error",
                "An error occurred while processing your request: " +
                    error.message,
                "error"
            );
        }
    };

    const handleEdit = (post) => {
        setIsEditing(true);
        setCurrentPost(post);
        setFormData({
            title: post.title,
            content: post.content,
            category: post.category,
            media: null,
        });
        setModalOpen(true);
    };

    const handleDelete = async (id) => {
        try {
            const result = await Swal.fire({
                title: "Are you sure?",
                text: "Do you really want to delete this Blog?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!",
            });

            if (result.isConfirmed) {
                await axiosClient.delete(`/blogs/${id}`);
                Swal.fire("Deleted!", "Blog has been deleted.", "success");
                fetchPosts();
            }
        } catch (error) {
            console.error("Error deleting blog:", error);
            Swal.fire("Error", "There was an error deleting the blog", "error");
        }
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
            category: "",
            media: null,
        });
        setCurrentPost(null);
        setModalOpen(false);
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString();
    };

    const filteredBlogs = posts.filter(
        (post) =>
            post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.created_at.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="flex flex-col space-y-6 p-5 shadow-lg rounded-lg">
            <div className="flex flex-wrap justify-between text-sm">
                <input
                    type="text"
                    placeholder="Search Blogs"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="border px-4 py-2 rounded w-1/6"
                />
                <button
                    onClick={openModal}
                    className="bg-cyan-700 px-4 py-2 rounded-lg text-white flex items-center justify-center hover:bg-cyan-800 transition-colors"
                >
                    <IoAdd className="text-lg text-white font-medium mr-2" />{" "}
                    Add Blog
                </button>
            </div>

            <div className="overflow-x-auto">
                <table className="min-w-full table-auto text-sm">
                    <thead>
                        <tr className="bg-cyan-700 text-left">
                            <th className="py-2 px-4 border-2 border-cyan-700 text-white">
                                ID
                            </th>
                            <th className="py-2 px-4 border-2 border-cyan-700 text-white">
                                Title
                            </th>
                            <th className="py-2 px-4 border-2 border-cyan-700 text-white">
                                Category
                            </th>
                            <th className="py-2 px-4 border-2 border-cyan-700 text-white">
                                Date Posted
                            </th>
                            <th className="py-2 px-4 border-2 border-cyan-700 text-white">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredBlogs.length > 0 ? (
                            filteredBlogs.map((post, index) => (
                                <tr
                                    key={post.id}
                                    className="border-b text-gray-700 transition duration-300 ease-in-out hover:bg-gray-100"
                                >
                                    <td className="border py-2 px-4">
                                        {index + 1}
                                    </td>
                                    <td className="border py-2 px-4">
                                        {post.title}
                                    </td>
                                    <td className="border py-2 px-4">
                                        {post.category}
                                    </td>
                                    <td className="border py-2 px-4">
                                        {formatDate(post.created_at)}
                                    </td>
                                    <td className="border py-2 px-4">
                                        <div className="flex">
                                            <button
                                                className="rounded-md rounded-r-none border-cyan-700 bg-cyan-700 text-white px-4 py-2 flex items-center hover:bg-cyan-800 duration-300 ease-in-out"
                                                onClick={() => handleEdit(post)}
                                            >
                                                <FaRegEdit className="mr-2" />
                                                Edit
                                            </button>
                                            <button
                                                className="rounded-md rounded-l-none border-red-600 px-4 py-2 bg-red-600 text-white flex items-center hover:bg-red-700 duration-300 ease-in-out"
                                                onClick={() =>
                                                    handleDelete(post.id)
                                                }
                                            >
                                                <FaTrash />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5" className="text-center p-4">
                                    No blogs found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {modalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 text-sm">
                    <div className="bg-white p-6 rounded shadow-md w-1/3 max-h-[90vh] overflow-y-auto">
                        <h2 className="text-lg font-medium text-cyan-700 mb-4">
                            {isEditing ? "Edit Blog Post" : "Add Blog Post"}
                        </h2>
                        <form onSubmit={handleSubmit}>
                            <label className="text-cyan-700 font-medium">
                                Title
                            </label>
                            <input
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                className="border rounded w-full px-3 py-2 mb-4"
                                required
                            />

                            <label className="text-cyan-700 font-medium">
                                Content
                            </label>
                            <textarea
                                name="content"
                                value={formData.content}
                                onChange={handleChange}
                                className="border rounded w-full px-3 py-2 mb-4"
                                rows="5"
                                required
                            ></textarea>

                            <label className="text-cyan-700 font-medium">
                                Category
                            </label>
                            <input
                                type="text"
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                className="border rounded w-full px-3 py-2 mb-4"
                                required
                            />

                            {isEditing && currentPost && currentPost.image && (
                                <div className="mb-3">
                                    <label className="text-cyan-700 font-medium">
                                        Current Image
                                    </label>
                                    <img
                                        src={`http://127.0.0.1:8000/storage/${currentPost.image}`}
                                        alt={currentPost.title || "Blog image"}
                                        className="w-full object-cover rounded mb-2"
                                    />
                                </div>
                            )}

                            <label className="text-cyan-700 font-medium">
                                Media
                            </label>
                            <input
                                type="file"
                                onChange={handleFileChange}
                                className="border mb-3 text-sm block w-full text-slate-500 rounded leading-6"
                            />

                            <div className="flex justify-end">
                                <button
                                    type="button"
                                    onClick={resetForm}
                                    className="bg-gray-300 px-4 py-2 rounded-lg mr-2 hover:bg-gray-400 transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="bg-cyan-700 px-4 py-2 rounded-lg text-white hover:bg-cyan-800 transition-colors"
                                >
                                    {isEditing ? "Update Blog" : "Add Blog"}
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
