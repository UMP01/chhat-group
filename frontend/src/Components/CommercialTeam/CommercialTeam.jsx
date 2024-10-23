import React from "react";
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

const CommercialTeam = ({ logoes = Logoes }) => {
    return (
        <div className="max-w-7xl mx-auto my-10 sm:my-20 px-3 sm:px-1">
            <h1 className="text-center pb-3 text-xl sm:text-2xl md:text-3xl lg:text-3xl text-gray-600 font-semibold">
                Commercial Team
            </h1>
            <p className="text-center text-gray-500 text-sm sm:text-base md:text-base lg:text-base">
                The public / social research team works with global,
                international and local NGOs in different sectors
            </p>
            <hr className="h-px my-8 border-gray-600 border-t-2 w-44 mx-auto" />
            <div className="grid grid-cols-3 sm:grid-cols-10 pt-5">
                {logoes.map((logo, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-center bg-white border border-gray-200 p-2 transform transition duration-200 hover:scale-90 hover:border-none"
                    >
                        <img
                            src={logo.image}
                            alt={logo.alt}
                            className="w-20 h-20 object-contain"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CommercialTeam;
