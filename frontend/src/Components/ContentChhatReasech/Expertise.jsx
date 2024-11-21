import React from "react";
import img01 from "../../assets/Images/ChhatResearch/ex-01.png";
import img02 from "../../assets/Images/ChhatResearch/ex-02.png";
import img03 from "../../assets/Images/ChhatResearch/ex-03.png";
import img04 from "../../assets/Images/ChhatResearch/ex-04.png";
import img05 from "../../assets/Images/ChhatResearch/ex-05.png";
import img06 from "../../assets/Images/ChhatResearch/ex-06.png";

const Gallery = () => {
    return (
        <section className="text-gray-600 body-font mb-10">
            <div className="px-3">
                <h1 className="text-lg text-cyan-700 font-medium">
                    Our Research Expertise
                </h1>
                <hr className="w-full my-3 border" />
                <p className="text-gray-700 font-medium">
                    We cover different research areas and services to answer
                    clients' business needs.
                </p>
            </div>
            <div className="container mx-auto">
                <div className="flex flex-wrap -m-4">
                    <div className="lg:w-1/3 sm:w-1/2 w-full p-4">
                        <div className="flex relative">
                            <div className="w-full h-60 bg-cyan-100 flex flex-col justify-center items-center rounded-md shadow-sm">
                                <img
                                    src={img01}
                                    alt="image"
                                    className="w-20 h-20"
                                />
                                <h1 className="title-font text-lg font-medium mb-3 text-cyan-700 mt-5">
                                    Brand Understanding
                                </h1>
                            </div>

                            <div className="px-8 py-10 absolute inset-0 w-full h-full flex justify-center items-center bg-cyan-50 shadow-sm opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-md text-center">
                                <p className="leading-relaxed font-medium text-gray-700">
                                    Usage & Attitude, Brand Positioning, Brand
                                    Architecture, Segmentation, Pricing, Brand
                                    Health Tracking
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/3 sm:w-1/2 w-full p-4">
                        <div className="flex relative">
                            <div className="w-full h-60 bg-cyan-100 flex flex-col justify-center items-center rounded-md shadow-sm">
                                <img
                                    src={img02}
                                    alt="image"
                                    className="w-20 h-20"
                                />
                                <h1 className="title-font text-lg font-medium mb-3 text-cyan-700 mt-5">
                                    Innovation
                                </h1>
                            </div>

                            <div className="px-8 py-10 absolute inset-0 w-full h-full flex justify-center items-center bg-cyan-50 shadow-sm opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-md text-center">
                                <p className="leading-relaxed font-medium text-gray-700">
                                    Opportunity Identification, Sizing &
                                    Prioritization, Concept Design, Product &
                                    Service Testing, Product Testing, UX Testing
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/3 sm:w-1/2 w-full p-4">
                        <div className="flex relative">
                            <div className="w-full h-60 bg-cyan-100 flex flex-col justify-center items-center rounded-md shadow-sm">
                                <img
                                    src={img03}
                                    alt="image"
                                    className="w-20 h-20"
                                />
                                <h1 className="title-font text-lg font-medium mb-3 text-cyan-700 mt-5">
                                    Creative Evaluation
                                </h1>
                            </div>

                            <div className="px-8 py-10 absolute inset-0 w-full h-full flex justify-center items-center bg-cyan-50 shadow-sm opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-md text-center">
                                <p className="leading-relaxed font-medium text-gray-700">
                                    Pre and Post-Launch Creative Development,
                                    Social Listening, Comms & Ad Evaluation,
                                    Concept & Proposition Evaluation
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/3 sm:w-1/2 w-full p-4">
                        <div className="flex relative">
                            <div className="w-full h-60 bg-cyan-100 flex flex-col justify-center items-center rounded-md shadow-sm">
                                <img
                                    src={img04}
                                    alt="image"
                                    className="w-20 h-20"
                                />
                                <h1 className="title-font text-lg font-medium mb-3 text-cyan-700 mt-5">
                                    Shopper
                                </h1>
                            </div>

                            <div className="px-8 py-10 absolute inset-0 w-full h-full flex justify-center items-center bg-cyan-50 shadow-sm opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-md text-center">
                                <p className="leading-relaxed font-medium text-gray-700">
                                    Customer Journey Mapping, Path to Purchase,
                                    Mystery Shopping, Intercepts, Retail Audit
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/3 sm:w-1/2 w-full p-4">
                        <div className="flex relative">
                            <div className="w-full h-60 bg-cyan-100 flex flex-col justify-center items-center rounded-md shadow-sm">
                                <img
                                    src={img05}
                                    alt="image"
                                    className="w-20 h-20"
                                />
                                <h1 className="title-font text-lg font-medium mb-3 text-cyan-700 mt-5">
                                    Exploration
                                </h1>
                            </div>

                            <div className="px-8 py-10 absolute inset-0 w-full h-full flex justify-center items-center bg-cyan-50 shadow-sm opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-md text-center">
                                <p className="leading-relaxed font-medium text-gray-700">
                                    Consumer Psyche & Lifestyle, Mobile Diaries,
                                    Market Entry, Segmentation
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/3 sm:w-1/2 w-full p-4">
                        <div className="flex relative">
                            <div className="w-full h-60 bg-cyan-100 flex flex-col justify-center items-center rounded-md shadow-sm">
                                <img
                                    src={img06}
                                    alt="image"
                                    className="w-20 h-20"
                                />
                                <h1 className="title-font text-lg font-medium mb-3 text-cyan-700 mt-5">
                                    Public Affairs
                                </h1>
                            </div>

                            <div className="px-8 py-10 absolute inset-0 w-full h-full flex justify-center items-center bg-cyan-50 shadow-sm opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-md text-center">
                                <p className="leading-relaxed font-medium text-gray-700">
                                    Behaviour Change, Policy & Program
                                    Evaluation, Communications for Development
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
