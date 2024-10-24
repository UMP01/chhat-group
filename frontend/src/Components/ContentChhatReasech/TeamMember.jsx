import PropTypes from "prop-types";
import profile from "../../assets/Images/AboutUs/1.png";
import { FiPhone } from "react-icons/fi";
import {
    IoLocationOutline,
    IoMailOutline,
    IoLogoFacebook,
} from "react-icons/io5";

const teamMembers = [
    {
        name: "Leang Chansocheat",
        location: "Cambodia",
        role: "Co-Founder & Chairman",
        phone: "(+855) 126-302-03",
        email: "lengchansocheat.chhat@chhatgroup.com",
        mailLink: "mailto:lengchansocheat.chhat@chhatgroup.com",
        facebook: "Lengchansocheat",
        facebookLink: "https://www.facebook.com/",
        image: profile,
    },
    {
        name: "Leang Chansocheat",
        location: "Cambodia",
        role: "Co-Founder & Chairman",
        phone: "(+855) 126-302-03",
        email: "lengchansocheat.chhat@chhatgroup.com",
        facebook: "Lengchansocheat",
        image: profile,
    },
];

const TeamMember = ({name, location, role, phone, email, mailLink, facebook, image}) => {
    return (
        <div>
            <div>
                <h3 className="text-xl text-cyan-700">Team Members</h3>
                <hr className="w-full my-3 border" />
            </div>
            <div className="flex flex-wrap">
                {teamMembers.map((member, index) => (
                    <div key={index} className="w-full md:w-1/2 lg:w-1/2 p-2">
                        <div className="border rounded-lg p-5">
                            <div className="flex flex-wrap">
                                <div>
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="rounded-full w-16"
                                    />
                                </div>
                                <div className="px-5">
                                    <h6 className="text-gray-800 my-1">
                                        {member.name}
                                    </h6>
                                    <span className="text-gray-500 text-sm flex items-center">
                                        <IoLocationOutline className="me-1" />
                                        {member.location}
                                    </span>
                                </div>
                            </div>
                            <div className="mt-5">
                                <span className="text-sm bg-blue-50 p-2 rounded-lg text-blue-900 font-normal">
                                    {member.role}
                                </span>
                                <p className="flex items-center text-gray-700 text-sm my-1 mt-3">
                                    <FiPhone className="me-1 text-blue-600" />
                                    {member.phone}
                                </p>
                                <a
                                    className="flex items-center text-gray-700 text-sm my-1"
                                    href={member.mailLink}
                                >
                                    <IoMailOutline className="me-1 text-blue-600" />
                                    {member.email}
                                </a>
                                <a
                                    className="flex items-center text-gray-700 text-sm"
                                    href={member.facebookLink}
                                >
                                    <IoLogoFacebook className="me-1 text-blue-600" />
                                    {member.facebook}
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
TeamMember.prototype = {
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    phone: PropTypes.number.isRequired,
    email: PropTypes.string.isRequired,
    facebook: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    mailLink: PropTypes.string,
};
TeamMember.defaultProps = {
    name: "John",
    location: "PhnomPenh",
    role: "CEO",
    phone: "+855 123456789",
    email: "john@example.com",
    facebook: "https://facebook.com/",
    image: profile,
    mailLink: "mailto:info@chhatgroup.com"
};

export default TeamMember;
