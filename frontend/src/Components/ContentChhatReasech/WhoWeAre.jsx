import img01 from "../../assets/Images/Homepage/img-01.jpg";
import Strategy from "../Strategy/Strategy";
import CommercialTeam from "../CommercialTeam/CommercialTeam";

const ChhatResearchHome = () => {
    return (
        <div>
            <div>
                <h1 className="text-2xl text-cyan-700">Who we are ?</h1>
                <hr class="w-full mt-3 mb-5 border" />

                <img
                    src={img01}
                    className="img-fluid h-52 w-screen object-cover rounded-md"
                />
            </div>
            <Strategy />
            <CommercialTeam />
        </div>
    );
};
export default ChhatResearchHome;
