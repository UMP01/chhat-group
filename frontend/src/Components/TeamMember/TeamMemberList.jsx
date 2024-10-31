// TeamMembersList.js
import React from "react";
import TeamMember from "./TeamMember"; // Ensure the path is correct
import profile01 from "../../assets/Images/AboutUs/profile-01.png"; 
import profile02 from "../../assets/Images/AboutUs/profile-02.png"; 
import profile03 from "../../assets/Images/AboutUs/profile-03.png"; 
import profile04 from "../../assets/Images/AboutUs/profile-04.png"; 



const teamMembers = [
    {
        name: "Chhat Chansocheat",
        role: "Founder | Chairman | CEO",
        location: "Cambodia",
        phone: "(+855) 12-630-103",
        email: "lengchansocheat.chhat@chhatgroup.com",
        mailLink: "mailto:lengchansocheat.chhat@chhatgroup.com",
        image: profile01,
    },
    {
        name: "Chhat Lengchanchhaya",
        role: "Co-Founder | BOD Member",
        location: "Cambodia",
        phone: "(+855) 77-363-739",
        email: "lengchanchhaya.chhat@chhatgroup.com",
        mailLink: "mailto:lengchanchhaya.chhat@chhatgroup.com",
        image: profile03,
    },
    {
        name: "Chhat Lengchanbunchay",
        role: "Digital Marketing Manager",
        location: "Cambodia",
        phone: "(+855) 12-938-400",
        email: "lengbunchhay.chhat@chhatgroup.com",
        mailLink: "mailto:lengbunchhay.chhat@chhatgroup.com",
        image: profile02,
    },
    {
        name: "Heng Bunikan",
        role: "Sale & Marketing Manager",
        location: "Cambodia",
        phone: "(+855) 12-704-867",
        email: "bunikan.Heng@chhatgroup.com",
        mailLink: "mailto:bunikan.Heng@chhatgroup.com",
        image: profile04,
    },
];

const TeamMembersList = () => (
    <div className="flex flex-wrap">
        {teamMembers.map((member, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/3 p-2">
                <TeamMember {...member} />
            </div>
        ))}
    </div>
);

export default TeamMembersList;
