import { useState, useEffect } from "react";
import UserDashboardLeftBar from "../../../Components/Dashboard/UserDashboard/UserDashboardLeftBar";
import { GrMoney } from "react-icons/gr";
import { RiStackshareLine } from "react-icons/ri";
import { BsCurrencyDollar } from "react-icons/bs";
import Chart from "../../../Components/Dashboard/UserDashboard/Dashboard/Chart";
import DashboardCard from "../../../Components/Dashboard/DashboardCard";
import authService from "../../../services/authService";
import referralService from "../../../services/referralService";
import { toast } from "react-toastify";

const UserDashboard = () => {
  const [balance, setBalance] = useState<number>(0);
  const [referrals, setReferrals] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      setLoading(true);

      // Fetch user profile to get balance
      const profileResponse = await authService.getProfile();
      if (profileResponse.success && profileResponse.data) {
        setBalance(profileResponse.data.balance);
      }

      // Fetch user referrals to get count
      const referralsResponse = await referralService.getReferrals();
      if (referralsResponse.success && referralsResponse.data) {
        setReferrals(referralsResponse.data.referralCount);
      }
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
      toast.error("Failed to load dashboard data");
    } finally {
      setLoading(false);
    }
  };

  // Format currency
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "PKR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div>
      <UserDashboardLeftBar breadcrumb="Dashboard">
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-2">
          <DashboardCard
            title="Account Balance"
            amount={loading ? "Loading..." : formatCurrency(balance)}
            description="Funds available for trading."
            icon={BsCurrencyDollar}
          />
          <DashboardCard
            title="Total Profit"
            amount="$ 5,000"
            description="Earnings eligible for withdrawal."
            icon={GrMoney}
          />
          <DashboardCard
            title="Referred Friends"
            amount={loading ? "..." : referrals.toString()}
            description="Friends you've successfully invited."
            icon={RiStackshareLine}
          />
        </div>
        <div className="mt-10">
          <Chart />
        </div>
      </UserDashboardLeftBar>
    </div>
  );
};

export default UserDashboard;
