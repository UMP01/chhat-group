import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import Banner from "../../assets/Images/Homepage/1823.jpg";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import Picture from "../../assets/Images/AboutUs/1.png";

const About = () => {
  
  const Mission=[
    'To set consistent high standards across all product portfolios through our professional, committed and well-trained staff to provide premium quality products and services.',
    'Continually innovate to improve our e-commerce platform to maximize its efficiency for customers and trade partners.',
    'Foster transparent and comprehensive dialogues with our trade partners and efficiency for customers and trade partners.',
    'Show our commitment to health, safety and the environment by implementing best practice and encouraging a culture of responsibility in everything we do.',
    'Provide development opportunities for all employees to reach their full potential.',
  ];
  const Goal=[
    'Always be their first choice as a trusted business partner',
    'Impress with our products and services',
    'Very satisfied customers and business partners'
  ];
  const Values=[
    'To offer world-class and high standard products and services',
    'To be a globally recognized and trusted business partner',
    'To ensure a transparency and accountability',
    'To work collaboratively with customers and trade partners',
    'To ensure environmental friendliness',
    'To empower employees and ensure equality for all',
  ];

  return (
    <>
      <Breadcrumb curPage="About US" />
      <div className="container max-w-7xl h-[550px] mx-auto px-5 pb-5 pt-8 rubik bg-[#f8f8f8] rounded flex">
          <div className="w-[500px] h-[500px]  rounded">
              <div className="w-full h-[300px]">
                <img src={Banner} alt="" className="w-full h-full rounded" />
              </div>
              <div className="w-full h-[100px] pt-4">
                  <h1 className="text-sm text-[#0191DA]  uppercase font-bold">Core Values</h1>
                  <div className="w-[460px] h-[1px] bg-[#D9D9D9]  mt-1"></div>
                  <ul className="text-sm pt-2 pl-5">
                      {Values.map((title,index)=>(
                        <li className="list-disc" key={index} >
                          {title}
                        </li>
                      ))}
                      
                  </ul>  
              </div>
          </div>
          <div className="w-[740px] h-[50px] ml-3">
              <div className="w-full h-[120px]  ">
                  <h1 className="text-sm text-[#0191DA] pl-3 uppercase font-bold">Vision</h1>
                  <div className="w-[730px] h-[1px] bg-[#D9D9D9] mx-3 mt-1"></div>
                    <p className="text-sm pt-2 pl-5">
                        To be the most trusted Trading, Import and Export Company, 
                        widely recognized by our customers and trade partners in Cambodia
                        and overseas. We will do this by providing world-class quality
                        products and services to our customers and trade part ners through 
                        our newly innovated e-commerce platform for an easy and convenient 
                        shopping experience.
                    </p>
              </div>
              <div className="w-full h-[230px]">
                  <h1 className="text-sm text-[#0191DA] pl-3 uppercase font-bold">Mission</h1>
                  <div className="w-[730px] h-[1px] bg-[#D9D9D9] mx-3 mt-1"></div>
                  <ul className="text-sm pt-2 pl-8">
                      {Mission.map((title,index)=>(
                        <li className="list-decimal" key={index} >
                          {title}
                        </li>
                      ))}
                      
                  </ul>  
              </div>
              {/* GOAL */}
              <div className="w-full h-[100px] ">
                  <h1 className="text-sm text-[#0191DA] pl-3 uppercase font-bold">Goal</h1>
                  <div className="w-[730px] h-[1px] bg-[#D9D9D9] mx-3 mt-1"></div>
                  <ul className="text-sm pt-2 pl-8">
                      {Goal.map((title,index)=>(
                        <li className="list-disc" key={index} >
                          {title}
                        </li>
                      ))}
                      
                  </ul>  
              </div>
          </div>
      </div>
      <div className="container max-w-7xl h-full mx-auto  rubik  rounded-md mb-8">
          <h1 className=" max-w-7xl mx-auto mt-9 text-xl text-black font-medium uppercase">chhat group team member</h1>
            <div className="max-w-7xl mx-auto w-full grid grid-cols-9">
                {/* Stack 1 */}
                <div className="col-span-4 w-[550px] h-[220px] mt-5 rounded-md">

                    <div className="w-full h-full bg-[#EDEAEA] rounded-md flex">
                        <div className="w-[180px] h-[150px]  rounded-[100%] mt-9 ml-5 ">
                            <img src={Picture} alt="" className="w-full h-full rounded-full bject-cover" />
                        </div>
                        <div className="w-[420px] h-[250px] m-5">
                                <h2 className="text-xl font-medium">CO-Founder & BOD Member</h2>
                                <div className="w-full h-[150px]  mt-3">
                                <div className="flex justify-start align-middle p-3 text-[#0191DA] ">
                                <FaPhoneAlt className="p-0 text-sm " />
                                <span className="pl-3 text-sm space-x-7 font-normal">+855 12630103</span>
                                </div>
                                <div className="flex justify-start align-middle pl-3 text-[#0191DA] ">
                                <IoMdMail  className="p-0 text-xl " />
                                <span className="pl-3 text-sm space-x-7 font-normal">lengchansocheat.chhat@chhatgroup.com</span>
                                </div>
                                <div className="flex justify-start align-middle p-3 text-[#0191DA] ">
                                <FaFacebook   className="p-0 text-xl " />
                                <span className="pl-3 text-sm space-x-7 font-normal">socheat.leng.1</span>
                                </div>
                                <div className="flex justify-start align-middle pl-3 text-[#0191DA] ">
                                <FaTelegramPlane    className="p-0 text-xl " />
                                <span className="pl-3 text-sm space-x-7 font-normal">+855 12630103</span>
                                </div>
                                </div>
                        </div>
                    </div>

                </div>
                <div className="relative col-span-1 w-full h-full flex justify-center items-center">
                    <div className="h-full w-[2px] bg-[#72BCF1] mt-14"></div>
                    <div className="absolute w-4 h-4 rounded-full bg-[#72BCF1] top-4"></div>
                </div>
                <div className="col-span-4 w-full h-full"></div> 

                {/* Stack 2 */}
                <div className="col-span-4 w-full h-full"></div> 
                <div className="relative col-span-1 w-full h-full flex justify-center items-center">
                    <div className="h-full w-[2px] bg-[#72BCF1] mt-14"></div>
                    <div className="absolute w-4 h-4 rounded-full bg-[#72BCF1] top-4"></div>
                </div>
               
                <div className="col-span-4 w-[550px] h-[220px] mt-5 rounded-md">

                    <div className="w-full h-full bg-[#EDEAEA] rounded-md  flex">
                    <div className="w-[420px] h-[250px] m-5">
                                <h2 className="text-xl font-medium">CO-Founder & BOD Member</h2>
                                <div className="w-full h-[150px]  mt-3">
                                <div className="flex justify-start align-middle p-3 text-[#0191DA] ">
                                <FaPhoneAlt className="p-0 text-sm " />
                                <span className="pl-3 text-sm space-x-7 font-normal">+855 12630103</span>
                                </div>
                                <div className="flex justify-start align-middle pl-3 text-[#0191DA] ">
                                <IoMdMail  className="p-0 text-xl " />
                                <span className="pl-3 text-sm space-x-7 font-normal">lengchansocheat.chhat@chhatgroup.com</span>
                                </div>
                                <div className="flex justify-start align-middle p-3 text-[#0191DA] ">
                                <FaFacebook   className="p-0 text-xl " />
                                <span className="pl-3 text-sm space-x-7 font-normal">socheat.leng.1</span>
                                </div>
                                <div className="flex justify-start align-middle pl-3 text-[#0191DA] ">
                                <FaTelegramPlane    className="p-0 text-xl " />
                                <span className="pl-3 text-sm space-x-7 font-normal">+855 12630103</span>
                                </div>
                                </div>
                        </div>
                        <div className="w-[180px] h-[150px]  rounded-[100%] mt-9 mr-5 ">
                            <img src={Picture} alt="" className="w-full h-full rounded-full bject-cover" />
                        </div>
                        
                    </div>

                </div>


                {/* Stack 3 */}
                <div className="col-span-4 w-[550px] h-[220px] mt-5 rounded-md">

                    <div className="w-full h-full bg-[#EDEAEA] rounded-md flex">
                        <div className="w-[180px] h-[150px]  rounded-[100%] mt-9 ml-5 ">
                            <img src={Picture} alt="" className="w-full h-full rounded-full bject-cover" />
                        </div>
                        <div className="w-[420px] h-[250px] m-5">
                                <h2 className="text-xl font-medium">CO-Founder & BOD Member</h2>
                                <div className="w-full h-[150px]  mt-3">
                                <div className="flex justify-start align-middle p-3 text-[#0191DA] ">
                                <FaPhoneAlt className="p-0 text-sm " />
                                <span className="pl-3 text-sm space-x-7 font-normal">+855 12630103</span>
                                </div>
                                <div className="flex justify-start align-middle pl-3 text-[#0191DA] ">
                                <IoMdMail  className="p-0 text-xl " />
                                <span className="pl-3 text-sm space-x-7 font-normal">lengchansocheat.chhat@chhatgroup.com</span>
                                </div>
                                <div className="flex justify-start align-middle p-3 text-[#0191DA] ">
                                <FaFacebook   className="p-0 text-xl " />
                                <span className="pl-3 text-sm space-x-7 font-normal">socheat.leng.1</span>
                                </div>
                                <div className="flex justify-start align-middle pl-3 text-[#0191DA] ">
                                <FaTelegramPlane    className="p-0 text-xl " />
                                <span className="pl-3 text-sm space-x-7 font-normal">+855 12630103</span>
                                </div>
                                </div>
                        </div>
                    </div>

                </div>
                <div className="relative col-span-1 w-full h-full flex justify-center items-center">
                    <div className="h-full w-[2px] bg-[#72BCF1] mt-14"></div>
                    <div className="absolute w-4 h-4 rounded-full bg-[#72BCF1] top-4"></div>
                </div>
                <div className="col-span-4 w-full h-full"></div> 

                 {/* Stack 2 */}
                 <div className="col-span-4 w-full h-full"></div> 
                <div className="relative col-span-1 w-full h-full flex justify-center items-center">
                    <div className="h-full w-[2px] bg-[#72BCF1] mt-14"></div>
                    <div className="absolute w-4 h-4 rounded-full bg-[#72BCF1] top-4"></div>
                </div>
               
                <div className="col-span-4 w-[550px] h-[220px] mt-5 rounded-md">

                    <div className="w-full h-full bg-[#EDEAEA] rounded-md  flex">
                    <div className="w-[420px] h-[250px] m-5">
                                <h2 className="text-xl font-medium">CO-Founder & BOD Member</h2>
                                <div className="w-full h-[150px]  mt-3">
                                <div className="flex justify-start align-middle p-3 text-[#0191DA] ">
                                <FaPhoneAlt className="p-0 text-sm " />
                                <span className="pl-3 text-sm space-x-7 font-normal">+855 12630103</span>
                                </div>
                                <div className="flex justify-start align-middle pl-3 text-[#0191DA] ">
                                <IoMdMail  className="p-0 text-xl " />
                                <span className="pl-3 text-sm space-x-7 font-normal">lengchansocheat.chhat@chhatgroup.com</span>
                                </div>
                                <div className="flex justify-start align-middle p-3 text-[#0191DA] ">
                                <FaFacebook   className="p-0 text-xl " />
                                <span className="pl-3 text-sm space-x-7 font-normal">socheat.leng.1</span>
                                </div>
                                <div className="flex justify-start align-middle pl-3 text-[#0191DA] ">
                                <FaTelegramPlane    className="p-0 text-xl " />
                                <span className="pl-3 text-sm space-x-7 font-normal">+855 12630103</span>
                                </div>
                                </div>
                        </div>
                        <div className="w-[180px] h-[150px]  rounded-[100%] mt-9 mr-5 ">
                            <img src={Picture} alt="" className="w-full h-full rounded-full bject-cover" />
                        </div>
                        
                    </div>

                </div>

                {/* Stack 1 */}
                <div className="col-span-4 w-[550px] h-[220px] mt-5 rounded-md">

                    <div className="w-full h-full bg-[#EDEAEA] rounded-md flex">
                        <div className="w-[180px] h-[150px]  rounded-[100%] mt-9 ml-5 ">
                            <img src={Picture} alt="" className="w-full h-full rounded-full bject-cover" />
                        </div>
                        <div className="w-[420px] h-[250px] m-5">
                                <h2 className="text-xl font-medium">CO-Founder & BOD Member</h2>
                                <div className="w-full h-[150px]  mt-3">
                                <div className="flex justify-start align-middle p-3 text-[#0191DA] ">
                                <FaPhoneAlt className="p-0 text-sm " />
                                <span className="pl-3 text-sm space-x-7 font-normal">+855 12630103</span>
                                </div>
                                <div className="flex justify-start align-middle pl-3 text-[#0191DA] ">
                                <IoMdMail  className="p-0 text-xl " />
                                <span className="pl-3 text-sm space-x-7 font-normal">lengchansocheat.chhat@chhatgroup.com</span>
                                </div>
                                <div className="flex justify-start align-middle p-3 text-[#0191DA] ">
                                <FaFacebook   className="p-0 text-xl " />
                                <span className="pl-3 text-sm space-x-7 font-normal">socheat.leng.1</span>
                                </div>
                                <div className="flex justify-start align-middle pl-3 text-[#0191DA] ">
                                <FaTelegramPlane    className="p-0 text-xl " />
                                <span className="pl-3 text-sm space-x-7 font-normal">+855 12630103</span>
                                </div>
                                </div>
                        </div>
                    </div>

                </div>
                <div className="relative col-span-1 w-full h-[210px] flex justify-center items-center">
                    <div className="h-full w-[2px] bg-[#72BCF1] mt-14"></div>
                    <div className="absolute w-4 h-4 rounded-full bg-[#72BCF1] top-4"></div>
                </div>
                <div className="col-span-4 w-full h-full"></div> 
                
            </div>
         
      </div>
    </>
  );
};

export default About;
