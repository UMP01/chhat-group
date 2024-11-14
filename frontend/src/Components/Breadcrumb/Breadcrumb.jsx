import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { HiHome } from "react-icons/hi2";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Breadcrumb = ({ curPage, lastPage = null, lastPageLink = null }) => {
    return (
        <nav
            className="container max-w-7xl mx-auto py-3 px-5 font-medium"
            aria-label="Breadcrumb"
        >
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center text-sm sm:text-base md:text-base lg:text-base font-medium text-gray-600">
                    <Link
                        to="/"
                        className="text-gray-600 inline-flex items-center rubik"
                    >
                        <HiHome className="w-4 h-4 mr-2" />
                        Home
                    </Link>
                </li>
                {lastPage && (
                    <li className="text-sm sm:text-base md:text-base lg:text-base font-medium text-gray-600">
                        <div className="flex items-center">
                            <MdOutlineKeyboardArrowRight className="w-6 h-6 text-gray-600" />
                            <Link
                                to={lastPageLink}
                                className="text-gray-600 ml-1 md:ml-2 rubik"
                            >
                                {lastPage}
                            </Link>
                        </div>
                    </li>
                )}
                <li
                    aria-current="page"
                    className="text-sm sm:text-base md:text-base lg:text-base font-medium text-gray-600"
                >
                    <div className="flex items-center">
                        <MdOutlineKeyboardArrowRight className="w-6 h-6 text-gray-500" />
                        <span className="text-gray-500 ml-1 md:ml-2 rubik">
                            {curPage}
                        </span>
                    </div>
                </li>
            </ol>
        </nav>
    );
};

Breadcrumb.propTypes = {
    curPage: PropTypes.string.isRequired,
    lastPage: PropTypes.string,
    lastPageLink: PropTypes.string,
};

export default Breadcrumb;
