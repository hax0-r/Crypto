import UserDashboardLeftBar from "../../../Components/Dashboard/UserDashboard/UserDashboardLeftBar";
import { GrMoney } from "react-icons/gr";
import { RiStackshareLine } from "react-icons/ri";
import { BsCurrencyDollar } from "react-icons/bs";

interface DashboardCardProps {
    title: string;
    amount: string;
    description: string;
    icon: React.ElementType;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ title, amount, description, icon: Icon }) => {
    return (
        <div className="w-full rounded-lg p-5 bg-[#6d45b9]">
            <div className="flex items-start justify-between">
                <div>
                    <h2 className="opacity-80 text-sm">{title}</h2>
                    <h2 className="text-3xl font-bold mt-3">{amount}</h2>
                    <p className="text-sm opacity-50 mt-1">{description}</p>
                </div>
                <Icon className="text-2xl opacity-90" />
            </div>
        </div>
    );
};

const UserDashboard = () => {
    return (
        <div>
            <UserDashboardLeftBar breadcrumb="Dashboard">
                <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-2">
                    <DashboardCard title="Account Balance" amount="$ 1,000" description="Funds available for trading." icon={BsCurrencyDollar} />
                    <DashboardCard title="Total Profit" amount="$ 5,000" description="Earnings eligible for withdrawal." icon={GrMoney} />
                    <DashboardCard title="Referred Friends" amount="3" description="Friends you've successfully invited." icon={RiStackshareLine} />
                </div>
            </UserDashboardLeftBar>
        </div>
    );
};

export default UserDashboard;
