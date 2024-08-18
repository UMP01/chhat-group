import MemberCompany from "../../Components/MemberCompany/MemberCompany";
import ChhatTradingLogo from "../../assets/Images/Square/CHHAT-TRADING-NO-BG.png";
import ChhatTradingPic from "../../assets/Images/Homepage/1823.jpg";
const ChhatTrading = () => {
  return (
    <MemberCompany
      logoSrc={ChhatTradingLogo}
      logoAlt="Chhat Trading Logo"
      bannerImageSrc={ChhatTradingPic}
      bannerImageAlt="Chhat Trading Feature"
      title="About Chhat Trading"
      description="At Chhat Trading, we pride ourselves on sourcing only the highest quality Tradings. Our collection features a diverse range of styles, from classic solitaires to intricate bespoke designs, all crafted to celebrate life’s most precious moments."
      firstTitle="Our Business"
      firstDescription="Welcome to Chhat Trading, where elegance meets excellence. Established with a passion for fine jewelry, we specialize in offering an exquisite selection of Tradings that captivate and inspire."
      secondTitle="Experience the Chhat Trading"
      secondDescription="Visit our showroom and immerse yourself in a world of luxury and sophistication. Discover a collection that combines beauty with quality and find a Trading that will be cherished for generations. At Chhat Trading, we don’t just sell jewelry; we create lasting memories."
    />
  );
};

export default ChhatTrading;
