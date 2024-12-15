import { useEffect, useState } from "react";
import { axiosClient } from "../../api/axios";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import { BsCalendarDate } from "react-icons/bs";

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
            const activeArticles = Array.isArray(response.data)
                ? response.data.filter(
                      (article) => article.category === "Chhat Research"
                  )
                : [];
            if (activeArticles.length === 0) {
                setError("No articles available at this time.");
            }
            setArticles(activeArticles);
        } catch (error) {
            console.error("Error fetching blogs:", error);
            setError("Failed to fetch articles. Please try again later.");
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
            <div className="max-w-7xl mx-auto">
                <div className="py-5 px-5 bg-cyan-100 rounded-md">
                    <p className="text-cyan-700 text-center text-base font-medium">
                        {error}
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="container max-w-7xl mx-auto pb-5 pt-0 rubik">
            <h1 className="text-lg text-cyan-700 mb-4 font-medium">
                Latest News
            </h1>
            <hr className="w-full mt-3 mb-5 border" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {currentArticles.map((article) => (
                    <div
                        key={article.id}
                        className="border rounded-lg border-gray-100 px-5 pb-8 pt-5 shadow-lg"
                    >
                        {article.image && (
                            <img
                                src={`https://chhatgroup.com:9443/storage/${article.image}`}
                                alt={article.title || "News image"}
                                className="w-full h-48 object-cover mb-4 rounded"
                            />
                        )}
                        <h2 className="text-base lg:text-lg md:text-base sm:text-base font-semibold text-gray-600 my-3 line-clamp-1 font-khmer-nato">
                            {article.title}
                        </h2>
                        <p className="text-gray-600 line-clamp-4 font-normal font-khmer-nato text-sm lg:text-base md:text-base sm:text-sm">
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
                                href={`/blog/${article.id}`}
                                className="text-cyan-700 border-b-2 border-cyan-700 font-semibold text-sm inline-flex items-center pt-3 hover:scale-105 duration-200 cursor-pointer"
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
    );
};

export default News;
