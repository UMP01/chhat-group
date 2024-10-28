import React from "react";
import PromotionBanner from '../../assets/Images/promotion_banner.jpg';
const Banner = () => {
  return (
    <div>
      <p className="py-2 px-5 bg-sky-600 rounded-tl-md rounded-tr-md border-2
       border-sky-600 text-white text-center font-semibold text-xl">
        Promotion Banner
      </p>
      <div className="w-[500px] bg-black rounded-bl-md rounded-br-md">
        <img src={PromotionBanner} alt="PromotionBanner" className="w-full h-full rounded-md" />
      </div>
    </div>
    
  );
};
export default Banner;
