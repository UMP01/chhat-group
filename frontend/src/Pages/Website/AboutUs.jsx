import React from "react";
import logo from "../../assets/Images/logo.png";
import TeamMembersList from "../../Components/TeamMember/TeamMemberList";

const About = () => {
    const Mission = [
        "To set consistent high standards across all product portfolios...",
        "Continually innovate to improve our e-commerce platform...",
        "Foster transparent and comprehensive dialogues with our trade partners...",
        "Show our commitment to health, safety and the environment...",
        "Provide development opportunities for all employees...",
    ];
    const Goal = [
        "Always be their first choice as a trusted business partner",
        "Impress with our products and services",
        "Very satisfied customers and business partners",
    ];
    const Values = [
        "To offer world-class and high standard products and services",
        "To be a globally recognized and trusted business partner",
        "To ensure transparency and accountability",
        "To work collaboratively with customers and trade partners",
        "To ensure environmental friendliness",
        "To empower employees and ensure equality for all",
    ];
    return (
        <>
            <div className="flex flex-col justify-center items-center bg-gray-100 text-cyan-700 h-72 py-20 px-10 text-center">
                <img src={logo} className="h-20 w-auto" alt={logo} />
                <p className="text-base sm:text-base md:text-lg lg:text-lg font-medium pt-5">
                    Guiding our Clients to Make Right Decisions for a
                    Sustainable Growth
                </p>
            </div>
            <div className="bg-style-01 p-5 md:p-10">
                <div className="flex flex-col md:flex-row items-center justify-center gap-5 text-white">
                    <div className="lg:w-1/3 md:w-1/2 w-full bg-white bg-opacity-10 rounded-md p-5">
                        <p className="uppercase font-medium text-center text-lg">
                            Goal
                        </p>
                        <ul className="p-5 mt-2">
                            {Goal.map((title, index) => (
                                <li
                                    key={index}
                                    className="list-disc text-white text-sm sm:text-base md:text-base lg:text-base font-medium"
                                >
                                    {title}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="lg:w-1/3 md:w-1/2 w-full bg-white bg-opacity-10 rounded-md p-5">
                        <p className="uppercase font-medium text-center text-lg">
                            Core Values
                        </p>
                        <ul className="p-5 mt-2">
                            {Values.map((title, index) => (
                                <li
                                    key={index}
                                    className="list-disc text-white text-sm sm:text-base md:text-base lg:text-base font-medium"
                                >
                                    {title}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="lg:w-1/3 md:w-1/2 w-full bg-white bg-opacity-10 rounded-md p-5">
                        <p className="uppercase font-medium text-center text-lg">
                            Mission
                        </p>
                        <ul className="p-5 mt-2">
                            {Mission.map((title, index) => (
                                <li
                                    key={index}
                                    className="text-white list-disc text-sm sm:text-base md:text-base lg:text-base"
                                >
                                    {title}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="bg-gray-100 pt-5">
                {/* Team Members Section */}
                <div className="container max-w-7xl mx-auto px-5 py-10">
                    <div className="flex flex-col justify-center items-start pl-3 py-5">
                        <h3 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-cyan-700">
                            Meet our team
                        </h3>
                        <p className="text-base sm:text-base md:text-base lg:text-base font-medium text-cyan-700 py-3">
                            We are building the future of Chhat Group together.
                        </p>
                    </div>
                    <TeamMembersList />
                </div>
            </div>
        </>
    );
};

export default About;
