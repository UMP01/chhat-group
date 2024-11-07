import PropTypes from "prop-types";

function CardData(props) {
    const backgroundClass = props.background || "bg-gray-100";

    return (
        <div
            className={`rounded-md px-3 py-2 shadow font-medium ${backgroundClass} flex flex-col`}
        >
            <div className="flex space-x-4 items-center justify-between px-4 py-3">
                {props.children}
                <a
                    href={props.link}
                    className=" text-gray-700 text-sm hover:text-blue-600 duration-200 ease-in-out"
                >
                    View all
                </a>
            </div>
            <div className="px-4 py-3 rounded-b-md">
                <div className="">
                    <span className="font-normal text-2xl text-gray-600">
                        {props.statics}
                    </span>
                    <h3 className="font-lg text-gray-700">{props.title}</h3>
                </div>
            </div>
        </div>
    );
}

CardData.propTypes = {
    title: PropTypes.string.isRequired,
    statics: PropTypes.string.isRequired,
    background: PropTypes.string,
    link: PropTypes.string,
};

export default CardData;
