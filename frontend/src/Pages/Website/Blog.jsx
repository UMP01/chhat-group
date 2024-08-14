import { useEffect, useState } from "react";
import { fetchNews } from "../../Service/BlogService";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import { BsCalendarDate } from "react-icons/bs";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";

const News = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 12; // 4 rows of 3 columns

  useEffect(() => {
    const getNews = async () => {
      try {
        const data = await fetchNews("latest");
        setArticles(data);
      } catch (error) {
        setError("Failed to load news. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    getNews();
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
  const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);

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
    <>
      <Breadcrumb curPage="Blog" />
      <div className="container max-w-7xl mx-auto px-5 pb-5 pt-0 rubik">
        <h1 className="text-2xl mb-4 text-gray-700">Latest News</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {currentArticles.map((article, index) => (
            <div
              key={index}
              className="border rounded-lg border-gray-100 px-5 pb-8 pt-5 shadow-lg"
            >
              {article.urlToImage && (
                <img
                  src={article.urlToImage}
                  alt={article.title || "News image"}
                  className="w-full h-48 object-cover mb-4 rounded"
                />
              )}
              <h2 className="text-xl text-gray-600 my-3 line-clamp-1">
                {article.title}
              </h2>
              <p className="text-gray-500 line-clamp-3">
                {article.description}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <BsCalendarDate className="mt-3 mr-2 text-gray-500"/>
                  <p className="text-sm text-gray-500 mt-3">{article.formattedDate}</p>
                </div>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="primary-color text-sm inline-flex items-center pt-3 hover:translate-x-3 duration-200 cursor-pointer"
                >
                  Read More <HiOutlineArrowNarrowRight className="ml-1" />
                </a>
                </div>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center mt-4">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className="primary-bg-color text-white text-sm px-4 py-2 rounded disabled:opacity-50 inline-flex"
          >
            <GoArrowLeft className="mr-2 mt-1" />
            Previous
          </button>
          <span>Page {currentPage}</span>
          <button
            onClick={handleNextPage}
            disabled={indexOfLastArticle >= articles.length}
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
