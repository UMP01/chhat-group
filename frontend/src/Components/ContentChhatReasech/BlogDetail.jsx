import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosClient } from "../../api/axios";
import { BsCalendarDate } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { FaTelegramPlane, FaFacebookF, FaInstagram } from "react-icons/fa";

const BlogDetail = () => {
    const { id } = useParams();
    const [article, setArticle] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchArticle = async () => {
        setLoading(true);
        try {
            const response = await axiosClient.get(`/blogs/${id}`);
            setArticle(response.data);
        } catch (error) {
            console.error("Error fetching article:", error);
            setError("Failed to load article");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchArticle();
    }, [id]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="flex justify-center items-center border-gray-300 h-7 w-7 animate-spin rounded-full border-2 border-t-sky-700"></div>
            </div>
        );
    }

    if (error) {
        return <p className="text-red-500 text-center mt-4">{error}</p>;
    }

    return (
        <div className="container max-w-7xl mx-auto pb-5 pt-0">
            {article && (
                <>
                    <div className="py-5 px-5 border-2 rounded-md">
                        <h1 className="text-md sm:text-md md:text-lg lg:text-xl font-semibold mb-4 text-gray-700">
                            {article.title}
                        </h1>
                        <div className="flex items-center text-gray-700">
                            <BsCalendarDate className="mr-2" />
                            <p className="text-sm font-medium">
                                Posted on:
                                {new Date(
                                    article.created_at
                                ).toLocaleDateString()}
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start justify-center font-medium">
                        <div className="lg:w-1/2 px-10 py-5 ">
                            <p className="text-gray-700 text-sm sm:text-base md:text-base lg:text-base">
                                {article.content}
                            </p>
                            <div className="text-gray-700">
                                <p>ព័ត៌មានបន្ថែម៖</p>
                                <ul>
                                    <li>012 890 801</li>
                                    <li>010 969 005</li>
                                    <li></li>
                                </ul>
                            </div>
                            <div className="text-gray-700">
                                <p>អាស័យដ្ឋាន៖</p>
                                <p>
                                    បុរីពិភពថ្មី ឡាសែនសុខពីរ ផ្ទះលេខ 43-45 ផ្លូវ
                                    BT-08M, ភូមិក្រាំងអង្ក្រង
                                    សង្កាត់ក្រាំងធ្នង់, ខណ្ឌសែនសុខ,
                                    រាជធានីភ្នំពេញ។
                                </p>
                            </div>
                            <div className="text-gray-700">
                                <p>Contact Us</p>
                                <div className="flex gap-2">
                                    <a
                                        href="https://l.facebook.com/l.php?u=https%3A%2F%2Ft.me%2Fjoinchat%2FJZW3WDMdHgkzODk1%3Ffbclid%3DIwZXh0bgNhZW0CMTAAAR2Ne6tpdWUrPK4y6yBECUz4zawnf0I-1VNGULEXfYTyl_4uQNWbO5MzBtI_aem_AVXafXlRmLb7pQbsLyyrwMG--jK-YIUbmazjVcegeONxVvkw2FDI-Hzf-jbTc4q2-HXIH1gBNew9URZo65NL_4bW&h=AT0idutihjCtld65gS92rUPdhJb7aHOx80Y5qzEuTniYdcwD8cqxmkc-TphyTDrxTFExG_MZJcQGdzvMsQQP-0XyUwLgYfEYGk4_MaC_GNB2BMrHdAP2uDOLTRIr53OP7LQ2&__tn__=-UK-R&c[0]=AT1fj79G4GXRgBucUTAPnu_8NzziVLW3mDg2W4JOE5kH-0wGyS_J5JvQ9vX1uBFB65U0HT5LBCmseGTte2TAAWWmNQYsYLPV_NyZ5CQNOBef0vfsQwSNAtBF_HY55dYReOgSFPbFHfI7gJROlR1Va1AUQGo76fLRjXhKsqBKiyuPojpXsRXGcIa1EONphmYZZU3cRsyKU_ObshMf9I6C5H2kLfvjcA3H2MSS"
                                        className=" px-4 py-2 bg-cyan-700 rounded-md text-sm flex items-center text-white hover:bg-white hover:text-cyan-700 duration-500 ease-in-out"
                                    >
                                        <FaTelegramPlane className="mr-2" />
                                        Telegram
                                    </a>
                                    <a
                                        href="https://facebook.com/chhatgroup"
                                        target="_blank"
                                        className=" px-4 py-2 bg-cyan-700 rounded-md text-sm flex items-center text-white hover:bg-white hover:text-cyan-700 duration-500 ease-in-out"
                                    >
                                        <FaFacebookF className="mr-2" />
                                        Facebook
                                    </a>
                                    <a
                                        target="_blank"
                                        href="https://facebook.com/chhatgroup"
                                        className=" px-4 py-2 bg-cyan-700 rounded-md text-sm flex items-center text-white hover:bg-white hover:text-cyan-700 duration-500 ease-in-out"
                                    >
                                        <FaInstagram className="mr-2" />
                                        Instagram
                                    </a>
                                    <a
                                        href="mailto:info@chhatgroup.com"
                                        className=" px-4 py-2 bg-cyan-700 rounded-md text-sm flex items-center text-white hover:bg-white hover:text-cyan-700 duration-500 ease-in-out"
                                    >
                                        <IoMdMail className="mr-2" />
                                        Mail
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2 px-10 py-5">
                            {article.image && (
                                <img
                                    src={`http://127.0.0.1:8000/storage/${article.image}`}
                                    alt={article.title || "News image"}
                                    className="w-full object-cover mb-4 rounded"
                                />
                            )}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default BlogDetail;
