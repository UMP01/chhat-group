import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import images
import Sting from "../../assets/Images/Commercial-logo/sting.png";
import Lucky from "../../assets/Images/Commercial-logo/lucky.png";
import Aba from "../../assets/Images/Commercial-logo/aba.png";
import Wing from "../../assets/Images/Commercial-logo/wing.png";
import Toyota from "../../assets/Images/Commercial-logo/toyota.png";
import Google from "../../assets/Images/Commercial-logo/google.png";
import Total from "../../assets/Images/Commercial-logo/total.png";
import Microsoft from "../../assets/Images/Commercial-logo/microsoft.png";
import CambodiaBeer from "../../assets/Images/Commercial-logo/cambodiabeer.png";
import Grab from "../../assets/Images/Commercial-logo/grab.png";
import Chipmong from "../../assets/Images/Commercial-logo/chipmong.png";
import Aia from "../../assets/Images/Commercial-logo/aia.png";
import Amret from "../../assets/Images/Commercial-logo/amret.png";
import Smart from "../../assets/Images/Commercial-logo/smart.png";
import Khmerbeverage from "../../assets/Images/Commercial-logo/khmerbeverage.png";
import Coca from "../../assets/Images/Commercial-logo/coca.png";
import Manulife from "../../assets/Images/Commercial-logo/manulife.png";
import Nestle from "../../assets/Images/Commercial-logo/nestle.png";
import Samsung from "../../assets/Images/Commercial-logo/samsung.png";
import Ph from "../../assets/Images/Commercial-logo/ph.png";

const Logoes = [
    { image: Sting, alt: "Sting Logo" },
    { image: Lucky, alt: "Lucky Logo" },
    { image: Aba, alt: "Aba Logo" },
    { image: Wing, alt: "Wing Logo" },
    { image: Toyota, alt: "Toyota Logo" },
    { image: Google, alt: "Google Logo" },
    { image: Total, alt: "Total Logo" },
    { image: Microsoft, alt: "Microsoft Logo" },
    { image: CambodiaBeer, alt: "Cambodia Beer Logo" },
    { image: Grab, alt: "Grab Logo" },
    { image: Chipmong, alt: "Chipmong Logo" },
    { image: Aia, alt: "Aia Logo" },
    { image: Amret, alt: "Amret Logo" },
    { image: Smart, alt: "Smart Logo" },
    { image: Khmerbeverage, alt: "Khmer Beverage Logo" },
    { image: Coca, alt: "Coca Logo" },
    { image: Manulife, alt: "Manulife Logo" },
    { image: Nestle, alt: "Nestle Logo" },
    { image: Samsung, alt: "Samsung Logo" },
    { image: Ph, alt: "Peng Hout Logo" },
];

const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 10,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 1500,
    cssEase: "linear",
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 6,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
};

const CommercialTeam = ({ logoes = Logoes }) => {
    return (
        <div className="max-w-7xl mx-auto">
            <h1 className="text-center pb-4 text-xl sm:text-2xl md:text-3xl lg:text-3xl text-gray-600">
                Commercial Team
            </h1>
            <p className="text-center p-2 text-gray-500 text-sm sm:text-base md:text-base lg:text-base">
                The commercial team works with global and local giant companies
                in many different industries including the automotive and tire
                clients
            </p>
            <div className="pt-10">
                <Slider {...settings}>
                    {logoes.map((logo, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-center"
                        >
                            <img
                                src={logo.image}
                                alt={logo.alt}
                                className="w-20 h-20 object-contain"
                            />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default CommercialTeam;
