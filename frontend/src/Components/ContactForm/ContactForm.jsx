import React, { useState } from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { axiosClient } from "../../api/axios"; // Adjust the import path if necessary
import Swal from "sweetalert2";

const ContactForm = () => {
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!fullname || !email || !subject || !message) {
            Swal.fire("Error", "All fields are required.", "error");
            return;
        }

        setLoading(true);

        try {
            const response = await axiosClient.post("/contacts", {
                fullname,
                email,
                subject,
                message,
            });

            Swal.fire("Success", "Your message has been sent!", "success");
            setFullname("");
            setEmail("");
            setSubject("");
            setMessage("");
        } catch (error) {
            console.error("Error sending contact form:", error);
            Swal.fire(
                "Error",
                "There was a problem sending your message.",
                "error"
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-4 max-w-xl mx-auto">
            <h3 className="text-2xl font-semibold primary-color my-5">
                Message Us
            </h3>
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <input
                            type="text"
                            id="fullname"
                            name="txtFullname"
                            value={fullname}
                            onChange={(e) => setFullname(e.target.value)}
                            placeholder="Fullname"
                            className="mt-1 p-2 w-full border-2 rounded-md focus:border-cyan-500 focus:outline-none"
                        />
                    </div>
                    <div>
                        <input
                            type="email"
                            id="email"
                            name="txtemail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                            className="mt-1 p-2 w-full border-2 rounded-md focus:border-cyan-500 focus:outline-none"
                        />
                    </div>
                </div>

                <div className="my-3">
                    <input
                        type="text"
                        placeholder="Subject"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="mt-1 p-2 w-full border-2 rounded-md focus:border-cyan-500 focus:outline-none"
                    />
                </div>
                <div className="my-3">
                    <textarea
                        rows="4"
                        placeholder="Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="mt-1 w-full px-3 py-2 border-2 rounded-md focus:outline-none focus:border-cyan-500"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="inline-flex items-center px-10 py-2 primary-bg-color text-white rounded-md hover:bg-gray-100 hover:text-cyan-500 transition delay-900 duration-500 ease-in-out"
                    disabled={loading}
                >
                    {loading ? "Sending..." : "Send"}{" "}
                    <FaTelegramPlane className="ml-2" />
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
