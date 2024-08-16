import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import slide01 from "../../assets/Images/Slideshow/104046.jpg";
import slide02 from "../../assets/Images/Slideshow/slideshow-08.jpg";
import slide03 from "../../assets/Images/Slideshow/slideshow-03.jpg";
import slide04 from "../../assets/Images/Slideshow/slideshow-07.jpg";

const Carousel = () => {
    const carouselItems = [
        {
            src: slide01,
            caption: "Quality Products, Exceptional Service.",
            description:
                "At Chhat Group, we provide top-quality products and exceptional service to meet all your business needs.",
        },
        {
            src: slide02,
            caption: "Caption for Slide 2",
            description: "Description for slide 2",
        },
        {
            src: slide03,
            caption: "Caption for Slide 3",
            description: "Description for slide 3",
        },
        {
            src: slide04,
            caption: "Caption for Slide 4",
            description: "Description for slide 4",
        },
    ];

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
        <div className="relative overflow-hidden w-full lg:w-4/5 mx-auto rounded-md">
            <div
                className="relative flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {carouselItems.map((item, index) => (
                    <div key={index} className="w-full flex-shrink-0 relative">
                        <img
                            src={item.src}
                            alt={`Slide ${index}`}
                            className="w-full h-60 md:h-80 lg:h-[590px] object-cover"
                        />
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-gradient-to-t from-black via-transparent to-transparent">
                            <div className="text-center text-cyan-700">
                                <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl mb-4">
                                    {item.caption}
                                </h1>
                                <p className="text-xs sm:text-sm md:text-base lg:text-lg">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <button
                className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white"
                onClick={prevSlide}
            >
                <IoIosArrowBack className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>
            <button
                className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white"
                onClick={nextSlide}
            >
                <IoIosArrowForward className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {carouselItems.map((_, index) => (
                    <button
                        key={index}
                        className={`w-3 h-3 rounded-full ${
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
