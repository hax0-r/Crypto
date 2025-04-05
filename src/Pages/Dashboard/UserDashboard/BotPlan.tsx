import UserDashboardLeftBar from '../../../Components/Dashboard/UserDashboard/UserDashboardLeftBar';
import { FaCheck } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { Button } from '../../../Components/ui/button';

// Dummy trading bot plans
const botPlans = [
    {
        name: "Basic Bot",
        price: "$29/month",
        features: {
            "Automated Trading": true,
            "Market Analysis": false,
            "AI Predictions": false,
        }
    },
    {
        name: "Advanced Bot",
        price: "$59/month",
        features: {
            "Automated Trading": true,
            "Market Analysis": true,
            "AI Predictions": false,
        }
    },
    {
        name: "Pro Bot",
        price: "$99/month",
        features: {
            "Automated Trading": true,
            "Market Analysis": true,
            "AI Predictions": true,
        }
    }
];

const BotPlan = () => {
    return (
        <UserDashboardLeftBar breadcrumb="Trading Bots">
            <div className="flex flex-col">
                <div className="overflow-x-auto pb-3">
                    <div className="min-w-full inline-block align-middle">
                        <div className="overflow-hidden rounded-lg">
                            <table className="min-w-full rounded-xl">
                                <thead>
                                    <tr className="bg-[#ffffff0e] text-white">
                                        <th className="p-5 text-left leading-6 capitalize rounded-tl-xl">
                                            Plan Name
                                        </th>
                                        <th className="p-5 leading-6 capitalize text-center">
                                            Simple Trade Boost
                                        </th>
                                        <th className="p-5 leading-6 capitalize text-center">
                                            Smarter Trading Flow
                                        </th>
                                        <th className="p-5 leading-6 capitalize text-center">
                                            Consistent Trade Success
                                        </th>
                                        <th className="p-5 leading-6 capitalize text-center rounded-tr-xl">
                                            Price
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-[#ffffff48]">
                                    {botPlans.map((bot, index) => (
                                        <tr key={index} className=" transition-all duration-500 hover:bg-[#ffffff0a]">
                                            <td className="px-5 py-6 text-sm font-medium text-[#ffffffd0]">
                                                {bot.name}
                                            </td>
                                            {Object.values(bot.features).map((hasFeature, featureIndex) => (
                                                <td key={featureIndex} className="px-5 py-6 text-sm font-medium">
                                                    <div className="flex justify-center">
                                                        {hasFeature ? (
                                                            <FaCheck className='text-xl text-green-600' />
                                                        ) : (
                                                            <IoClose className='text-2xl text-red-700' />
                                                        )}
                                                    </div>
                                                </td>
                                            ))}
                                            <td className="px-5 py-6 font-medium text-center text-[#ffffffd0]">
                                                {bot.price}
                                            </td>
                                        </tr>
                                    ))}
                                    {/* Buy Now Row */}
                                    <tr>
                                        <td />
                                        {botPlans.map((bot, index) => (
                                            <td key={index} className="p-5 text-sm font-medium text-center">
                                                <Button className='rounded-full md:px-8'>
                                                    Buy {bot.name}
                                                </Button>
                                            </td>
                                        ))}
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                {/* Marketing Message */}
                <div className="text-center mt-6">
                    <h2 className="md:text-xl text-lg md:tracking-wide text-[#ffffffd0]">Maximize Your Profits with AI Trading Bots</h2>
                    <p className="text-[#ffffff8a] mt-2">
                        Get access to cutting-edge trading bots that automate your trades, analyze market trends, and provide AI-driven insights.
                        Choose the right plan and start optimizing your investments today!
                    </p>
                </div>
            </div>
        </UserDashboardLeftBar>
    );
};

export default BotPlan;
