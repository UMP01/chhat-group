import MemberCompany from "../../Components/MemberCompany/MemberCompany";
import ChhatCosmeticLogo from "../../assets/Images/Square/CHHAT-COSMETICS-NO-BG.png";
import ChhatCosmeticPic from "../../assets/Images/Homepage/1823.jpg";
const ChhatCosmetic = () => {
  return (
    <MemberCompany
      logoSrc={ChhatCosmeticLogo}
      logoAlt="Chhat Cosmetic Logo"
      bannerImageSrc={ChhatCosmeticPic}
      bannerImageAlt="Chhat Cosmetic Feature"
      title="About Chhat Cosmetic"
      description="At Chhat Cosmetic, we pride ourselves on sourcing only the highest quality Cosmetics. Our collection features a diverse range of styles, from classic solitaires to intricate bespoke designs, all crafted to celebrate life’s most precious moments."
      firstTitle="Our Business"
      firstDescription="Welcome to Chhat Cosmetic, where elegance meets excellence. Established with a passion for fine jewelry, we specialize in offering an exquisite selection of Cosmetics that captivate and inspire."
      secondTitle="Experience the Chhat Cosmetic"
      secondDescription="Visit our showroom and immerse yourself in a world of luxury and sophistication. Discover a collection that combines beauty with quality and find a Cosmetic that will be cherished for generations. At Chhat Cosmetic, we don’t just sell jewelry; we create lasting memories."
    />
  );
};

export default ChhatCosmetic;
