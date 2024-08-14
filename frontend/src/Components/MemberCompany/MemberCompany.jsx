import PropTypes from "prop-types";
import Breadcrumb from "../Breadcrumb/Breadcrumb";

const MemberCompany = ({
  logoSrc,
  logoAlt,
  bannerImageSrc,
  bannerImageAlt,
  title,
  description,
  firstTitle,
  firstDescription,
  secondTitle,
  secondDescription,
}) => {
  return (
    <>
      <div className="bg-gray-100 shadow-md mb-3">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center py-10">
          <div className="w-full md:w-1/3 flex justify-center mb-6 md:mb-0 px-5">
            <img
              src={logoSrc}
              alt={logoAlt}
              className="w-48 h-48 object-contain"
            />
          </div>
          <div className="w-full md:w-2/3 flex justify-start items-center px-5 md:pr-10">
            <div className="text-start">
              <h1 className="text-4xl uppercase text-start my-5 text-gray-600">
                {title}
              </h1>
              <p className="my-5 text-gray-600">{description}</p>
            </div>
          </div>
        </div>
      </div>
      <Breadcrumb curPage={title} />
      <div className="max-w-7xl mx-auto flex flex-wrap">
        <div className="lg:w-1/2 text-gray-700 p-5">
          <h1 className="text-2xl text-cyan-600 mb-5">{firstTitle}</h1>
          <p className="my-1">{firstDescription}</p>
          <h1 className="text-2xl text-cyan-600 mb-5 mt-3">{secondTitle}</h1>
          <p className="mt-3 my-1">{secondDescription}</p>
        </div>
        <div className="lg:w-1/2 p-5">
          <div className="relative w-full h-full">
            <img
              src={bannerImageSrc}
              className="w-full h-auto object-cover rounded-lg"
              alt={bannerImageAlt}
            />
          </div>
        </div>
      </div>
    </>
  );
};

MemberCompany.propTypes = {
  logoSrc: PropTypes.string.isRequired,
  logoAlt: PropTypes.string.isRequired,
  bannerImageSrc: PropTypes.string.isRequired,
  bannerImageAlt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  firstTitle: PropTypes.string.isRequired,
  firstDescription: PropTypes.string.isRequired,
  secondTitle: PropTypes.string,
  secondDescription: PropTypes.string,
};

MemberCompany.defaultProps = {
  logoAlt: "Logo",
  bannerImageAlt: "Feature Image",
  title: "About Us",
  description: "Default description about the company.",
  firstTitle: "Our Business",
  firstDescription: "Default business description.",
  secondTitle: "Experience the Difference",
  secondDescription: "Default experience description.",
};

export default MemberCompany;
