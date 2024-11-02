import React, { useState, useEffect } from "react";
import { axiosClient } from "../../api/axios";
import Swal from "sweetalert2";
import { FaTelegramPlane } from "react-icons/fa";
import { FaTrash, FaSync, FaEnvelope } from "react-icons/fa";
import { CiViewTimeline } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

const ITEMS_PER_PAGE = 5; // Number of items to display per page

const Contact = () => {
    const [contacts, setContacts] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedContact, setSelectedContact] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1); // State for the current page

    const fetchContacts = async () => {
        setLoading(true);
        try {
            const response = await axiosClient.get("/contacts");
            console.log("Fetched contacts:", response.data);
            const activeContacts = Array.isArray(response.data)
                ? response.data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at)) // Sort in descending order
                : [];
            setContacts(activeContacts);
        } catch (error) {
            console.error("Error fetching contacts:", error);
            setError("An error occurred while fetching data");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchContacts();
    }, []);

    const handleDelete = async (id) => {
        try {
            const result = await Swal.fire({
                title: "Are you sure?",
                text: "Do you really want to delete this Contact?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!",
            });

            if (result.isConfirmed) {
                await axiosClient.delete(`/contacts/${id}`);
                Swal.fire("Deleted!", "Contact has been deleted.", "success");
                fetchContacts();
            }
        } catch (error) {
            console.error("Error deleting contact:", error);
            Swal.fire(
                "Error",
                "There was an error deleting the contact",
                "error"
            );
        }
    };

    const handleViewDetails = (contact) => {
        setSelectedContact(contact);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedContact(null);
    };

    const filteredContacts = contacts.filter(
        (contact) =>
            contact.fullname.toLowerCase().includes(searchTerm.toLowerCase()) ||
            contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            contact.subject.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // New function to refresh contacts and clear search
    const handleRefresh = () => {
        fetchContacts();
        setSearchTerm(""); // Clear the search term
    };

    // Calculate pagination
    const indexOfLastContact = currentPage * ITEMS_PER_PAGE;
    const indexOfFirstContact = indexOfLastContact - ITEMS_PER_PAGE;
    const currentContacts = filteredContacts.slice(indexOfFirstContact, indexOfLastContact);
    const totalPages = Math.ceil(filteredContacts.length / ITEMS_PER_PAGE);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

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
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact</h2>
            <div className="bg-white flex flex-col space-y-6 p-5 shadow-lg rounded-lg">
                <div className="flex justify-between px-2 text-sm">
                    <input
                        type="text"
                        placeholder="Search Contact"
                        className="border px-4 py-2 rounded w-1/3 font-medium text-gray-700"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button
                        className="bg-green-600 font-medium text-white py-2 px-4 rounded hover:bg-green-700 duration-300 ease-in-out flex items-center justify-center"
                        onClick={handleRefresh}
                    >
                        <FaSync className="mr-2" />
                        Refresh
                    </button>
                </div>
                <div className="overflow-x-auto px-2 flex justify-center">
                    <table className="min-w-full table-auto text-sm text-center">
                        <thead>
                            <tr className="bg-cyan-700 rounded-lg">
                                <th className="py-2 px-4 border-2 border-cyan-700 text-white font-medium">
                                    No.
                                </th>
                                <th className="py-2 px-4 border-2 border-cyan-700 text-white font-medium">
                                    Name
                                </th>
                                <th className="py-2 px-4 border-2 border-cyan-700 text-white font-medium">
                                    Message
                                </th>
                                <th className="py-2 px-4 border-2 border-cyan-700 text-white font-medium">
                                    Subject
                                </th>
                                <th className="py-2 px-4 border-2 border-cyan-700 text-white font-medium">
                                    Sent Date
                                </th>
                                <th className="py-2 px-4 border-2 border-cyan-700 text-white font-medium">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentContacts.length > 0 ? (
                                currentContacts.map((contact, index) => (
                                    <tr
                                        key={contact.id}
                                        className="border-b text-gray-800 transition duration-300 ease-in-out hover:bg-gray-100"
                                    >
                                        <td className="border py-2 px-4 font-medium text-gray-700">
                                            {index + indexOfFirstContact + 1}
                                        </td>
                                        <td className="border py-2 px-4 font-medium text-gray-700  text-left">
                                            {contact.fullname}
                                        </td>
                                        <td className="border py-2 px-4 font-medium text-gray-700  text-left">
                                            {contact.message}
                                        </td>
                                        <td className="border py-2 px-4 font-medium text-gray-700  text-left">
                                            {contact.subject}
                                        </td>
                                        <td className="border py-2 px-4 font-medium text-gray-700">
                                            {formatDate(contact.created_at)}
                                        </td>
                                        <td className="border py-2 px-4 text-center">
                                            <div className="flex justify-center">
                                                <button
                                                    className="bg-cyan-700 font-medium text-white px-4 py-2 flex items-center rounded-l-md hover:bg-cyan-800 duration-300 ease-in-out"
                                                    onClick={() =>
                                                        handleViewDetails(contact)
                                                    }
                                                >
                                                    <CiViewTimeline className="mr-2" />
                                                    View
                                                </button>
                                                <button
                                                    className="bg-red-600 font-medium text-white px-4 py-2 rounded-r-md hover:bg-red-700 flex items-center duration-300 ease-in-out"
                                                    onClick={() =>
                                                        handleDelete(contact.id)
                                                    }
                                                >
                                                    <FaTrash className="mr-2" />
                                                    Delete
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td
                                        colSpan="6" // Adjusted to match the number of columns
                                        className="text-center p-4 font-medium"
                                    >
                                        No contacts found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                <div className="flex justify-between items-center mt-4">
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="bg-gray-300 text-gray-700 px-4 py-2 rounded disabled:opacity-50"
                    >
                        Previous
                    </button>
                    <div>
                        Page {currentPage} of {totalPages}
                    </div>
                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="bg-gray-300 text-gray-700 px-4 py-2 rounded disabled:opacity-50"
                    >
                        Next
                    </button>
                </div>
                {isModalOpen && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-20 z-50">
                    <div className="bg-white rounded-lg shadow-lg w-11/12 max-w-lg">
                        <div className="bg-cyan-700 text-white p-5 rounded-t-lg flex justify-between">
                            <h2 className="text-lg font-normal flex items-center">
                                <FaEnvelope className="me-2" />
                                Contact Details
                            </h2>
                            <button onClick={closeModal}>
                                <IoMdClose className="w-6 h-6" />
                            </button>
                        </div>
                        {selectedContact && (
                            <div className="text-gray-700 p-5">
                                <p className="pb-2">
                                    <span className="text-cyan-800 font-medium">
                                        From:{" "}
                                    </span>
                                    {selectedContact.fullname}
                                </p>
                                <a
                                    className="py-10"
                                    href={`mailto:${selectedContact.email}`}
                                >
                                    <span className="text-cyan-800 font-medium">
                                        Email:{" "}
                                    </span>
                                    {selectedContact.email}
                                </a>
                                <p className="py-2">
                                    <span className="text-cyan-800 font-medium">
                                        Subject:{" "}
                                    </span>
                                    {selectedContact.subject}
                                </p>
                                <p className="py-2">
                                    <span className="text-cyan-800 font-medium">
                                        Message:{" "}
                                    </span>
                                    {selectedContact.message}
                                </p>
                                <p className="py-2">
                                    <span className="text-cyan-800 font-medium">
                                        Sent At:{" "}
                                    </span>
                                    {formatDate(selectedContact.created_at)}
                                </p>
                                <div className="flex justify-end">
                                <a href={`mailto:${selectedContact.email}`} className="bg-cyan-600 inline-flex items-center transition delay-900 duration-500 ease-in-out text-white py-2 px-4 rounded hover:bg-cyan-700">
                                    Send Mail
                                    <FaTelegramPlane className="ml-2" />
                                </a>
                            </div>
                            </div>
                        )}
            </div>
                </div>
            )}
            </div>
        </div>
    );
};

const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString(); // Format as needed
};

export default Contact;
