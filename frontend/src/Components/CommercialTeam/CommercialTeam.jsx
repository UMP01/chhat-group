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
        <div className="p-4">
            <h1 className="text-cyan-700 text-center text-xl py-4">
                Commercial Team
            </h1>
            <div className="scrolling-wrapper">
                <div className="scrolling-content">
                    {logoes.map((logo, index) => (
                        <div key={index} className="inline-block">
                            <img
                                src={logo.image}
                                alt={logo.alt}
                                className="w-32 h-auto m-1"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CommercialTeam;
