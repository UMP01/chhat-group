import PropTypes from "prop-types";
import { IoLocationOutline, IoMailOutline } from "react-icons/io5";
import profile01 from "../../assets/Images/AboutUs/profile-01.png";
import profile02 from "../../assets/Images/ChhatResearch/Pic01.jpg";
import profile03 from "../../assets/Images/ChhatResearch/Pic02.jpg";
import profile04 from "../../assets/Images/ChhatResearch/Pic03.jpg";
import profile05 from "../../assets/Images/ChhatResearch/Pic04.jpg";
import profile06 from "../../assets/Images/ChhatResearch/Pic06.jpg";
import profile07 from "../../assets/Images/ChhatResearch/Pic07.jpg";
import profile08 from "../../assets/Images/ChhatResearch/Pic08.jpg";
import profile09 from "../../assets/Images/ChhatResearch/Pic09.jpg";
import profile10 from "../../assets/Images/ChhatResearch/Pic10.jpg";
import profile11 from "../../assets/Images/ChhatResearch/Pic11.jpg";
import profile12 from "../../assets/Images/ChhatResearch/Pic12.jpg";
import profile13 from "../../assets/Images/ChhatResearch/Pic13.jpg";
import profile14 from "../../assets/Images/ChhatResearch/Pic14.jpg";

const teamMembers = [
    {
        name: "Chhat Leangchansocheat",
        location: "Cambodia",
        role: "Founder | Chairman | CEO",
        email: "lengchansocheat.chhat@chhatgroup.com",
        mailLink: "mailto:lengchansocheat.chhat@chhatgroup.com",
        image: profile01,
    },
    {
        name: "Tiang Sokheang",
        location: "Cambodia",
        role: "Research Director & CCO",
        email: "sokheang.taing@chhatgroup.com",
        mailLink: "mailto:sokheang.taing@chhatgroup.com",
        image: profile02,
    },
    {
        name: "Kheang Soklang",
        location: "Cambodia",
        role: "Operation Director & COO",
        email: "soklang.kheang@chhatgroup.com",
        mailLink: "mailto:soklang.kheang@chhatgroup.com",
        image: profile03,
    },
    {
        name: "Toni TeJero",
        location: "Cambodia",
        role: "Research Director",
        email: "toni.tejero@chhatgroup.com",
        mailLink: "mailto:toni.tejero@chhatgroup.com",
        image: profile04,
    },
    {
        name: "Aden Vizconde",
        location: "Cambodia",
        role: "Research Director",
        email: "vizconde.aden@chhatgroup.com",
        mailLink: "mailto:vizconde.aden@chhatgroup.com",
        image: profile05,
    },
    {
        name: "Jessica Acuna",
        location: "Philipine",
        role: "Research Director",
        email: "jessica.acuna@chhatgroup.com",
        mailLink: "mailto:jessica.acuna@chhatgroup.com",
        image: profile10,
    },
    {
        name: "Sum Chandy",
        location: "Cambodia",
        role: "Research Manager & Sr.Moderator",
        email: "chandy.sum@chhatgroup.com",
        mailLink: "mailto:chandy.sum@chhatgroup.com",
        image: profile11,
    },
    {
        name: "Chea Sreymom",
        location: "Cambodia",
        role: "Sr.Moderator",
        email: "sreymom.chea@chhatgroup.com",
        mailLink: "mailto:sreymom.chea@chhatgroup.com",
        image: profile13,
    },
    {
        name: "Chhor Chanthyda",
        location: "Cambodia",
        role: "Sr.Moderator",
        email: "chanthyda.chhor@chhatgroup.com",
        mailLink: "mailto:chanthyda.chhor@chhatgroup.com",
        image: profile14,
    },
    {
        name: "Tim Theavy",
        location: "Cambodia",
        role: "Association Research Manager",
        email: "theavy.tim@chhatgroup.com",
        mailLink: "mailto:theavy.tim@chhatgroup.com",
        image: profile06,
    },
    {
        name: "Lorn Sipheng",
        location: "Cambodia",
        role: "Association Research Manager",
        email: "sipheng.lorn@chhatgroup.com",
        mailLink: "mailto:sipheng.lorn@chhatgroup.com",
        image: profile07,
    },
    {
        name: "Rin Ratanakvisal",
        location: "Cambodia",
        role: "Association Research Executive",
        email: "ratanakvisal.rin@chhatgroup.com",
        mailLink: "mailto:ratanakvisal.rin@chhatgroup.com",
        image: profile09,
    },
    {
        name: "Lay Kimly",
        location: "Cambodia",
        role: "Research Executive",
        email: "kimly.lay@chhatgroup.com",
        mailLink: "mailto:kimly.lay@chhatgroup.com",
        image: profile12,
    },
    {
        name: "Meach Socheata",
        location: "Cambodia",
        role: "Research Executive",
        email: "socheata.meach@chhatgroup.com",
        mailLink: "mailto:socheata.meach@chhatgroup.com",
        image: profile08,
    },
];

const TeamMember = ({
    name,
    location,
    role,
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
                        <div className="rounded-lg p-5 bg-gray-50 bg-opacity-30 border border-gray-100">
                            <div className="flex flex-wrap  font-medium">
                                <div>
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="rounded-full w-20 grayscale"
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
                                
                                <a
                                    className="flex items-center text-gray-700 text-sm my-3 hover:scale-105 duration-300 hover:text-cyan-700"
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
    email: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    mailLink: PropTypes.string,
};
TeamMember.defaultProps = {
    name: "John",
    location: "PhnomPenh",
    role: "CEO",
    email: "john@example.com",
    image: profile01,
    mailLink: "mailto:info@chhatgroup.com",
};

export default TeamMember;
