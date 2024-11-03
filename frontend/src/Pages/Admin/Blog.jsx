import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { FaRegEdit, FaTrash } from "react-icons/fa";
import { axiosClient } from "../../api/axios"; // Make sure axiosClient is set up properly
import { IoAdd } from "react-icons/io5";

const ChhatBlog = () => {
    const [posts, setPosts] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [currentPost, setCurrentPost] = useState(null);
    const [formData, setFormData] = useState({
        title: "",
        content: "",
        category: "",
        image: null, // Changed to null to indicate no image selected
    });
    const [searchTerm, setSearchTerm] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch blog posts from the API
    const fetchPosts = async () => {
        setLoading(true);
        try {
            const response = await axiosClient.get("/blogs");
            setPosts(Array.isArray(response.data) ? response.data : []);
        } catch (error) {
            console.error("Error fetching blogs:", error);
            setError("An error occurred while fetching data");
        } finally {
            setLoading(false);
        }
    };

    const createPost = async (postData) => {
        try {
            const formData = new FormData();
            formData.append('title', postData.title);
            formData.append('content', postData.content);
            formData.append('category', postData.category);
            if (postData.image) {
                formData.append('image', postData.image); // Ensure image is the file object
            }

            const response = await axiosClient.post("/blogs", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            if (response.status !== 201) {
                throw new Error("Failed to create post");
            }
            return response.data;
        } catch (error) {
            console.error("Error creating post:", error);
            throw error;
        }
    };

    const updatePost = async (id, postData) => {
        try {
            const formData = new FormData();
            formData.append('title', postData.title);
            formData.append('content', postData.content);
            formData.append('category', postData.category);
    
            // Use the image from formData
            if (postData.image) {
                formData.append('image', postData.image);
            }
    
            // Ensure you use PUT method for update
            const response = await axiosClient.put(`/blogs/${id}`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
    
            if (response.status !== 200) {
                throw new Error("Failed to update post");
            }
            return response.data; // Return the updated post data
        } catch (error) {
            console.error('Error during update:', error);
            throw error; // Rethrow the error to be handled in handleSubmit
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
        setFormData({ ...formData, image: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Ensure all required fields are filled
        if (!formData.title || !formData.content || !formData.category) {
            alert("Please fill out all required fields.");
            return;
        }
    
        try {
            if (isEditing && currentPost) {
                // Pass the id and formData to the updatePost function
                const updatedPost = await updatePost(currentPost.id, formData);
                const updatedPosts = posts.map((post) =>
                    post.id === currentPost.id ? updatedPost : post
                );
                setPosts(updatedPosts);
                Swal.fire("Success", "Blog updated successfully!", "success");
            } else {
                const newPost = await createPost(formData);
                setPosts([...posts, newPost]);
                Swal.fire("Success", "Blog created successfully!", "success");
            }
    
            resetForm();
        } catch (error) {
            console.error("Error during submit:", error.response?.data || error.message);
            Swal.fire(
                "Error",
                "An error occurred while processing your request: " +
                (error.response?.data.message || error.message),
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
            image: null, // Reset image since we are editing
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
            image: null,
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

    if (loading) {
        return (
            <div className="py-72 flex items-center justify-center">
                <div className="flex justify-center items-center border-gray-300 h-7 w-7 animate-spin rounded-full border-2 border-t-sky-700"></div>
            </div>
        );
    }
    if (error) {
        return (
            <div className="bg-red-100 text-red-700 py-5 px-5 rounded-md text-center">
                <p>Error: {error}</p>
            </div>
        );
    }

    return (
        <div className="flex flex-col space-y-6 p-5 shadow-lg rounded-lg">
            <div className="flex flex-wrap justify-between text-sm">
                <input
                    type="text"
                    placeholder="Search Blogs"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="border px-4 py-2 rounded w-2/6 font-medium text-gray-700"
                />
                <button
                    onClick={openModal}
                    className="bg-cyan-700 font-medium px-4 py-2 rounded-lg text-white flex items-center justify-center hover:bg-cyan-800 transition-colors"
                >
                    <IoAdd className="text-lg text-white font-medium mr-2" />{" "}
                    Add Blog
                </button>
            </div>

            <div className="overflow-x-auto">
                <table className="min-w-full table-auto text-sm">
                    <thead>
                        <tr className="bg-cyan-700 text-left">
                            <th className="py-2 px-4 border-2 border-cyan-700 text-white font-medium">
                                ID
                            </th>
                            <th className="py-2 px-4 border-2 border-cyan-700 text-white font-medium">
                                Title
                            </th>
                            <th className="py-2 px-4 border-2 border-cyan-700 text-white font-medium">
                                Category
                            </th>
                            <th className="py-2 px-4 border-2 border-cyan-700 text-white font-medium">
                                Date Posted
                            </th>
                            <th className="py-2 px-4 border-2 border-cyan-700 text-white font-medium">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredBlogs.map((post) => (
                            <tr key={post.id} className="border-b">
                                <td className="py-2 px-4 border-2 border-gray-300">
                                    {post.id}
                                </td>
                                <td className="py-2 px-4 border-2 border-gray-300">
                                    {post.title}
                                </td>
                                <td className="py-2 px-4 border-2 border-gray-300">
                                    {post.category}
                                </td>
                                <td className="py-2 px-4 border-2 border-gray-300">
                                    {formatDate(post.created_at)}
                                </td>
                                <td className="py-2 px-4 border-2 border-gray-300 flex justify-between items-center">
                                    <button
                                        onClick={() => handleEdit(post)}
                                        className="text-cyan-700 hover:underline"
                                    >
                                        <FaRegEdit />
                                    </button>
                                    <button
                                        onClick={() => handleDelete(post.id)}
                                        className="text-red-600 hover:underline"
                                    >
                                        <FaTrash />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Modal for Add/Edit Blog */}
            {modalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-8 rounded shadow-lg">
                        <h2 className="text-lg font-semibold mb-4">
                            {isEditing ? "Edit Blog" : "Add Blog"}
                        </h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-2">
                                    Title
                                </label>
                                <input
                                    type="text"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleChange}
                                    required
                                    className="border w-full p-2 rounded"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-2">
                                    Content
                                </label>
                                <textarea
                                    name="content"
                                    value={formData.content}
                                    onChange={handleChange}
                                    required
                                    className="border w-full p-2 rounded"
                                ></textarea>
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-2">
                                    Category
                                </label>
                                <input
                                    type="text"
                                    name="category"
                                    value={formData.category}
                                    onChange={handleChange}
                                    required
                                    className="border w-full p-2 rounded"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-2">
                                    Image
                                </label>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleFileChange}
                                    className="border p-2 rounded w-full"
                                />
                                {currentPost && currentPost.imageUrl && (
                                    <img
                                        src={currentPost.imageUrl}
                                        alt="Current Post"
                                        className="mt-2 w-full h-auto"
                                    />
                                )}
                            </div>
                            <div className="flex justify-end">
                                <button
                                    type="button"
                                    onClick={resetForm}
                                    className="bg-gray-300 px-4 py-2 rounded mr-2"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="bg-cyan-700 text-white px-4 py-2 rounded"
                                >
                                    {isEditing ? "Update" : "Create"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ChhatBlog;
