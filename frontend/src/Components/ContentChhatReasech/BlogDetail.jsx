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
                        <h1 className="text-md sm:text-lg md:text-xl lg:text-2xl font-semibold mb-4 text-gray-700 font-khmer-nato">
                            {article.title}
                        </h1>
                        <p className="text-gray-700 my-2">
                            Category: {article.category}
                        </p>
                        <div className="flex items-center text-gray-700">
                            <BsCalendarDate className="mr-2" />
                            <p className="">
                                Posted on:{" "}
                                {new Date(
                                    article.created_at
                                ).toLocaleDateString()}
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-start justify-between font-medium">
                        <div className="w-full md:w-1/2 px-5 py-5">
                            {article.image && (
                                <img
                                    src={`http://127.0.0.1:8000/storage/${article.image}`}
                                    alt={article.title || "News image"}
                                    className="w-full object-cover rounded"
                                />
                            )}
                        </div>
                        <div className="px-5 py-5 w-full md:w-1/2">
                            <p className="text-gray-700 font-normal text-base sm:text-base md:text-base lg:text-base font-khmer-nato">
                                {article.content}
                            </p>
                            <div className="text-gray-700 mt-4">
                                <p className="font-khmer-nato">
                                    ព័ត៌មានបន្ថែម៖
                                </p>
                                <ul>
                                    <li>012 890 801</li>
                                    <li>010 969 005</li>
                                </ul>
                            </div>
                            <div className="text-gray-700 mt-4 font-khmer-nato">
                                <p>អាស័យដ្ឋាន៖</p>
                                <p>
                                    បុរីពិភពថ្មី ឡាសែនសុខពីរ ផ្ទះលេខ 43-45 ផ្លូវ
                                    BT-08M, ភូមិក្រាំងអង្ក្រង
                                    សង្កាត់ក្រាំងធ្នង់, ខណ្ឌសែនសុខ,
                                    រាជធានីភ្នំពេញ។
                                </p>
                            </div>
                            <div className="text-gray-700 mt-4">
                                <p>Contact Us</p>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    <a
                                        href="https://t.me/joinchat/JZW3WDMdHgkzODk1"
                                        className="p-4 bg-cyan-700 rounded-full flex items-center text-white hover:bg-white hover:text-cyan-700 duration-500 ease-in-out"
                                    >
                                        <FaTelegramPlane />
                                    </a>
                                    <a
                                        href="https://facebook.com/chhatgroup"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-4 bg-cyan-700 rounded-full flex items-center text-white hover:bg-white hover:text-cyan-700 duration-500 ease-in-out"
                                    >
                                        <FaFacebookF />
                                    </a>
                                    <a
                                        href="https://instagram.com/chhatgroup"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-4 bg-cyan-700 rounded-full flex items-center text-white hover:bg-white hover:text-cyan-700 duration-500 ease-in-out"
                                    >
                                        <FaInstagram />
                                    </a>
                                    <a
                                        href="mailto:info@chhatgroup.com"
                                        className="p-4 bg-cyan-700 rounded-full flex items-center text-white hover:bg-white hover:text-cyan-700 duration-500 ease-in-out"
                                    >
                                        <IoMdMail />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default BlogDetail;
