import { TbBrandMailgun } from "react-icons/tb";
import { RiFocus2Fill } from "react-icons/ri";
import { PiStrategyDuotone } from "react-icons/pi";
import { VscGraphLine } from "react-icons/vsc";
import { FaRegThumbsUp } from "react-icons/fa6";
import { GrStatusGood } from "react-icons/gr";

const Strategies = [
    {
        icon: RiFocus2Fill,
        header: "Customer Focus",
        text: "Focusing on creating companies that prioritize the needs and experiences of their customers.",
        bgColor: "bg-sky-600",
    },
    {
        icon: FaRegThumbsUp,
        header: "Branding",
        text: "Strengthening and building your brand to enhance its recognition and reputation.",
        bgColor: "bg-orange-600",
    },
    {
        icon: VscGraphLine,
        header: "Investments",
        text: "Making strategic investments that have a significant impact on business growth.",
        bgColor: "bg-cyan-600",
    },
    {
        icon: GrStatusGood,
        header: "Loyalty",
        text: "Increasing customer penetration and fostering loyalty through effective strategies.",
        bgColor: "bg-blue-500",
    },
    {
        icon: PiStrategyDuotone,
        header: "Strategy",
        text: "Winning market shares by understanding the optimal areas to compete in.",
        bgColor: "bg-amber-400",
    },
];

const Strategy = ({ strategies = Strategies }) => {
    return (
        <div>
            <div className="text-gray-700 text-center pt-7 pb-10">
                <h1 className="text-xl text-cyan-700 py-2">
                    Strategy For Business Growth And Market Leadership
                </h1>
                <p>
                    Creating customer-centric companies is our priority. We
                    focus on strengthening and building your brand, making
                    impactful investments, increasing customer penetration and
                    loyalty, and winning market shares by understanding where to
                    play.
                </p>
            </div>
            <div className="flex flex-wrap -mx-2">
                {strategies.map((strategy, index) => (
                    <div
                        key={index}
                        className="w-full sm:w-1/2 lg:w-1/5 px-2 mb-4 flex"
                    >
                        <div
                            className={`flex-1 border ${strategy.bgColor} text-white text-center px-4 py-5 rounded-lg flex flex-col`}
                        >
                            <strategy.icon className="text-6xl mx-auto mb-4 flex-shrink-0" />
                            <h6 className="text-md py-3 flex-grow">
                                {strategy.header}
                            </h6>
                            <p className="text-xs">{strategy.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Strategy;
