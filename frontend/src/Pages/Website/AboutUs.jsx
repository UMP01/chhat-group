import Header from "../../Components/PageHeader/PageHeader";
import Banner from "../../assets/Images/Homepage/2386.jpg";

const About = () => {
  

  return (
    <div className="container max-w-7xl mx-auto">
      <Header
        curPage="About"
        title="About Us"
        textColor="#0c4a6e"
        backgroundImage={Banner}
        backgroundPosition="bottom"
      />
      
    </div>
  );
};

export default About;
