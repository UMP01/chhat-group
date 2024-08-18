import React from "react";

const Content = ({ activeTab }) => {
    const getContent = () => {
        switch (activeTab) {
            case "category1":
                return <p>Content for Category 1.</p>;
            case "category2":
                return <p>Content for Category 2.</p>;
            case "category3":
                return <p>Content for Category 3.</p>;
            case "category4":
                return <p>Content for Category 3.</p>;
            case "category5":
                return <p>Content for Category 3.</p>;

            default:
                return <p>Select a category to see the content.</p>;
        }
    };

    return (
        <div className="flex-1 px-6">
            <div className="mt-4">{getContent()}</div>
        </div>
    );
};

export default Content;
