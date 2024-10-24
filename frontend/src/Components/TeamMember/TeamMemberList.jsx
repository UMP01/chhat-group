// TeamMembersList.js
import React from "react";
import TeamMember from "./TeamMember"; // Ensure the path is correct
import profile from "../../assets/Images/AboutUs/1.png"; // Adjust the path as necessary

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
        mailLink: "mailto:lengchansocheat.chhat@chhatgroup.com",
        facebook: "Lengchansocheat",
        image: profile,
    },
    {
        name: "Leang Chansocheat",
        location: "Cambodia",
        role: "Co-Founder & Chairman",
        phone: "(+855) 126-302-03",
        email: "lengchansocheat.chhat@chhatgroup.com",
        mailLink: "mailto:lengchansocheat.chhat@chhatgroup.com",
        facebook: "Lengchansocheat",
        image: profile,
    },
];

const TeamMembersList = () => (
    <div className="flex flex-wrap">
        {teamMembers.map((member, index) => (
            <div key={index} className="w-full md:w-1/3 lg:w-1/3 p-2">
                <TeamMember {...member} />
            </div>
        ))}
    </div>
);

export default TeamMembersList;
