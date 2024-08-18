import MemberCompany from "../../Components/MemberCompany/MemberCompany";
import ChhatConstructionLogo from "../../assets/Images/Square/CHHAT-CONSTRUCTION-NO-BG.png";
import ChhatConstructionPic from "../../assets/Images/Homepage/1823.jpg";
const ChhatConstruction = () => {
  return (
    <MemberCompany
      logoSrc={ChhatConstructionLogo}
      logoAlt="Chhat Construction Logo"
      bannerImageSrc={ChhatConstructionPic}
      bannerImageAlt="Chhat Construction Feature"
      title="About Chhat Construction"
      description="At Chhat Construction, we pride ourselves on sourcing only the highest quality Constructions. Our collection features a diverse range of styles, from classic solitaires to intricate bespoke designs, all crafted to celebrate life’s most precious moments."
      firstTitle="Our Business"
      firstDescription="Welcome to Chhat Construction, where elegance meets excellence. Established with a passion for fine jewelry, we specialize in offering an exquisite selection of Constructions that captivate and inspire."
      secondTitle="Experience the Chhat Construction"
      secondDescription="Visit our showroom and immerse yourself in a world of luxury and sophistication. Discover a collection that combines beauty with quality and find a Construction that will be cherished for generations. At Chhat Construction, we don’t just sell jewelry; we create lasting memories."
    />
  );
};

export default ChhatConstruction;
