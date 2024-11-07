import React, { useState, useEffect } from "react";
import { axiosClient } from "../../api/axios"; // Ensure this is your API client
import { FaSync, FaTrash } from "react-icons/fa"; // Correct import for FaTrash
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import { CiViewTimeline } from "react-icons/ci";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Swal from "sweetalert2"; // Ensure SweetAlert2 is installed

const ITEMS_PER_PAGE = 5;

const SentContact = () => {
    const [sentContacts, setSentContacts] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);

    // Fetch sent contacts (you can adapt this endpoint to fetch only the sent ones)
    const fetchSentContacts = async () => {
        setLoading(true);
        try {
            const response = await axiosClient.get("/contacts"); // Adjust API endpoint if needed
            const activeSentContacts = Array.isArray(response.data)
                ? response.data.sort(
                      (a, b) => new Date(b.created_at) - new Date(a.created_at)
                  )
                : [];
            setSentContacts(activeSentContacts);
        } catch (error) {
            setError("An error occurred while fetching sent contacts");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchSentContacts();
    }, []);

    const filteredContacts = sentContacts.filter(
        (contact) =>
            contact.fullname.toLowerCase().includes(searchTerm.toLowerCase()) ||
            contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            contact.subject.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleRefresh = () => {
        fetchSentContacts();
        setSearchTerm("");
    };

    const indexOfLastContact = currentPage * ITEMS_PER_PAGE;
    const indexOfFirstContact = indexOfLastContact - ITEMS_PER_PAGE;
    const currentContacts = filteredContacts.slice(
        indexOfFirstContact,
        indexOfLastContact
    );
    const totalPages = Math.ceil(filteredContacts.length / ITEMS_PER_PAGE);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

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
                // Perform the delete operation
                await axiosClient.delete(`/contacts/${id}`);
                Swal.fire("Deleted!", "Contact has been deleted.", "success");
                // Refresh the list of contacts after deletion
                fetchSentContacts();
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

    if (loading) {
        return (
            <div className="py-72 flex items-center justify-center">
                <div className="flex justify-center items-center border-gray-300 h-7 w-7 animate-spin rounded-full border-2 border-t-sky-700"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="bg-red-100 text-red-700 py-5 px-5 rounded-md">
                <p>{error}</p>
            </div>
        );
    }

    return (
        <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Sent Contacts
            </h2>
            <div className="bg-white flex flex-col space-y-6 p-5 shadow-lg rounded-lg">
                <div className="flex justify-between px-2 text-sm">
                    <input
                        type="text"
                        placeholder="Search Sent Contacts"
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
                    <table className="min-w-full table-auto text-sm">
                        <thead>
                            <tr className="bg-cyan-700 rounded-lg text-left">
                                <th className="py-2 px-4 border-2 border-cyan-700 text-white font-medium">
                                    No.
                                </th>
                                <th className="py-2 px-4 border-2 border-cyan-700 text-white font-medium">
                                    Name
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
                                        <td className="border py-2 px-4 font-medium text-gray-700" style={{width: '4%'}}>
                                            {index + indexOfFirstContact + 1}
                                        </td>
                                        <td className="border py-2 px-4 font-medium text-gray-700 text-left w-2/12">
                                            {contact.fullname}
                                        </td>
                                        <td className="border py-2 px-4 font-medium text-gray-700 text-left">
                                            {contact.subject}
                                        </td>
                                        <td className="border py-2 px-4 font-medium text-gray-700  w-2/12">
                                            {formatDate(contact.created_at)}
                                        </td>
                                        <td className="border py-2 px-4 w-2/12">
                                            <div className="flex">
                                                <Link
                                                    to={`/admin/contact/sent/${contact.id}`} // Link to the details page
                                                    className="bg-cyan-700 font-medium text-white px-4 py-2 flex items-center rounded-l-md hover:bg-cyan-800 duration-300 ease-in-out"
                                                >
                                                    <CiViewTimeline className="mr-2" />
                                                    View
                                                </Link>
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
                                        colSpan="5"
                                        className="text-center p-4 font-medium"
                                    >
                                        No sent contacts found.
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
                        aria-label="Previous page"
                        className="bg-cyan-700 text-white text-sm px-4 py-2 rounded disabled:opacity-50 inline-flex hover:shadow-lg duration-300 hover:bg-cyan-600"
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
                        className="bg-cyan-700 text-white text-sm px-4 py-2 rounded disabled:opacity-50 inline-flex hover:shadow-lg duration-300 hover:bg-cyan-600"
                    >
                        Next
                        <GoArrowRight className="mt-1 ml-2" />
                    </button>
                </div>
            </div>
        </div>
    );
};

const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString();
};

export default SentContact;
