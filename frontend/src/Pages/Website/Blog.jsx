import { useEffect, useState } from "react";
import { axiosClient } from "../../api/axios";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import { BsCalendarDate } from "react-icons/bs";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";

const Image_URL = "https://chhatgroup.com:9443/storage";
const News = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const articlesPerPage = 12;

    const fetchArticles = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await axiosClient.get("/blogs");

            if (!Array.isArray(response.data) || response.data.length === 0) {
                setError("No blog available at this time");
                setArticles([]);
            } else {
                const activeArticles = response.data.filter(
                    (article) => article.category === "Chhat Group"
                ).sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
                setArticles(activeArticles);
                if (activeArticles.length === 0) {
                    setError("No blog available at this time");
                }
            }
        } catch (error) {
            console.error("Error fetching blogs:", error);
            setError("Error fetching blogs, please try again later");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchArticles();
    }, []);

    const handleNextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const handlePrevPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const indexOfLastArticle = currentPage * articlesPerPage;
    const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
    const currentArticles = articles.slice(
        indexOfFirstArticle,
        indexOfLastArticle
    );

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="flex justify-center items-center border-gray-300 h-7 w-7 animate-spin rounded-full border-2 border-t-sky-700"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="max-w-7xl mx-auto text-cyan-700">
                <div className="flex flex-col text-center items-center py-32">
                    <div className="w-full">
                        <h1 className="font-semibold text-5xl sm:text-5xl md:text-6xl lg:text-7xl">
                            Sorry!
                        </h1>
                    </div>
                    <div className="w-full py-5">
                        <p className="font-medium text-lg sm:text-lg md:text-lg lg:text-xl">
                            {error}
                        </p>
                    </div>
                    <a
                        href="/"
                        className="py-2 border-b-2 font-medium border-cyan-700 hover:scale-110 duration-200 text-sm sm:text-base md:text-base lg:text-base"
                    >
                        Back to homepage
                    </a>
                </div>
            </div>
        );
    }

    return (
        <>
            <Breadcrumb curPage="Blog" />
            <div className="container max-w-7xl mx-auto px-5 pb-5 pt-0 rubik">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {currentArticles.map((article) => (
                        <div
                            key={article.id}
                            className="border rounded-lg border-gray-100 px-5 pb-8 pt-5 shadow-lg"
                        >
                            {article.image && (
                                <img
                                    src={`${Image_URL}/${article.image}`}
                                    alt={article.title || "News image"}
                                    className="w-full h-48 object-cover mb-4 rounded"
                                />
                            )}
                            <h2 className="text-base lg:text-lg md:text-base sm:text-base font-bold text-gray-600  my-3 line-clamp-1 font-khmer-nato">
                                {article.title}
                            </h2>
                            <p className="text-sm lg:text-base md:text-base sm:text-sm text-gray-600 line-clamp-4 font-normal font-khmer-nato">
                                {article.content}
                            </p>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <BsCalendarDate className="mt-3 mr-2 font-medium text-gray-600" />
                                    <p className="text-sm font-medium text-gray-600 mt-3">
                                        {new Date(
                                            article.created_at
                                        ).toLocaleDateString()}
                                    </p>
                                </div>
                                <a
                                    href={`/blog/${article.id}`} // Update to use Link from React Router
                                    className="text-cyan-700 font-semibold text-sm border-b-2 border-cyan-700 tracking-tight inline-flex items-center pt-3 hover:scale-105 duration-200 cursor-pointer"
                                >
                                    Read More{" "}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-between items-center mt-4">
                    <button
                        onClick={handlePrevPage}
                        disabled={currentPage === 1}
                        aria-label="Previous page"
                        className="primary-bg-color text-white text-sm px-4 py-2 rounded disabled:opacity-50 inline-flex"
                    >
                        <GoArrowLeft className="mr-2 mt-1" />
                        Previous
                    </button>
                    <span>Page {currentPage}</span>
                    <button
                        onClick={handleNextPage}
                        disabled={indexOfLastArticle >= articles.length}
                        aria-label="Next page"
                        className="primary-bg-color text-white text-sm px-4 py-2 rounded disabled:opacity-50 inline-flex"
                    >
                        Next
                        <GoArrowRight className="mt-1 ml-2" />
                    </button>
                </div>
            </div>
        </>
    );
};

export default News;
