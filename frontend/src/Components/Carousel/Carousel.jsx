import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import bannerPhcumBen from "../../assets/Images/Slideshow/banner-phcum-ben.jpg";
import slide01 from "../../assets/Images/Slideshow/banner-research.jpg";
import slide02 from "../../assets/Images/Slideshow/banner-diamond.jpg";
import slide03 from "../../assets/Images/Slideshow/CHHAT-DIAMOND.jpg";

const Carousel = () => {
    const carouselItems = [bannerPhcumBen, slide01, slide02, slide03];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1
        );
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
        );
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="relative overflow-hidden w-full lg:w-[calc(100%-10px)] max-w-[calc(100%-20px)] mx-auto h-40 sm:h-52 md:h-64 lg:h-80 xl:h-[650px] rounded-md">
            <div
                className="relative flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {carouselItems.map((src, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                        <img
                            src={src}
                            alt={`Slide ${index}`}
                            className="w-full h-40 sm:h-52 md:h-64 lg:h-80 xl:h-[650px] object-cover"
                        />
                    </div>
                ))}
            </div>
            <button
                className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white z-30"
                onClick={prevSlide}
            >
                <IoIosArrowBack className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>
            <button
                className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white z-30"
                onClick={nextSlide}
            >
                <IoIosArrowForward className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
                {carouselItems.map((_, index) => (
                    <button
                        key={index}
                        className={`w-2 h-2 rounded-full ${
                            index === currentIndex ? "bg-white" : "bg-gray-400"
                        }`}
                        onClick={() => goToSlide(index)}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
