import React from "react";
import Research from "../../assets/Images/Homepage/chhatResearch.png";
import Trading from "../../assets/Images/Homepage/chhatTrading.png";
import Diamond from "../../assets/Images/Homepage/chhatDiamond.png";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

const cardsData = [
    {
        imageSrc: Research,
        altText: "Chhat Research",
        title: "Chhat Research",
        description:
            "Discover why countless businesses trust us as their go-to partner for quality and service. Welcome to Chhat Research where excellence meets your business needs.",
        link: "/contact",
    },
    {
        imageSrc: Trading,
        altText: "Chhat Trading",
        title: "Chhat Trading",
        description:
            "Empowering Your Trades, Maximizing Your Success. Your trusted partner in navigating the global markets. Together, we achieve financial growth and security.",
        link: "/",
    },
    {
        imageSrc: Diamond,
        altText: "Chhat Diamond",
        title: "Chhat Diamond",
        description:
            "Elegance Redefined: Discover Timeless Beauty at Our Jewellery Shop. Handcrafted Perfection for Every Occasion. Celebrate Life's Moments with Sparkling Treasures.",
        link: "/",
    },
];

const Card = ({ imageSrc, altText, title, description, link }) => (
    <div className="lg:w-1/3 p-5">
        <div className="shadow-lg rounded-lg border bg-gray-50 border-gray-100 overflow-hidden py-5 hover:scale-105 duration-300 hover:shadow-2xl">
            <img
                src={imageSrc}
                alt={altText}
                className="img-fluid w-56 mx-auto h-auto object-fit pt-3"
            />
            <div className="px-8 py-1">
                <h5 className=" text-xl sm:text-lg md:text-xl lg:text-xl text-gray-600 pb-2 pt-5">
                    {title}
                </h5>
                <p className="text-gray-500 line-clamp-4 text-sm sm:text-base md:text-base lg:text-base">
                    {description}
                </p>
                <Link
                    className="primary-color inline-flex items-center pt-3 border-b-2 border-cyan-500 hover:translate-x-3 duration-200 cursor-pointer"
                    to={link}
                >
                    Read More <HiOutlineArrowNarrowRight className="ml-1" />
                </Link>
            </div>
        </div>
    </div>
);

const CardGrid = () => (
    <div className="container max-w-7xl mx-auto rubik mb-10">
        <div className="text-center pt-20 pb-10">
            <h5 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl text-gray-600 mb-3">
                Our Services
            </h5>
            <p className="text-gray-500 text-sm sm:text-base md:text-base lg:text-base">
                We provide comprehensive services in trading, market research,
                and product sales, specializing in high-quality jewelery.
            </p>
        </div>
        <div className="flex flex-wrap justify-center items-center">
            {cardsData.map((card, index) => (
                <Card
                    key={index}
                    imageSrc={card.imageSrc}
                    altText={card.altText}
                    title={card.title}
                    description={card.description}
                    link={card.link}
                />
            ))}
        </div>
    </div>
);

export default CardGrid;
