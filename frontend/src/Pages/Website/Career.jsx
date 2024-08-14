import Banner from "../../assets/Images/Homepage/104046.jpg";
import Header from "../../Components/PageHeader/PageHeader";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import JobList from "../../Components/JobList/JobList";
import JobBanner from "../../Components/Banner/Banner";

const Career = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Header
        backgroundImage={Banner}
        title="Join with us"
        text="text"
        textColor="#0c4a6e"
        curPage="Career"
      />
      <Breadcrumb
        curPage="Job Opportunity"
        lastPage="Career"
        lastPageLink="/career"
      />
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] lg:grid-cols-[2fr_1fr] gap-4">
        <div className="px-4">
          <JobList />
        </div>
        <div className="px-4">
          <JobBanner />
        </div>
      </div>
    </div>
  );
};

export default Career;
