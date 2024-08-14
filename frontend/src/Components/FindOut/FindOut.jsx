import React from "react";
import Image1 from "../../assets/Images/Homepage/2634.jpg";
import { IoMdCheckmark } from "react-icons/io";

const FindOut = () =>{
    return(
            <div className="flex flex-wrap mx-0 justify-center items-center bg-feature my-20">
                <div className="lg:w-1/2 wow fadeIn" data-wow-delay="0.5s">
                    <div className="relative w-full h-full">
                        <img
                            className="w-full h-auto object-cover"
                            src={Image1}
                            alt="Feature"
                        />
                    </div>
                </div>
                <div className="lg:w-1/2 py-5 feature-text-right wow fadeIn" data-wow-delay="0.5s">
                    <div className="lg:pl-14 p-5">
                        <h6 className="mb-4 pb-2 primary-color">About Us</h6>
                        <h1 className="mb-4 pb-2 text-4xl text-gray-600">
                            Find out who we are!
                        </h1>
                        <p className="mb-4 pb-2 text-gray-500">
                            We provide world-class quality products and services to our customers and trade partners with the highest level of transparency and accountability, through our professional, committed and highly skilled staff. 
                        </p>
                        <div className="flex flex-wrap my-3">
                            <div className="btn-lg-square primary-bg-color rounded-full flex items-center justify-center w-7 h-7 text-white">
                                <IoMdCheckmark />
                            </div>
                            <p className="text-gray-600 ml-3">Vision</p>
                        </div>
                        <div className="flex flex-wrap my-3">
                            <div className="btn-lg-square primary-bg-color rounded-full flex items-center justify-center w-7 h-7 text-white">
                                <IoMdCheckmark />
                            </div>
                            <p className="text-gray-600 ml-3">Mission</p>
                        </div>
                        <div className="flex flex-wrap my-3">
                            <div className="btn-lg-square primary-bg-color rounded-full flex items-center justify-center w-7 h-7 text-white">
                                <IoMdCheckmark />
                            </div>
                            <p className="text-gray-600 ml-3">Goal</p>
                        </div>
                        <button className="text-white primary-bg-color px-10 py-3 rounded-full my-5">Explore More</button>
                    </div>
                </div>
            </div>
    
    );
}
export default FindOut;