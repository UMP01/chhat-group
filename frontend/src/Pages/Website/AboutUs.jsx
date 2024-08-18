import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import Banner from "../../assets/Images/Homepage/1823.jpg";

const About = () => {
    const Mission = [
        "To set consistent high standards across all product portfolios through our professional, committed and well-trained staff to provide premium quality products and services.",
        "Continually innovate to improve our e-commerce platform to maximize its efficiency for customers and trade partners.",
        "Foster transparent and comprehensive dialogues with our trade partners and efficiency for customers and trade partners.",
        "Show our commitment to health, safety and the environment by implementing best practice and encouraging a culture of responsibility in everything we do.",
        "Provide development opportunities for all employees to reach their full potential.",
    ];
    const Goal = [
        "Always be their first choice as a trusted business partner",
        "Impress with our products and services",
        "Very satisfied customers and business partners",
    ];
    const Values = [
        "To offer world-class and high standard products and services",
        "To be a globally recognized and trusted business partner",
        "To ensure a transparency and accountability",
        "To work collaboratively with customers and trade partners",
        "To ensure environmental friendliness",
        "To empower employees and ensure equality for all",
    ];

    return (
        <>
            <Breadcrumb curPage="About US" />
            <div className="container max-w-7xl h-[550px] mx-auto px-5 pb-5 pt-8 rubik bg-[#f8f8f8] rounded flex">
                <div className="w-[500px] h-[500px]  rounded">
                    <div className="w-full h-[300px]">
                        <img
                            src={Banner}
                            alt=""
                            className="w-full h-full rounded"
                        />
                    </div>
                    <div className="w-full h-[100px] pt-4">
                        <h1 className="text-sm text-[#0191DA]  uppercase font-bold">
                            Core Values
                        </h1>
                        <div className="w-[460px] h-[1px] bg-[#D9D9D9]  mt-1"></div>
                        <ul className="text-sm pt-2 pl-5">
                            {Values.map((title, index) => (
                                <li className="list-disc" key={index}>
                                    {title}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="w-[740px] h-[50px] ml-3">
                    <div className="w-full h-[120px]  ">
                        <h1 className="text-sm text-[#0191DA] pl-3 uppercase font-bold">
                            Vision
                        </h1>
                        <div className="w-[730px] h-[1px] bg-[#D9D9D9] mx-3 mt-1"></div>
                        <p className="text-sm pt-2 pl-5">
                            To be the most trusted Trading, Import and Export
                            Company, widely recognized by our customers and
                            trade partners in Cambodia and overseas. We will do
                            this by providing world-class quality products and
                            services to our customers and trade part ners
                            through our newly innovated e-commerce platform for
                            an easy and convenient shopping experience.
                        </p>
                    </div>
                    <div className="w-full h-[230px]">
                        <h1 className="text-sm text-[#0191DA] pl-3 uppercase font-bold">
                            Mission
                        </h1>
                        <div className="w-[730px] h-[1px] bg-[#D9D9D9] mx-3 mt-1"></div>
                        <ul className="text-sm pt-2 pl-8">
                            {Mission.map((title, index) => (
                                <li className="list-decimal" key={index}>
                                    {title}
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* GOAL */}
                    <div className="w-full h-[100px] ">
                        <h1 className="text-sm text-[#0191DA] pl-3 uppercase font-bold">
                            Goal
                        </h1>
                        <div className="w-[730px] h-[1px] bg-[#D9D9D9] mx-3 mt-1"></div>
                        <ul className="text-sm pt-2 pl-8">
                            {Goal.map((title, index) => (
                                <li className="list-disc" key={index}>
                                    {title}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
