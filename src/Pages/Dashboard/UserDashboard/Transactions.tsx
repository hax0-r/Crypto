import UserDashboardLeftBar from "../../../Components/Dashboard/UserDashboard/UserDashboardLeftBar";
import { GoDotFill } from "react-icons/go";

const transactionsData = [
    {
        userId: "U-2023101",
        bankName: "EasyPasia",
        date: "12 Mar 2024",
        status: "Active",
        transactionType: "Deposit",
        statusColor: "emerald",
        bgColor: "bg-emerald-50",
        textColor: "text-emerald-600"
    },
    {
        userId: "U-2023101",
        bankName: "Jazz cash",
        date: "05 Mar 2024",
        status: "Pending",
        transactionType: "Withdraw",
        statusColor: "yellow",
        bgColor: "bg-yellow-50",
        textColor: "text-yellow-600"
    },
    {
        userId: "U-2023101",
        bankName: "Payapl",
        date: "28 Feb 2024",
        status: "Failed",
        transactionType: "Deposit",
        statusColor: "red",
        bgColor: "bg-red-50",
        textColor: "text-red-600"
    },
    {
        userId: "U-2023101",
        bankName: "EasyPasia",
        date: "20 Feb 2024",
        status: "Completed",
        transactionType: "Withdraw",
        statusColor: "blue",
        bgColor: "bg-blue-50",
        textColor: "text-blue-600"
    },
    {
        userId: "U-2023101",
        bankName: "EasyPasia",
        date: "15 Feb 2024",
        status: "Active",
        transactionType: "Deposit",
        statusColor: "emerald",
        bgColor: "bg-emerald-50",
        textColor: "text-emerald-600"
    },
];

const Transactions = () => {
    return (
        <UserDashboardLeftBar breadcrumb="Transactions">
            <div className="flex flex-col">
                <div className="overflow-x-auto pb-4">
                    <div className="block">
                        <div className="overflow-x-auto w-full border rounded-lg border-[#ffffff80]">
                            <table className="w-full rounded-xl">
                                <thead>
                                    <tr className="bg-[#372359] text-nowrap">
                                        {["User ID", "Bank type", "Date", "Status", "Transaction Type"].map((heading, index) => (
                                            <th key={index} className="p-5 text-left font-medium text-white capitalize">
                                                {heading}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody className="divide-y text-nowrap divide-[#ffffff5d]">
                                    {transactionsData.map((transaction, index) => (
                                        <tr key={index} className=" transition-all duration-500 hover:bg-[#ffffff10]">
                                            <td className="p-5 text-sm font-medium text-[#fff] opacity-80">{transaction.userId}</td>
                                            <td className="p-5 text-sm font-medium text-[#fff] opacity-80">{transaction.bankName}</td>
                                            <td className="p-5 text-sm font-medium text-[#fff] opacity-80">{transaction.date}</td>
                                            <td className="p-5 text-sm font-medium  opacity-90">
                                                <div className={`py-1.5 px-1.5 ${transaction.textColor} ${transaction.bgColor} rounded-full flex justify-center w-24 items-center gap-1`}>
                                                    <GoDotFill />
                                                    <span className="font-medium text-xs">{transaction.status}</span>
                                                </div>
                                            </td>
                                            <td className="p-5 text-sm font-medium text-[#fff] opacity-80">{transaction.transactionType}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </UserDashboardLeftBar>
    );
};

export default Transactions;
