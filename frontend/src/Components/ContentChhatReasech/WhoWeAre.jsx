import Strategy from "../Strategy/Strategy";

const ChhatResearchHome = () => {
    return (
        <div>
            <div>
                <h1 className="text-lg font-medium text-cyan-700">
                    Who we are ?
                </h1>
                <hr class="w-full border" />
                <div className="py-5 text-sm sm:text-base md:text-base lg:textbase text-gray-600 font-medium">
                    <p>
                        Chhat Research is a professionally leading data,
                        insights, and consulting company. We are a regional
                        company with an international standard quality of
                        service.
                    </p>
                </div>
            </div>
            <Strategy />
        </div>
    );
};
export default ChhatResearchHome;
