import MemberCompany from "../../Components/MemberCompany/MemberCompany";
import ChhatAgricultureLogo from "../../assets/Images/Square/CHHAT-AGRICULTURE-NO-BG.png";
import ChhatAgriculturePic from "../../assets/Images/Homepage/1823.jpg";
const ChhatAgriculture = () => {
  return (
    <MemberCompany
      logoSrc={ChhatAgricultureLogo}
      logoAlt="Chhat Agriculture Logo"
      bannerImageSrc={ChhatAgriculturePic}
      bannerImageAlt="Chhat Agriculture Feature"
      title="About Chhat Agriculture"
      description="At Chhat Agriculture, we pride ourselves on sourcing only the highest quality Agricultures. Our collection features a diverse range of styles, from classic solitaires to intricate bespoke designs, all crafted to celebrate life’s most precious moments."
      firstTitle="Our Business"
      firstDescription="Welcome to Chhat Agriculture, where elegance meets excellence. Established with a passion for fine jewelry, we specialize in offering an exquisite selection of Agricultures that captivate and inspire."
      secondTitle="Experience the Chhat Agriculture"
      secondDescription="Visit our showroom and immerse yourself in a world of luxury and sophistication. Discover a collection that combines beauty with quality and find a Agriculture that will be cherished for generations. At Chhat Agriculture, we don’t just sell jewelry; we create lasting memories."
    />
  );
};

export default ChhatAgriculture;
