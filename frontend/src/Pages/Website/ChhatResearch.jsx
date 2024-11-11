import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import { useState } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Content from "../../Components/ContentChhatReasech/Content";

const categories = [
    { id: "category1", name: "Who we are ?" },
    { id: "category2", name: "Chhat Research Expertise" },
    { id: "category3", name: "Chhat Reseach Large-Scale" },
    { id: "category4", name: "Chhat Reseach blog" },
    { id: "category5", name: "Team Members" },
];

const ChhatResearch = () => {
    const [activeTab, setActiveTab] = useState(categories[0].id);

    return (
        <div className="max-w-7xl mx-auto">
            <Breadcrumb curPage="Chhat Research" />
            <div className="flex flex-wrap">
                <Sidebar
                    categories={categories}
                    activeTab={activeTab}
                    onTabChange={setActiveTab}
                />
                <Content activeTab={activeTab} />
            </div>
        </div>
    );
};

export default ChhatResearch;
