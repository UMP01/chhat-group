import React from "react";
import {
    FaCheck,
    FaUserCheck,
    FaDraftingCompass,
    FaHeadphones,
} from "react-icons/fa";
import Image1 from "../../assets/Images/Homepage/1823.jpg";

const WhyChooseUs = () => {
    return (
        <div className="flex flex-wrap justify-end items-center bg-gray-100">
            <div className="lg:w-1/2 py-5 wow fadeIn" data-wow-delay="0.1s">
                <div className="lg:pl-36 p-5 max-w-4xl">
                    <h6 className="mb-4 pb-2 text-xs sm:text-sm md:text-base lg:text-base primary-color font-medium">
                        Why Choose Us!
                    </h6>
                    <h1 className="mb-4 pb-2 text-gray-600 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
                        Quality Products, Exceptional Service.
                    </h1>
                    <p className="mb-4 pb-2 text-gray-500 text-sm sm:text-base md:text-base lg:text-base font-medium">
                        At Chhat Group, we provide top-quality products and
                        exceptional service to meet all your business needs.
                    </p>
                    <div className="flex flex-wrap font-medium">
                        {[
                            {
                                icon: <FaCheck />,
                                title: "Quality is our priority",
                                description: "Quality",
                            },
                            {
                                icon: <FaUserCheck />,
                                title: "Expert Workers",
                                description: "Expert",
                            },
                            {
                                icon: <FaDraftingCompass />,
                                title: "Free Consultation",
                                description: "Free",
                            },
                            {
                                icon: <FaHeadphones />,
                                title: "Customer Support",
                                description: "Customer",
                            },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="w-full sm:w-1/2 lg:w-1/2 p-2"
                            >
                                <div className="flex items-center justify-start">
                                    <div className="btn-lg-square primary-bg-color text-white rounded-full flex items-center justify-center w-12 h-12">
                                        {item.icon}
                                    </div>
                                    <div className="ml-4">
                                        <p className="mb-0 text-gray-500 text-sm sm:text-sm md:text-base lg:text-base">
                                            {item.description}
                                        </p>
                                        <h5 className="mb-0 text-gray-700 text-sm sm:text-base md:text-base lg:text-base">
                                            {item.title}
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="lg:w-1/2 wow fadeIn" data-wow-delay="0.5s">
                <div className="relative w-full h-full">
                    <img
                        className="w-full h-auto object-cover"
                        src={Image1}
                        alt="Feature"
                    />
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;
