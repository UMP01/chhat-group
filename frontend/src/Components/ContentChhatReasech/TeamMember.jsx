import PropTypes from "prop-types";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline, IoMailOutline } from "react-icons/io5";
import profile01 from "../../assets/Images/AboutUs/profile-01.png";
import profile02 from "../../assets/Images/ChhatResearch/Pic01.jpg";
import profile03 from "../../assets/Images/ChhatResearch/Pic02.jpg";
import profile04 from "../../assets/Images/ChhatResearch/Pic03.jpg";
import profile05 from "../../assets/Images/ChhatResearch/Pic04.jpg";
import profile06 from "../../assets/Images/ChhatResearch/Pic06.jpg";
import profile07 from "../../assets/Images/ChhatResearch/Pic07.jpg";
import profile08 from "../../assets/Images/ChhatResearch/Pic08.jpg";



const teamMembers = [
    {
        name: "Chhat Leangchansocheat",
        location: "Cambodia",
        role: "Founder | Chairman | CEO",
        phone: "(+855) 12-630-103",
        email: "lengchansocheat.chhat@chhatgroup.com",
        mailLink: "mailto:lengchansocheat.chhat@chhatgroup.com",
        image: profile01,
    },
    {
        name: "Tiang Sokheang",
        location: "Cambodia",
        role: "Research Director & CCO",
        phone: "(+855) 126-302-03",
        email: "lengchansocheat.chhat@chhatgroup.com",
        facebook: "Lengchansocheat",
        image: profile02,
    },
    {
        name: "Kheang Soklang",
        location: "Cambodia",
        role: "Operation Director & COO",
        phone: "(+855) 126-302-03",
        email: "lengchansocheat.chhat@chhatgroup.com",
        facebook: "Lengchansocheat",
        image: profile03,
    },
    {
        name: "Toni TeJero",
        location: "Cambodia",
        role: "Research Director",
        phone: "(+855) 126-302-03",
        email: "lengchansocheat.chhat@chhatgroup.com",
        facebook: "Lengchansocheat",
        image: profile04,
    },
    {
        name: "Aden Vizconde",
        location: "Cambodia",
        role: "Research Director",
        phone: "(+855) 126-302-03",
        email: "lengchansocheat.chhat@chhatgroup.com",
        facebook: "Lengchansocheat",
        image: profile05,
    },
    {
        name: "Tim Theavy",
        location: "Cambodia",
        role: "Association Research Manager",
        phone: "(+855) 126-302-03",
        email: "lengchansocheat.chhat@chhatgroup.com",
        facebook: "Lengchansocheat",
        image: profile06,
    },
    {
        name: "Lorn Sipheng",
        location: "Cambodia",
        role: "Association Research Manager",
        phone: "(+855) 126-302-03",
        email: "lengchansocheat.chhat@chhatgroup.com",
        facebook: "Lengchansocheat",
        image: profile07,
    },
    {
        name: "Meach Socheata",
        location: "Cambodia",
        role: "Research Executive",
        phone: "(+855) 126-302-03",
        email: "lengchansocheat.chhat@chhatgroup.com",
        facebook: "Lengchansocheat",
        image: profile08,
    },
];

const TeamMember = ({
    name,
    location,
    role,
    phone,
    email,
    mailLink,
    image,
}) => {
    return (
        <div>
            <div>
                <h3 className="text-lg font-medium text-cyan-700">
                    Meet Our Team Members
                </h3>
                <hr className="w-full my-3 border" />
            </div>
            <div className="flex flex-wrap">
                {teamMembers.map((member, index) => (
                    <div key={index} className="w-full md:w-1/2 lg:w-1/2 p-2">
                        <div className="rounded-lg p-5 bg-gray-50 bg-opacity-30">
                            <div className="flex flex-wrap  font-medium">
                                <div>
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="rounded-full w-20"
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
                            <div className="mt-5 font-medium">
                                <span className="text-sm bg-cyan-600 p-2 rounded-lg text-cyan-700 bg-opacity-20">
                                    {member.role}
                                </span>
                                <p className="flex items-center text-gray-700 text-sm my-1 mt-3">
                                    <FiPhone className="me-1 text-cyan-700" />
                                    {member.phone}
                                </p>
                                <a
                                    className="flex items-center text-gray-700 text-sm my-1"
                                    href={member.mailLink}
                                >
                                    <IoMailOutline className="me-1 text-cyan-700" />
                                    {member.email}
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
    image: PropTypes.string.isRequired,
    mailLink: PropTypes.string,
};
TeamMember.defaultProps = {
    name: "John",
    location: "PhnomPenh",
    role: "CEO",
    phone: "+855 123456789",
    email: "john@example.com",
    image: profile01,
    mailLink: "mailto:info@chhatgroup.com",
};

export default TeamMember;
