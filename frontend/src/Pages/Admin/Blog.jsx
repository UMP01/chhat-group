import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import { FaRegEdit, FaTrash } from "react-icons/fa";
import { axiosClient } from "../../api/axios";
import DefaultAvatar from "../../assets/Images/default-profile.jpg";
import { IoAdd } from "react-icons/io5";

const ITEMS_PER_PAGE = 5; 
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
        imageUrl: "", // Image preview URL
    });
    
    const [searchTerm, setSearchTerm] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch blog posts from the API
    const fetchPosts = async () => {
        setLoading(true);
        try {
            const response = await axiosClient.get("/blogs");

        console.log(response.data);
        
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
                formData.append('image', postData.image);
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
            if (postData.image) {
                formData.append('image', postData.image);
            }

            const response = await axiosClient.post(`/blogs/${id}`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    "X-HTTP-Method-Override": "PUT" 
                },
            });

            if (response.status !== 200) {
                throw new Error("Failed to update post");
            }
            return response.data;
        } catch (error) {
            console.error('Error during update:', error);
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
            setFormData({ ...formData, image: file, imageUrl: URL.createObjectURL(file) });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.title || !formData.content || !formData.category) {
            alert("Please fill out all required fields.");
            return;
        }

        try {
            if (isEditing && currentPost) {
                const updatedPost = await updatePost(currentPost.id, formData);
                setPosts((prevPosts) => 
                    prevPosts.map((post) => (post.id === currentPost.id ? updatedPost : post))
                );

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
            image: null,
            imageUrl: post.imageUrl || ""
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
            imageUrl: "",
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
    };

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
                        <IoAdd className="text-lg text-white font-medium mr-2" /> Add Blog
                    </button>
                </div>

                <div className="overflow-x-auto px-2">
                <table className="min-w-full table-auto text-sm">
    <thead>
        <tr className="bg-cyan-700 text-left">
            <th className="py-2 px-4 text-white font-medium w-20">No.</th>
            <th className="py-2 px-4 text-white font-medium">Title</th>
            <th className="py-2 px-4 text-white font-medium">Category</th>
            <th className="py-2 px-4 text-white font-medium">Image</th>
            <th className="py-2 px-4 text-white font-medium">Date Posted</th>
            <th className="py-2 px-4 text-white font-medium w-48">Actions</th>
        </tr>
    </thead>
    <tbody>
        {currentBlogs.map((post, index) => (
            <tr key={post.id} className="border-b hover:bg-gray-100">
                <td className="border py-2 px-4 font-medium text-gray-700 text-center">
                    {index + 1 + (currentPage - 1) * ITEMS_PER_PAGE}
                </td>
                <td className="border py-2 px-4 font-medium text-gray-700">{post.title}</td>
                <td className="border py-2 px-4 font-medium text-gray-700">{post.category}</td>
                <td className="border py-2 px-4 text-center">
                    {post.image_url ? ( // Ensure you're using the correct key for image URL
                        <img
                            src={post.image_url}
                            alt={post.title}
                            style={{ width: '100px', height: 'auto' }}
                            className="w-20 h-20 object-cover rounded"
                        />
                    ) : (
                        <span>No image</span>
                    )}
                </td>
                <td className="border py-2 px-4 font-medium text-gray-700">
                    {formatDate(post.created_at)} {/* Ensure this function is correctly defined */}
                </td>
                <td className="border py-2 px-4 text-center">
                    <div className="flex justify-center">
                        <button
                            onClick={() => handleEdit(post)}
                            className="bg-cyan-700 font-medium text-white px-4 py-2 flex items-center rounded-l-md hover:bg-cyan-800 duration-300 ease-in-out"
                        >
                            <FaRegEdit />
                        </button>
                        <button
                            onClick={() => handleDelete(post.id)}
                            className="bg-red-600 font-medium text-white px-4 py-2 rounded-r-md hover:bg-red-700 flex items-center duration-300 ease-in-out"
                        >
                            <FaTrash />
                        </button>
                    </div>
                </td>
            </tr>
        ))}
    </tbody>
</table>

                </div>
                {/* Pagination */}
                <div className="flex justify-between items-center mt-4">
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            aria-label="Previous page"
                            className="primary-bg-color text-white text-sm px-4 py-2 rounded disabled:opacity-50 inline-flex"
                        >
                            <GoArrowLeft className="mr-2 mt-1" />
                            Previous
                        </button>
                    <div>
                        Page {currentPage} of {totalPages}
                    </div>
                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="primary-bg-color text-white text-sm px-4 py-2 rounded disabled:opacity-50 inline-flex"
                    >
                        Next
                        <GoArrowRight className="mt-1 ml-2" />
                    </button>
                </div>

                {modalOpen && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="bg-white p-5 rounded-lg shadow-lg max-w-lg w-full">
                            <h2 className="text-xl font-medium mb-4">{isEditing ? "Edit Blog" : "Add Blog"}</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium mb-2">Title</label>
                                    <input
                                        type="text"
                                        name="title"
                                        value={formData.title}
                                        onChange={handleChange}
                                        className="border p-2 rounded w-full"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium mb-2">Content</label>
                                    <textarea
                                        name="content"
                                        value={formData.content}
                                        onChange={handleChange}
                                        className="border p-2 rounded w-full"
                                        required
                                    ></textarea>
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium mb-2">Category</label>
                                    <input
                                        type="text"
                                        name="category"
                                        value={formData.category}
                                        onChange={handleChange}
                                        className="border p-2 rounded w-full"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium mb-2">Image</label>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleFileChange}
                                        className="border p-2 rounded w-full"
                                    />
                                    {formData.image && (
                                        <img
                                            src={formData.imageUrl || DefaultAvatar}
                                            alt="Selected"
                                            className="mt-2 w-1/3 h-56 object-cover"
                                        />
                                    )}
                                    {isEditing && currentPost && currentPost.imageUrl && !formData.image && (
                                        <img
                                            src={currentPost.imageUrl}
                                            alt="Current Post"
                                            className="mt-2 w-full h-40 object-cover"
                                        />
                                    )}
                                </div>
                                <div className="flex justify-end">
                                    <button
                                        type="button"
                                        onClick={() => setModalOpen(false)}
                                        className="mr-2 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="px-4 py-2 bg-cyan-700 text-white rounded-lg hover:bg-cyan-800"
                                    >
                                        {isEditing ? "Update Blog" : "Create Blog"}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ChhatBlog;
