import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Platform from "../Pages/Dashboard/Platform";
import SignIn from "../Pages/SignIn";
import CreateAccount from "../Pages/CreateAccount";
import UserDashboard from "../Pages/Dashboard/UserDashboard/UserDashboard";
import Setting from "../Pages/Dashboard/UserDashboard/Setting";
import Withdrawal from "../Pages/Dashboard/UserDashboard/Withdrawal";
import Transactions from "../Pages/Dashboard/UserDashboard/Transactions";
import Referral from "../Pages/Dashboard/UserDashboard/Referral";
import PaymentMethod from "../Pages/Dashboard/UserDashboard/PaymentMethod";
import Help from "../Pages/Dashboard/UserDashboard/Help";
import Events from "../Pages/Dashboard/UserDashboard/Events";
import Deposit from "../Pages/Dashboard/UserDashboard/Deposit";
import BotPlan from "../Pages/Dashboard/UserDashboard/BotPlan";
import UserProtected from "./UserProtected";
import AdminDashboard from "../Pages/Dashboard/AdminDashboard/AdminDashboard";
import AdminProtected from "./AdminProtected";
import UserDetail from "../Pages/Dashboard/AdminDashboard/UserDetail";
import EventsAdd from "../Pages/Dashboard/AdminDashboard/EventsAdd";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/create-account" element={<CreateAccount />} />

            {/* UserProtected routes wrapper for users */}
            <Route element={<UserProtected />}>
                <Route path="/platform" element={<Platform />} />
                <Route path="/user-dashboard" element={<UserDashboard />} />
                <Route path="/setting" element={<Setting />} />
                <Route path="/withdrawal" element={<Withdrawal />} />
                <Route path="/transactions" element={<Transactions />} />
                <Route path="/referral" element={<Referral />} />
                <Route path="/payment-method" element={<PaymentMethod />} />
                <Route path="/help" element={<Help />} />
                <Route path="/events" element={<Events />} />
                <Route path="/deposit" element={<Deposit />} />
                <Route path="/bot-plan" element={<BotPlan />} />
            </Route>

            {/* Protected routes wrapper for admin */}
            <Route element={<AdminProtected />}>
                <Route path="/admin-dashboard" element={<AdminDashboard />} />
                <Route path="/user-detail" element={<UserDetail />} />
                <Route path="/event-add" element={<EventsAdd />} />
            </Route>

        </Routes>
    );
};

export default Router;
