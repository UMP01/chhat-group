// TeamMember.js
import React from "react";
import PropTypes from "prop-types";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline, IoMailOutline } from "react-icons/io5";

const TeamMember = ({ name, location, role, phone, email, mailLink, image }) => {
    return (
        <div className="rounded-lg p-5 bg-gray-200 bg-opacity-30">
            <div className="flex flex-wrap">
                <div>
                    <img src={image} alt={name} className="rounded-full w-20" />
                </div>
                <div className="px-5">
                    <h6 className="text-gray-800 my-1 font-medium">{name}</h6>
                    <span className="text-gray-500 text-sm flex items-center  font-medium">
                        <IoLocationOutline className="me-1" />
                        {location}
                    </span>
                </div>
            </div>
            <div className="mt-5 font-medium">
                <span className="text-sm bg-cyan-600 p-2 rounded-lg text-cyan-700 bg-opacity-20">
                    {role}
                </span>
                <p className="flex items-center text-gray-700 text-sm my-1 mt-3">
                    <FiPhone className="me-1 text-cyan-700" />
                    {phone}
                </p>
                <a className="flex items-center text-gray-700 text-sm my-1" href={mailLink}>
                    <IoMailOutline className="me-1 text-cyan-700" />
                    {email}
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
    image: PropTypes.string.isRequired,
    mailLink: PropTypes.string,
};

export default TeamMember; // Ensure this line is present
