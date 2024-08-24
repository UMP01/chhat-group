import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import Banner from "../../assets/Images/Homepage/1823.jpg";
import Profile from "../../assets/Images/AboutUs/1.png";
import { MdOutlineCall,
         MdOutlineEmail,
         MdOutlineFacebook,
          } from "react-icons/md";
import { PiTelegramLogoDuotone } from "react-icons/pi";

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
        "To ensure transparency and accountability",
        "To work collaboratively with customers and trade partners",
        "To ensure environmental friendliness",
        "To empower employees and ensure equality for all",
    ];
    return (
        <>
            <div className="bg-gray-100 pt-5">
                <Breadcrumb curPage="About US" />
                <div className="container max-w-7xl mx-auto px-5 pb-5 pt-5 rubik rounded flex flex-col lg:flex-row gap-5">
                    <div className="lg:w-1/2 flex flex-col gap-4">
                        <div className="w-full rounded">
                            <img
                                src={Banner}
                                alt="Banner"
                                className="w-full h-auto rounded"
                            />
                        </div>
                        <div className="w-full">
                            <h1 className="text-lg text-cyan-700 pl-3 uppercase font-medium">
                                Core Values
                            </h1>
                            <div className="w-full h-[1px] bg-[#D9D9D9] mt-1"></div>
                            <ul className="text-md pt-2 pl-5">
                                {Values.map((title, index) => (
                                    <li
                                        className="list-disc text-gray-800"
                                        key={index}
                                    >
                                        {title}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="lg:w-1/2 flex flex-col gap-4">
                        <div className="w-full">
                            <h1 className="text-lg text-cyan-700 pl-3 uppercase font-medium">
                                Vision
                            </h1>
                            <div className="w-full h-[1px] bg-[#D9D9D9] mx-3 mt-1"></div>
                            <p className="text-md pt-2 pl-5 text-gray-800">
                                To be the most trusted Trading, Import and
                                Export Company, widely recognized by our
                                customers and trade partners in Cambodia and
                                overseas. We will do this by providing
                                world-class quality products and services to our
                                customers and trade partners through our newly
                                innovated e-commerce platform for an easy and
                                convenient shopping experience.
                            </p>
                        </div>
                        <div className="w-full">
                            <h1 className="text-lg text-cyan-700 pl-3 uppercase font-medium">
                                Mission
                            </h1>
                            <div className="w-full h-[1px] bg-[#D9D9D9] mx-3 mt-1"></div>
                            <ul className="text-md pt-2 pl-8 list-decimal">
                                {Mission.map((title, index) => (
                                    <li key={index} className="text-gray-800">
                                        {title}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="w-full">
                            <h1 className="text-lg text-cyan-700 pl-3 uppercase font-medium">
                                Goal
                            </h1>
                            <div className="w-full h-[1px] bg-[#D9D9D9] mx-3 mt-1"></div>
                            <ul className="text-md pt-2 pl-8 list-disc">
                                {Goal.map((title, index) => (
                                    <li key={index} className="text-gray-800">
                                        {title}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="container max-w-7xl mx-auto px-5 pb-5 pt-5 rubik rounded  mb-5 lg:flex-row">
                    <h1 className="text-2xl  uppercase">
                        Chhat group team member
                    </h1>
                    <div 
                        className="relative max-w-[1200px] 
                                    my-[20px] mx-auto after:contents after:absolute 
                                    after:w-[4px] after:h-[100%] after:bg-white 
                                    after:top-0 lg:after:left-[50%] after:ml-[-2px] after:z-[1] md:after:left-[31px]
                                    "
                        >
                        {/* left */}
                        <div className="py-[20px] px-[27px] relative lg:w-[50%]  left-0 custom_class md:w-[950px] ">
                            <div className="absolute w-[20px] h-[20px] rounded-full bg-[#0191DA] right-[-10px] top-[32px] z-10 point "></div>
                            <div className="flex flex-row gap-4 relative py-[12px]  rounded-md bg-gray-50">
                                <div className="w-[120px] h-[120px] rounded-full m-5">
                                    <img src={Profile} alt="" className="w-full h-full rounded-full object-cover" />
                                </div>
                                <div className="lg:w-[380px] my-3 lg:ml-3 md:w-[300px]">
                                    <h2 className="lg:text-xl font-semibold md:text-[14px]">
                                        Co-Founder & BOD Member
                                    </h2>
                                    <div className="w-full h-[110px] mt-2 text-[#0191DA]">
                                        <div className="flex flex-row ">
                                            <MdOutlineCall className="mt-1" />
                                            <span className="text-sm py-1 px-2 text-black">+855 12630103</span>
                                        </div>
                                        <div className="flex flex-row ">
                                            <MdOutlineEmail className="mt-1" />
                                            <span className="text-sm py-1 px-2 text-black">lengchansocheat.chhat@chhatgroup.com</span>
                                        </div>
                                        <div className="flex flex-row ">
                                            <MdOutlineFacebook className="mt-1" />
                                            <span className="text-sm py-1 px-2 text-black">socheat.leng.1</span>
                                        </div>
                                        <div className="flex flex-row ">
                                            <PiTelegramLogoDuotone className="mt-1" />
                                            <span className="text-sm py-1 px-2 text-black">+855 12630103</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="left-container-arrow"></div>
                            </div>
                        </div>

                        {/* right */}
                        <div className="py-[10px] px-[27px] relative lg:w-[50%]  rounded lg:left-[50%] custom_class ">
                            <div className="absolute w-[20px] h-[20px] rounded-full bg-[#0191DA] left-[-10px] top-[32px] z-10"></div>
                            <div className="flex flex-row gap-4 relative py-[12px] rounded-md bg-gray-50">
                                <div className="w-[120px] h-[120px] rounded-full m-5">
                                    <img src={Profile} alt="" className="w-full h-full rounded-full object-cover" />
                                </div>
                                <div className="lg:w-[380px] my-3 lg:ml-3 md:w-[300px]">
                                    <h2 className="lg:text-xl font-semibold">
                                        Co-Founder & BOD Member
                                    </h2>
                                    <div className="w-full h-[110px] mt-2 text-[#0191DA]">
                                        <div className="flex flex-row ">
                                            <MdOutlineCall className="mt-1" />
                                            <span className="text-sm py-1 px-2 text-black">+855 12630103</span>
                                        </div>
                                        <div className="flex flex-row ">
                                            <MdOutlineEmail className="mt-1" />
                                            <span className="text-sm py-1 px-2 text-black">lengchansocheat.chhat@chhatgroup.com</span>
                                        </div>
                                        <div className="flex flex-row ">
                                            <MdOutlineFacebook className="mt-1" />
                                            <span className="text-sm py-1 px-2 text-black">socheat.leng.1</span>
                                        </div>
                                        <div className="flex flex-row ">
                                            <PiTelegramLogoDuotone className="mt-1" />
                                            <span className="text-sm py-1 px-2 text-black">+855 12630103</span>
                                        </div>
                                    </div>
                                    <div className="right-container-arrow"></div>
                                </div>
                            </div>
                        </div>
                        {/* left */}
                        <div className="py-[20px] px-[27px] relative lg:w-[50%]  left-0 custom_class md:w-[950px] ">
                            <div className="absolute w-[20px] h-[20px] rounded-full bg-[#0191DA] right-[-10px] top-[32px] z-10 point"></div>
                            <div className="flex flex-row gap-4 relative py-[12px] rounded-md bg-gray-50">
                                <div className="w-[120px] h-[120px] rounded-full m-5">
                                    <img src={Profile} alt="" className="w-full h-full rounded-full object-cover" />
                                </div>
                                <div className="lg:w-[380px] my-3 lg:ml-3 md:w-[300px]">
                                    <h2 className="lg:text-xl font-semibold">
                                        Co-Founder & BOD Member
                                    </h2>
                                    <div className="w-full h-[110px] mt-2 text-[#0191DA]">
                                        <div className="flex flex-row ">
                                            <MdOutlineCall className="mt-1" />
                                            <span className="text-sm py-1 px-2 text-black">+855 12630103</span>
                                        </div>
                                        <div className="flex flex-row ">
                                            <MdOutlineEmail className="mt-1" />
                                            <span className="text-sm py-1 px-2 text-black">lengchansocheat.chhat@chhatgroup.com</span>
                                        </div>
                                        <div className="flex flex-row ">
                                            <MdOutlineFacebook className="mt-1" />
                                            <span className="text-sm py-1 px-2 text-black">socheat.leng.1</span>
                                        </div>
                                        <div className="flex flex-row ">
                                            <PiTelegramLogoDuotone className="mt-1" />
                                            <span className="text-sm py-1 px-2 text-black">+855 12630103</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="left-container-arrow"></div>
                            </div>
                        </div>

                       {/* right */}
                       <div className="py-[10px] px-[27px] relative rounded custom_class lg:w-[50%]  lg:left-[50%]">
                            <div className="absolute w-[20px] h-[20px] rounded-full bg-[#0191DA] left-[-10px] top-[32px] z-10"></div>
                            <div className="flex flex-row gap-4 relative py-[12px] rounded-md bg-gray-50">
                                <div className="w-[120px] h-[120px] rounded-full m-5">
                                    <img src={Profile} alt="" className="w-full h-full rounded-full object-cover" />
                                </div>
                                <div className="lg:w-[380px] my-3 lg:ml-3 md:w-[300px] ">
                                    <h2 className="lg:text-xl font-semibold">
                                        Co-Founder & BOD Member
                                    </h2>
                                    <div className="w-full h-[110px] mt-2 text-[#0191DA]">
                                        <div className="flex flex-row ">
                                            <MdOutlineCall className="mt-1" />
                                            <span className="text-sm py-1 px-2 text-black">+855 12630103</span>
                                        </div>
                                        <div className="flex flex-row ">
                                            <MdOutlineEmail className="mt-1" />
                                            <span className="text-sm py-1 px-2 text-black">lengchansocheat.chhat@chhatgroup.com</span>
                                        </div>
                                        <div className="flex flex-row ">
                                            <MdOutlineFacebook className="mt-1" />
                                            <span className="text-sm py-1 px-2 text-black">socheat.leng.1</span>
                                        </div>
                                        <div className="flex flex-row ">
                                            <PiTelegramLogoDuotone className="mt-1" />
                                            <span className="text-sm py-1 px-2 text-black">+855 12630103</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="right-container-arrow"></div>
                            </div>
                        </div>

                       {/* left */}
                       <div className="py-[20px] px-[27px] relative lg:w-[50%]  left-0 custom_class ">
                            <div className="absolute w-[20px] h-[20px] rounded-full bg-[#0191DA] right-[-10px] top-[32px] z-10 point"></div>
                            <div className="flex flex-row gap-4 relative py-[12px] rounded-md bg-gray-50">
                                <div className="lg:w-[120px] lg:h-[120px] rounded-full m-5">
                                    <img src={Profile} alt="" className="w-full h-full rounded-full object-cover" />
                                </div>
                                <div className="lg:w-[380px] my-3 lg:ml-3 md:w-[300px]">
                                    <h2 className="lg:text-xl font-semibold">
                                        Co-Founder & BOD Member
                                    </h2>
                                    <div className="w-full h-[110px] mt-2 text-[#0191DA] ">
                                        <div className="flex flex-row ">
                                            <MdOutlineCall className="mt-1" />
                                            <span className="text-sm py-1 px-2 text-black ">+855 12630103</span>
                                        </div>
                                        <div className="flex flex-row ">
                                            <MdOutlineEmail className="mt-1" />
                                            <span className="text-sm py-1 px-2 text-black">lengchansocheat.chhat@chhatgroup.com</span>
                                        </div>
                                        <div className="flex flex-row ">
                                            <MdOutlineFacebook className="mt-1" />
                                            <span className="text-sm py-1 px-2 text-black">socheat.leng.1</span>
                                        </div>
                                        <div className="flex flex-row ">
                                            <PiTelegramLogoDuotone className="mt-1" />
                                            <span className="text-sm py-1 px-2 text-black">+855 12630103</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="left-container-arrow"></div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
