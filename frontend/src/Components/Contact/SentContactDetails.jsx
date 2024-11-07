import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { axiosClient } from "../../api/axios";
import { FaTelegramPlane } from "react-icons/fa";

const SentContactDetails = () => {
    const { id } = useParams();
    const [contact, setContact] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchContactDetails = async () => {
            try {
                const response = await axiosClient.get(`/contacts/${id}`);
                setContact(response.data);
            } catch (error) {
                setError("Error fetching contact details");
            } finally {
                setLoading(false);
            }
        };

        fetchContactDetails();
    }, [id]);
    const handleGoBack = () => {
        navigate("/admin/contact");
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
                <p>{error}</p>
            </div>
        );
    }

    if (!contact) {
        return <p>Contact not found.</p>;
    }

    return (
        <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Contact Details
            </h2>
            <div className="bg-white p-6 shadow-lg rounded-lg">
                <p className="font-medium py-2 text-gray-700">
                    <span className="text-cyan-800">From: </span>
                    {contact.fullname}
                </p>
                <p className="py-2 text-cyan-800">
                    <span className="font-semibold">Email: </span>
                    {contact.email}
                </p>
                <p className="py-2 text-gray-700">
                    <span className="text-cyan-800 font-medium">Subject: </span>
                    {contact.subject}
                </p>
                <p className="py-2 text-gray-700">
                    <span className="text-cyan-800 font-medium">Message: </span>
                    {contact.message}
                </p>
                <p className="py-2 text-gray-700">
                    <span className="text-cyan-800 font-medium">Sent At: </span>
                    {new Date(contact.created_at).toLocaleString()}
                </p>

                <div className="flex justify-start my-2 gap-4">
                    <button
                        onClick={handleGoBack}
                        className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400"
                    >
                        Go Back
                    </button>
                    <a
                        href={`mailto:${contact.email}`}
                        className="bg-cyan-700 inline-flex items-center duration-300 text-sm text-white py-2 px-4 rounded hover:bg-cyan-800 transition duration-300"
                    >
                        Send Mail
                        <FaTelegramPlane className="ml-2" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default SentContactDetails;
