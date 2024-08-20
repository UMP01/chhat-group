import img01 from "../../assets/Images/Homepage/expertise-01.png";

const Expertise = () => {
    return (
        <>
            <div className="px-3">
                <h1 className="text-2xl text-cyan-700">
                    Our Research Expertise
                </h1>
                <hr className="w-full my-3 border" />
                <p className="text-gray-700">
                    We cover different research areas and services to answer
                    clients' business needs.
                </p>
            </div>
            <div className="flex flex-wrap justify-center items-center pt-3 pb-10">
                <div className="lg:w-1/3 w-full p-3">
                    <div className="primary-bg-color p-5 rounded-tr-lg rounded-tl-lg">
                        <p className="uppercase text-white text-center">
                            Brand Understanding
                        </p>
                    </div>
                    <div className="relative">
                        <img
                            src={img01}
                            alt="Description of expertise 1"
                            className="w-full h-72 object-cover rounded-bl-lg rounded-br-lg"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-5 rounded-b-lg">
                            <p className="uppercase text-center text-xs">
                                Usage & Attitude, Brand Positioning, Brand
                                Architecture, Segmentation, Pricing, Brand
                                Health Tracking
                            </p>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/3 w-full p-3">
                    <div className="primary-bg-color p-5 rounded-tr-lg rounded-tl-lg">
                        <p className="uppercase text-white text-center">
                            Inovation
                        </p>
                    </div>
                    <div className="relative">
                        <img
                            src={img01}
                            alt="Description of expertise 1"
                            className="w-full h-72 object-cover rounded-bl-lg rounded-br-lg"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-5 rounded-b-lg">
                            <p className="uppercase text-center text-xs">
                                Opportunity Identification, Sizing &
                                Prioritization, Concept Design, Product &
                                Service Testing, Pack & Product Testing, UX
                                Testing
                            </p>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/3 w-full p-3">
                    <div className="primary-bg-color p-5 rounded-tr-lg rounded-tl-lg">
                        <p className="uppercase text-white text-center">
                            Creative Evaluation
                        </p>
                    </div>
                    <div className="relative">
                        <img
                            src={img01}
                            alt="Description of expertise 1"
                            className="w-full h-72 object-cover rounded-bl-lg rounded-br-lg"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-5 rounded-b-lg">
                            <p className="uppercase text-center text-xs">
                                Pre and Post-Launch Creative Development, Social
                                Listening, Comms & Ad Evaluation, Concept &
                                Proposition Evaluation
                            </p>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/3 w-full p-3">
                    <div className="primary-bg-color p-5 rounded-tr-lg rounded-tl-lg">
                        <p className="uppercase text-white text-center">
                            Shopper
                        </p>
                    </div>
                    <div className="relative">
                        <img
                            src={img01}
                            alt="Description of expertise 1"
                            className="w-full h-72 object-cover rounded-bl-lg rounded-br-lg"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-5 rounded-b-lg">
                            <p className="uppercase text-center text-xs">
                                Customer Journey Mapping, Path to Purchase,
                                Mystery Shopping, Intercepts, Retail Audit
                            </p>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/3 w-full p-3">
                    <div className="primary-bg-color p-5 rounded-tr-lg rounded-tl-lg">
                        <p className="uppercase text-white text-center">
                            Exploration
                        </p>
                    </div>
                    <div className="relative">
                        <img
                            src={img01}
                            alt="Description of expertise 1"
                            className="w-full h-72 object-cover rounded-bl-lg rounded-br-lg"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-5 rounded-b-lg">
                            <p className="uppercase text-center text-xs">
                                Consumer Psyche & Lifestyle, Mobile Diaries,
                                Market Entry, Segmentation
                            </p>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/3 w-full p-3">
                    <div className="primary-bg-color p-5 rounded-tr-lg rounded-tl-lg">
                        <p className="uppercase text-white text-center">
                            Public Affairs
                        </p>
                    </div>
                    <div className="relative">
                        <img
                            src={img01}
                            alt="Description of expertise 1"
                            className="w-full h-72 object-cover rounded-bl-lg rounded-br-lg"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-5 rounded-b-lg">
                            <p className="uppercase text-center text-xs">
                                Behaviour Change, Policy & Program Monitoring
                                and Evaluation, Communications for Development
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Expertise;
