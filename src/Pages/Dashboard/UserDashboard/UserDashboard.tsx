import UserDashboardLeftBar from "../../../Components/Dashboard/UserDashboard/UserDashboardLeftBar";
import { GrMoney } from "react-icons/gr";
import { RiStackshareLine } from "react-icons/ri";
import { BsCurrencyDollar } from "react-icons/bs";
import Chart from "../../../Components/Dashboard/UserDashboard/Dashboard/Chart";
import DashboardCard from "../../../Components/Dashboard/DashboardCard";

const UserDashboard = () => {
    return (
        <div>
            <UserDashboardLeftBar breadcrumb="Dashboard">
                <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-2">
                    <DashboardCard title="Account Balance" amount="$ 1,000" description="Funds available for trading." icon={BsCurrencyDollar} />
                    <DashboardCard title="Total Profit" amount="$ 5,000" description="Earnings eligible for withdrawal." icon={GrMoney} />
                    <DashboardCard title="Referred Friends" amount="3" description="Friends you've successfully invited." icon={RiStackshareLine} />
                </div>
                <div className="mt-10">
                    <Chart />
                </div>
            </UserDashboardLeftBar>
        </div>
    );
};

export default UserDashboard;
