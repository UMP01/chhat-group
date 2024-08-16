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
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide
            ? carouselItems.length - 1
            : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === carouselItems.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="relative h-screen slideshow overflow-hidden">
            <div
                className="absolute top-0 left-0 w-full h-full flex transition-transform duration-500"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {carouselItems.map((item, index) => (
                    <div
                        key={index}
                        className="w-full h-full flex-shrink-0 flex items-center justify-center bg-gray-200 relative"
                    >
                        <img
                            src={item.src}
                            alt={`Slide ${index}`}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute left-8 sm:left-1/2 sm:transform sm:-translate-x-1/2 top-1/3 transform text-cyan-800 p-2 rounded text-left sm:text-center">
                            <h1 className="text-2xl md:text-4xl sm:text-3xl mb-5 slideshow-caption rubik">
                                {item.caption}
                            </h1>
                            <p className="text-sm md:text-xl sm:text-lg slideshow-description rubik">
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <button
                className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white p-2 rounded-full"
                onClick={prevSlide}
            >
                <IoIosArrowBack className="w-8 h-8" />
            </button>
            <button
                className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white p-2 rounded-full"
                onClick={nextSlide}
            >
                <IoIosArrowForward className="w-8 h-8" />
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
