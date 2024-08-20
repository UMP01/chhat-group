import React from "react";
import WhoWeAre from "./WhoWeAre";
import Expertise from "./Expertise";
import History from "./History";
import Blog from "./Blog";
import TeamMember from "./TeamMember";

const Content = ({ activeTab }) => {
    const getContent = () => {
        switch (activeTab) {
            case "category1":
                return <WhoWeAre />;
            case "category2":
                return <Expertise />;
            case "category3":
                return <History />;
            case "category4":
                return <Blog />;
            case "category5":
                return <TeamMember />;

            default:
                return <p>Select a category to see the content.</p>;
        }
    };

    return (
        <div className="lg:w-3/4 px-6">
            <div className="mt-4">{getContent()}</div>
        </div>
    );
};

export default Content;
