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
    <div className="flex flex-wrap mx-0 lg:mx-0 justify-center items-center bg-feature">
      <div
        className="lg:w-1/2 feature-text py-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="lg:pl-0 p-5">
          <h6 className="mb-4 pb-2 primary-color">Why Choose Us!</h6>
          <h1 className="mb-4 pb-2 text-4xl text-gray-600">
            Quality Products, Exceptional Service.
          </h1>
          <p className="mb-4 pb-2 text-gray-500">
            At Chhat Group, we provide top-quality products and exceptional
            service to meet all your business needs.
          </p>
          <div className="flex flex-wrap">
            <div className="w-1/2 p-2">
              <div className="flex items-center">
                <div className="btn-lg-square primary-bg-color rounded-full flex items-center justify-center w-12 h-12">
                  <FaCheck className="text-white" />
                </div>
                <div className="ml-4">
                  <p className="mb-0 text-gray-500">Quality</p>
                  <h5 className="mb-0 text-gray-700">Services</h5>
                </div>
              </div>
            </div>
            <div className="w-1/2 p-2">
              <div className="flex items-center">
                <div className="btn-lg-square primary-bg-color rounded-full flex items-center justify-center w-12 h-12">
                  <FaUserCheck className="text-white" />
                </div>
                <div className="ml-4">
                  <p className="mb-0 text-gray-500">Expert</p>
                  <h5 className="mb-0 text-gray-700">Workers</h5>
                </div>
              </div>
            </div>
            <div className="w-1/2 p-2">
              <div className="flex items-center">
                <div className="btn-lg-square primary-bg-color rounded-full flex items-center justify-center w-12 h-12">
                  <FaDraftingCompass className="text-white" />
                </div>
                <div className="ml-4">
                  <p className="mb-0 text-gray-500">Free</p>
                  <h5 className="mb-0 text-gray-700">Consultation</h5>
                </div>
              </div>
            </div>
            <div className="w-1/2 p-2">
              <div className="flex items-center">
                <div className="btn-lg-square primary-bg-color rounded-full flex items-center justify-center w-12 h-12">
                  <FaHeadphones className="text-white" />
                </div>
                <div className="ml-4">
                  <p className="mb-0 text-gray-500">Customer</p>
                  <h5 className="mb-0 text-gray-700">Support</h5>
                </div>
              </div>
            </div>
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
