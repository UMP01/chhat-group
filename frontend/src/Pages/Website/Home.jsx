import Slideshow from "../../Components/Carousel/Carousel";
import WhyChooseUs from "../../Components/WhyChooseUs/WhyChooseUs";
import Service from "../../Components/OurService/OurService";
import FindOut from "../../Components/FindOut/FindOut";
import CommercialTeam from "../../Components/CommercialTeam/CommercialTeam";

const Home = () => {
    return (
        <div>
            <Slideshow />
            <WhyChooseUs />
            <Service />
            <FindOut />
            <CommercialTeam />
        </div>
    );
};
export default Home;
