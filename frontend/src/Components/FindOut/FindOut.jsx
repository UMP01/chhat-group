import React from "react";
import Image1 from "../../assets/Images/Homepage/2634.jpg";
import { IoMdCheckmark } from "react-icons/io";

const FindOut = () => {
    return (
        <div className="flex flex-wrap justify-center items-center mx-4 lg:mx-auto lg:w-4/5 rounded-lg my-10 lg:my-20">
            <div
                className="lg:w-1/2 lg:order-1 wow fadeIn"
                data-wow-delay="0.5s"
            >
                <div className="relative w-full h-full">
                    <img
                        className="w-full h-auto object-cover rounded-lg"
                        src={Image1}
                        alt="Feature"
                    />
                </div>
            </div>
            <div className="lg:w-1/2 lg:order-2 lg:pl-14 py-5">
                <div className="p-5">
                    <h6 className="mb-4 pb-2 text-xs sm:text-sm md:text-base lg:text-base primary-color">
                        About Us
                    </h6>
                    <h1 className="mb-4 pb-2 text-gray-600 text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                        Find Out Who We Are!
                    </h1>
                    <p className="mb-4 pb-2 text-gray-500 text-sm sm:text-base md:text-base lg:text-base">
                        We provide world-class quality products and services to
                        our customers and trade partners with the highest level
                        of transparency and accountability, through our
                        professional, committed and highly skilled staff.
                    </p>
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
                    <button className="text-white primary-bg-color px-6 py-3 rounded-full mt-5 text-sm sm:text-base md:text-base lg:px-10 lg:py-2 lg:text-base">
                        Explore More
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FindOut;
