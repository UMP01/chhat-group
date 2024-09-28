import React, { useState, useEffect } from "react";
import { axiosClient } from "../../api/axios";
import Swal from "sweetalert2";
import { FaTrash, FaSync, FaEnvelope } from "react-icons/fa";
import { CiViewTimeline } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

const Contact = () => {
    const [contacts, setContacts] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedContact, setSelectedContact] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const fetchContacts = async () => {
        try {
            const response = await axiosClient.get("/contacts");
            console.log("Fetched contacts:", response.data);
            const activeContacts = Array.isArray(response.data)
                ? response.data
                : [];
            setContacts(activeContacts);
        } catch (error) {
            console.error("Error fetching contacts:", error);
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

    return (
        <div className="flex flex-col space-y-6 p-5 shadow-lg rounded-lg">
            <div className="flex justify-between px-2">
                <input
                    type="text"
                    placeholder="Search Contact"
                    className="border px-3 py-2 rounded w-1/3"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button
                    className="bg-green-600 text-white py-2 px-5 rounded hover:bg-green-700 duration-300 ease-in-out flex items-center justify-center"
                    onClick={handleRefresh}
                >
                    <FaSync className="mr-2" />
                    Refresh
                </button>
            </div>
            <div className="overflow-x-auto px-2">
                <table className="min-w-full table-auto">
                    <thead>
                        <tr className="bg-cyan-700 rounded-lg">
                            <th className="py-4 px-3 text-white font-medium rounded-tl-md text-left">
                                No.
                            </th>
                            <th className="py-4 px-3 text-white font-medium text-left">
                                Name
                            </th>
                            <th className="py-4 px-3 text-white font-medium text-left">
                                Email
                            </th>
                            <th className="py-4 px-3 text-white font-medium text-left">
                                Subject
                            </th>
                            <th className="py-4 px-3 text-white font-medium text-left">
                                Sent Date
                            </th>
                            <th className="py-4 px-3 text-white font-medium rounded-tr-md text-left">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredContacts.length > 0 ? (
                            filteredContacts.map((contact, index) => (
                                <tr
                                    key={contact.id}
                                    className="border-b text-gray-800 transition duration-300 ease-in-out hover:bg-gray-100"
                                >
                                    <td className="border p-3 text-left">
                                        {index + 1}
                                    </td>
                                    <td className="border p-3 text-left">
                                        {contact.fullname}
                                    </td>
                                    <td className="border p-3 text-left">
                                        {contact.email}
                                    </td>
                                    <td className="border p-3 text-left">
                                        {contact.subject}
                                    </td>
                                    <td className="border p-3 text-left">
                                        {formatDate(contact.created_at)}
                                    </td>
                                    <td className="border p-3 text-left">
                                        <div className="flex space-x-2">
                                            <button
                                                className="rounded-md bg-cyan-700 text-white px-4 py-2 flex items-center hover:bg-cyan-800 duration-300 ease-in-out"
                                                onClick={() =>
                                                    handleViewDetails(contact)
                                                }
                                            >
                                                <CiViewTimeline className="mr-2" />
                                                View
                                            </button>
                                            <button
                                                className="rounded-md bg-red-600 text-white px-4 py-2 flex items-center hover:bg-red-700 duration-300 ease-in-out"
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
                                <td colSpan="7" className="text-center p-4">
                                    No contacts found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
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
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

// Helper function to format date
const formatDate = (dateString) => {
    const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
};

export default Contact;
