import MemberCompany from "../../Components/MemberCompany/MemberCompany";
import ChhatCapitalLogo from "../../assets/Images/Square/CHHAT-CAPITAL-NO-BG.png";
import ChhatCapitalPic from "../../assets/Images/Homepage/1823.jpg";
const ChhatCapital = () => {
  return (
    <MemberCompany
      logoSrc={ChhatCapitalLogo}
      logoAlt="Chhat Capital Logo"
      bannerImageSrc={ChhatCapitalPic}
      bannerImageAlt="Chhat Capital Feature"
      title="About Chhat Capital"
      description="At Chhat Capital, we pride ourselves on sourcing only the highest quality Capitals. Our collection features a diverse range of styles, from classic solitaires to intricate bespoke designs, all crafted to celebrate life’s most precious moments."
      firstTitle="Our Business"
      firstDescription="Welcome to Chhat Capital, where elegance meets excellence. Established with a passion for fine jewelry, we specialize in offering an exquisite selection of Capitals that captivate and inspire."
      secondTitle="Experience the Chhat Capital"
      secondDescription="Visit our showroom and immerse yourself in a world of luxury and sophistication. Discover a collection that combines beauty with quality and find a Capital that will be cherished for generations. At Chhat Capital, we don’t just sell jewelry; we create lasting memories."
    />
  );
};

export default ChhatCapital;
