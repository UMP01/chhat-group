import React from "react";
import Image1 from "../../assets/Images/Slideshow/banner11.jpg";
//import { IoMdCheckmark } from "react-icons/io";
import { Link } from "react-router-dom";

const FindOut = () => {
    return (
        <div className="flex flex-wrap justify-center items-center my-10 lg:my-20 bg-style">
            <div
                className="lg:w-1/2 lg:order-1 wow fadeIn"
                data-wow-delay="0.5s"
            >
                <div className="relative w-full">
                    <img
                        className="w-full h-auto object-cover"
                        src={Image1}
                        alt="Feature"
                    />
                </div>
            </div>
            <div className="lg:w-1/2 lg:order-2 lg:pl-5 py-5">
                <div className="p-5">
                    <h6 className="mb-4 pb-2 text-xs sm:text-sm md:text-base lg:text-base text-gray-100">
                        About Us
                    </h6>
                    <h1 className="mb-4 pb-2 text-gray-200 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
                        Find Out Who We Are!
                    </h1>
                    <p className="mb-4 pb-2 text-gray-200 text-sm sm:text-base md:text-base lg:text-base">
                        We provide world-class quality products and services to
                        our customers and trade partners with the highest level
                        of transparency and accountability, through our
                        professional, committed and highly skilled staff.
                    </p>
                    {/*
                    <div className="flex flex-wrap my-1">
                        <div className="btn-lg-square primary-bg-color rounded-full flex items-center justify-center w-6 h-6 text-white">
                            <IoMdCheckmark className="w-3 h-3" />
                        </div>
                        <p className="ms-2 pb-2 text-gray-500 text-sm sm:text-base md:text-base lg:text-base">
                            Vision
                        </p>
                    </div>
                    <div className="flex flex-wrap my-1">
                        <div className="btn-lg-square primary-bg-color rounded-full flex items-center justify-center w-6 h-6 text-white">
                            <IoMdCheckmark className="w-3 h-3" />
                        </div>
                        <p className=" ms-2 pb-2 text-gray-500 text-sm sm:text-base md:text-base lg:text-base">
                            Mission
                        </p>
                    </div>
                    <div className="flex flex-wrap my-1">
                        <div className="btn-lg-square primary-bg-color rounded-full flex items-center justify-center w-6 h-6 text-white">
                            <IoMdCheckmark className="w-3 h-3" />
                        </div>
                        <p className=" ms-2 pb-2 text-gray-500 text-sm sm:text-base md:text-base lg:text-base">
                            Goal
                        </p>
                    </div>
                    <div className="flex flex-wrap my-1 mb-4">
                        <div className="btn-lg-square primary-bg-color rounded-full flex items-center justify-center w-6 h-6 text-white">
                            <IoMdCheckmark className="w-3 h-3" />
                        </div>
                        <p className=" ms-2 pb-2 text-gray-500 text-sm sm:text-base md:text-base lg:text-base">
                            Core Values
                        </p>
                    </div>
                    */}
                    <Link
                        to="/about"
                        className="text-white border-b-2 py-1 text-sm sm:text-base md:text-base lg:text-base hover:text-gray-400 hover:border-gray-400 duration-300 ease-in-out"
                    >
                        Explore More
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FindOut;
