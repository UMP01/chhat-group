import MemberCompany from "../../Components/MemberCompany/MemberCompany";
import ChhatRealEstateLogo from "../../assets/Images/Square/CHHAT-REAL-ESTATE-NO-BG.png";
import ChhatRealEstatePic from "../../assets/Images/Homepage/1823.jpg";
const ChhatRealEstate = () => {
  return (
    <MemberCompany
      logoSrc={ChhatRealEstateLogo}
      logoAlt="Chhat RealEstate Logo"
      bannerImageSrc={ChhatRealEstatePic}
      bannerImageAlt="Chhat RealEstate Feature"
      title="About Chhat RealEstate"
      description="At Chhat RealEstate, we pride ourselves on sourcing only the highest quality RealEstates. Our collection features a diverse range of styles, from classic solitaires to intricate bespoke designs, all crafted to celebrate life’s most precious moments."
      firstTitle="Our Business"
      firstDescription="Welcome to Chhat RealEstate, where elegance meets excellence. Established with a passion for fine jewelry, we specialize in offering an exquisite selection of RealEstates that captivate and inspire."
      secondTitle="Experience the Chhat RealEstate"
      secondDescription="Visit our showroom and immerse yourself in a world of luxury and sophistication. Discover a collection that combines beauty with quality and find a RealEstate that will be cherished for generations. At Chhat RealEstate, we don’t just sell jewelry; we create lasting memories."
    />
  );
};

export default ChhatRealEstate;
