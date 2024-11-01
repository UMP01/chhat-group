import Banner from "../../assets/Images/Homepage/104046.jpg";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import JobList from "../../Components/JobList/JobList";

const Career = () => {
  return (
    <div className="max-w-7xl mx-auto">
      
      <Breadcrumb
        curPage="Career"
      />
      <div className="mb-3 min-h-screen">
        <div className="px-4">
          <JobList />
        </div>
      </div>
    </div>
  );
};

export default Career;
