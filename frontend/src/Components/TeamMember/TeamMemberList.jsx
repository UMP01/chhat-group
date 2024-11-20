import React from "react";
import TeamMember from "./TeamMember";
import profile01 from "../../assets/Images/AboutUs/profile-01.png"; 
import profile02 from "../../assets/Images/AboutUs/profile-02.png"; 
import profile03 from "../../assets/Images/AboutUs/profile03.jpg"; 
import profile04 from "../../assets/Images/AboutUs/profile-04.jpg";
import sovichea from "../../assets/Images/AboutUs/sovichea.png";
import mengleng from "../../assets/Images/AboutUs/mengleng.png";
import dyna from "../../assets/Images/AboutUs/dyna.png";

const teamMembers = [
    {
        name: "Chhat Lengchansocheat",
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
        name: "Mengleng Touch",
        role: "BD Director",
        location: "Cambodia",
        phone: "(+855) 17-711-911",
        email: "mengleng.touch@chhatgroup.com",
        mailLink: "mailto:mengleng.touch@chhatgroup.com",
        image: mengleng,
    },
    {
        name: "Heng Bunikan",
        role: "Sale & Marketing Director",
        location: "Cambodia",
        phone: "(+855) 12-704-867",
        email: "bunikan.heng@chhatgroup.com",
        mailLink: "mailto:bunikan.heng@chhatgroup.com",
        image: profile04,
    },
    {
        name: "Sovichea Ouch",
        role: "Senior IT Manager",
        location: "Cambodia",
        phone: "(+855) 10-888-339",
        email: "sovichea.ouch@chhatgroup.com",
        mailLink: "mailto:sovichea.ouch@chhatgroup.com",
        image: sovichea,
    },
    {
        name: "Dyna Touch",
        role: "IT and Digital Creator Supervisor",
        location: "Cambodia",
        phone: "(+855) 88-554-0941",
        email: "dyna.touch@chhatgroup.com",
        mailLink: "mailto:dyna.touch@chhatgroup.com",
        image: dyna,
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
