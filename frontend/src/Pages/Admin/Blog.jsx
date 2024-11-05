import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import { FaRegEdit, FaTrash } from "react-icons/fa";
import { axiosClient } from "../../api/axios";
import { IoAdd } from "react-icons/io5";

const ITEMS_PER_PAGE = 4;

const ChhatBlog = () => {
    const [posts, setPosts] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [currentPost, setCurrentPost] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [formData, setFormData] = useState({
        title: "",
        content: "",
        category: "",
        image: null, // Image file
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
            formData.append("title", postData.title);
            formData.append("content", postData.content);
            formData.append("category", postData.category);
            if (postData.image) {
                formData.append("image", postData.image);
            }

            const response = await axiosClient.post("/blogs", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            if (response.status === 201) {
                return response.data;
            }

            throw new Error("Failed to create post");
        } catch (error) {
            console.error("Error creating post:", error);
            throw error;
        }
    };

    const updatePost = async (id, postData) => {
        try {
            const formData = new FormData();
            formData.append("title", postData.title);
            formData.append("content", postData.content);
            formData.append("category", postData.category);
            if (postData.image) {
                formData.append("image", postData.image);
            }

            const response = await axiosClient.post(`/blogs/${id}`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    "X-HTTP-Method-Override": "PUT",
                },
            });

            if (response.status !== 200) {
                throw new Error("Failed to update post");
            }

            return response.data;
        } catch (error) {
            console.error("Error during update:", error);
            throw error;
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
        const file = e.target.files[0];
        if (file) {
            setFormData({
                ...formData,
                image: file,
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.title || !formData.content || !formData.category) {
            alert("Please fill out all required fields.");
            return;
        }

        try {
            let updatedPost;
            if (isEditing && currentPost) {
                // Update the post with the new image
                updatedPost = await updatePost(currentPost.id, formData);

                // Update the list of posts and current post with the new data (including the new image URL)
                setPosts((prevPosts) =>
                    prevPosts.map((post) =>
                        post.id === currentPost.id ? updatedPost : post
                    )
                );

                // Update currentPost with the new image path for display
                setCurrentPost(updatedPost);

                Swal.fire("Success", "Blog updated successfully!", "success");
            } else {
                // If creating a new post
                const newPost = await createPost(formData);
                setPosts([...posts, newPost]);
                Swal.fire("Success", "Blog created successfully!", "success");
            }

            resetForm();
        } catch (error) {
            console.error(
                "Error during submit:",
                error.response?.data || error.message
            );
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
            image: null, // Reset the image on edit
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

    function handlePageChange(pageNumber) {
        setCurrentPage(pageNumber);
    }

    const filteredBlogs = posts.filter(
        (post) =>
            post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const indexOfLastBlog = currentPage * ITEMS_PER_PAGE;
    const indexOfFirstBlog = indexOfLastBlog - ITEMS_PER_PAGE;
    const totalPages = Math.ceil(filteredBlogs.length / ITEMS_PER_PAGE);
    const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

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
        <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Blogs</h2>
            <div className="bg-white flex flex-col space-y-6 p-5 shadow-lg rounded-lg">
                <div className="flex justify-between px-2 text-sm">
                    <input
                        type="text"
                        placeholder="Search Blogs"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="border px-3 py-2 rounded w-2/6 font-medium text-gray-600"
                    />
                    <button
                        onClick={openModal}
                        className="bg-cyan-700 font-medium text-white py-1 px-4 rounded hover:bg-cyan-800 flex items-center"
                    >
                        <IoAdd className="text-lg text-white font-medium mr-2" />{" "}
                        Add Blog
                    </button>
                </div>

                <div className="overflow-x-auto px-2">
                    <table className="min-w-full table-auto text-sm">
                        <thead>
                            <tr className="bg-cyan-700 text-left">
                                <th className="py-2 px-4 text-white font-medium">
                                    #
                                </th>
                                <th className="py-2 px-4 text-white font-medium">
                                    Title
                                </th>
                                <th className="py-2 px-4 text-white font-medium">
                                    Category
                                </th>
                                <th className="py-2 px-4 text-white font-medium text-center">
                                    Image
                                </th>
                                <th className="py-2 px-4 text-white font-medium">
                                    Created At
                                </th>
                                <th className="py-2 px-4 text-white font-medium">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentBlogs.map((post, index) => (
                                <tr key={post.id}>
                                    <td className="border py-2 px-4">
                                        {index + 1}
                                    </td>
                                    <td className="border py-2 px-4">
                                        {post.title}
                                    </td>
                                    <td className="border py-2 px-4">
                                        {post.category}
                                    </td>
                                    <td className="border py-2 px-4 text-center">
                                        {post.image && (
                                            <img
                                                src={`http://127.0.0.1:8000/storage/${
                                                    post.image
                                                }?${new Date().getTime()}`}
                                                alt={post.title || "News image"}
                                                className="w-20 h-20 object-cover rounded"
                                            />
                                        )}
                                    </td>
                                    <td className="border py-2 px-4">
                                        {formatDate(post.created_at)}
                                    </td>
                                    <td className="border py-2 px-4 text-center">
                                        <button
                                            className="bg-blue-500 text-white p-2 rounded mr-2"
                                            onClick={() => handleEdit(post)}
                                        >
                                            <FaRegEdit />
                                        </button>
                                        <button
                                            className="bg-red-500 text-white p-2 rounded"
                                            onClick={() =>
                                                handleDelete(post.id)
                                            }
                                        >
                                            <FaTrash />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="flex justify-between items-center mt-4">
                    <div className="flex items-center">
                        <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            aria-label="Previous page"
                            className="primary-bg-color text-white text-sm px-4 py-2 rounded disabled:opacity-50 inline-flex"
                        >
                            <GoArrowLeft className="mr-2 mt-1" />
                            Previous
                        </button>
                        <button
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className="primary-bg-color text-white text-sm px-4 py-2 rounded disabled:opacity-50 inline-flex"
                        >
                            Next
                            <GoArrowRight className="mt-1 ml-2" />
                        </button>
                    </div>
                    <div className="text-sm text-gray-500">
                        Page {currentPage} of {totalPages}
                    </div>
                </div>
            </div>

            {modalOpen && (
                <div className="fixed top-0 left-0 z-50 bg-black bg-opacity-50 w-full h-full">
                    <div className="flex justify-center items-center h-full">
                        <div className="bg-white w-11/12 sm:w-96 p-6 rounded-lg shadow-md">
                            <h3 className="text-2xl mb-4">
                                {isEditing ? "Edit Blog" : "Add Blog"}
                            </h3>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label className="block text-gray-700 font-semibold mb-2">
                                        Title
                                    </label>
                                    <input
                                        type="text"
                                        name="title"
                                        value={formData.title}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border rounded"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 font-semibold mb-2">
                                        Category
                                    </label>
                                    <input
                                        type="text"
                                        name="category"
                                        value={formData.category}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border rounded"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 font-semibold mb-2">
                                        Content
                                    </label>
                                    <textarea
                                        name="content"
                                        value={formData.content}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border rounded"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 font-semibold mb-2">
                                        Image
                                    </label>
                                    <input
                                        type="file"
                                        name="image"
                                        onChange={handleFileChange}
                                        className="w-full px-4 py-2 border rounded"
                                    />
                                    {isEditing &&
                                        currentPost &&
                                        currentPost.image && (
                                            <div className="mt-2">
                                                <h4>Current Image:</h4>
                                                <img
                                                    src={`http://127.0.0.1:8000/storage/${
                                                        currentPost.image
                                                    }?${new Date().getTime()}`}
                                                    alt="Current post"
                                                    className="w-20 h-20 object-cover rounded mt-2"
                                                />
                                            </div>
                                        )}
                                </div>

                                <div className="flex justify-end space-x-3">
                                    <button
                                        type="button"
                                        onClick={resetForm}
                                        className="bg-gray-300 text-black px-4 py-2 rounded"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="bg-cyan-700 text-white px-4 py-2 rounded"
                                    >
                                        {isEditing
                                            ? "Update Blog"
                                            : "Create Blog"}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ChhatBlog;
