import MemberCompany from "../../Components/MemberCompany/MemberCompany";
import ChhatDiamondLogo from "../../assets/Images/Square/CHHAT-DIAMOND-NO-BG.png";
import ChhatDiamondPic from "../../assets/Images/Homepage/1823.jpg";
const ChhatDiamond = () => {
  return (
    <MemberCompany
      logoSrc={ChhatDiamondLogo}
      logoAlt="Chhat Diamond Logo"
      bannerImageSrc={ChhatDiamondPic}
      bannerImageAlt="Chhat Diamond Feature"
      title="About Chhat Diamond"
      description="At Chhat Diamond, we pride ourselves on sourcing only the highest quality diamonds. Our collection features a diverse range of styles, from classic solitaires to intricate bespoke designs, all crafted to celebrate life’s most precious moments."
      firstTitle="Our Business"
      firstDescription="Welcome to Chhat Diamond, where elegance meets excellence. Established with a passion for fine jewelry, we specialize in offering an exquisite selection of diamonds that captivate and inspire."
      secondTitle="Experience the Chhat Diamond"
      secondDescription="Visit our showroom and immerse yourself in a world of luxury and sophistication. Discover a collection that combines beauty with quality and find a diamond that will be cherished for generations. At Chhat Diamond, we don’t just sell jewelry; we create lasting memories."
    />
  );
};

export default ChhatDiamond;
