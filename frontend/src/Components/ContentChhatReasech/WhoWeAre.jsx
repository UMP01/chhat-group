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
                    className="img-fluid h-52 w-screen object-cover rounded-md shadow-md"
                />
                <div className="py-5 flex flex-col sm:flex-row justify-center items-center gap-5">
                    <div className="p-7 bg-gray-100 text-gray-600 rounded-lg shadow-sm max-w-xs sm:max-w-md">
                        <p>
                            Chhat Research is a professionally leading data,
                            insights, and consulting company.
                        </p>
                    </div>
                    <div className="p-7 bg-gray-100 text-gray-600 rounded-lg shadow-sm max-w-xs sm:max-w-md">
                        <p>
                            We are a regional company with an international
                            standard quality of service.
                        </p>
                    </div>
                </div>
            </div>
            <Strategy />
        </div>
    );
};
export default ChhatResearchHome;
