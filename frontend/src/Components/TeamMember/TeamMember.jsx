// TeamMember.js
import React from "react";
import PropTypes from "prop-types";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline, IoMailOutline, IoLogoFacebook } from "react-icons/io5";

const TeamMember = ({ name, location, role, phone, email, mailLink, facebook, image }) => {
    return (
        <div className="border rounded-lg p-5">
            <div className="flex flex-wrap">
                <div>
                    <img src={image} alt={name} className="rounded-full w-16" />
                </div>
                <div className="px-5">
                    <h6 className="text-gray-800 my-1">{name}</h6>
                    <span className="text-gray-500 text-sm flex items-center">
                        <IoLocationOutline className="me-1" />
                        {location}
                    </span>
                </div>
            </div>
            <div className="mt-5">
                <span className="text-sm bg-blue-50 p-2 rounded-lg text-blue-900 font-normal">
                    {role}
                </span>
                <p className="flex items-center text-gray-700 text-sm my-1 mt-3">
                    <FiPhone className="me-1 text-blue-600" />
                    {phone}
                </p>
                <a className="flex items-center text-gray-700 text-sm my-1" href={mailLink}>
                    <IoMailOutline className="me-1 text-blue-600" />
                    {email}
                </a>
                <a className="flex items-center text-gray-700 text-sm" href={facebook}>
                    <IoLogoFacebook className="me-1 text-blue-600" />
                    {facebook}
                </a>
            </div>
        </div>
    );
};

TeamMember.propTypes = {
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    facebook: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    mailLink: PropTypes.string,
};

export default TeamMember; // Ensure this line is present
