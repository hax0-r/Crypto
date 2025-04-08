import { IoClose } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";

const transactionsData = [
    {
        userId: "U-2023101",
        name: "Jhon",
        date: "12 Mar 2024",
        email: "jhon@gmail.com",
        trade: "no"
    },
    {
        userId: "U-2023101",
        name: "Ali",
        date: "05 Mar 2024",
        email: "ali@gmail.com",
        trade: "yes"
    },
    {
        userId: "U-2023101",
        name: "Hamza",
        date: "28 Feb 2024",
        email: "jhon@gmail.com",
        trade: "yes"
    },
    {
        userId: "U-2023101",
        name: "Jhon",
        date: "20 Feb 2024",
        email: "hamza@gmail.com",
        trade: "no"
    },
    {
        userId: "U-2023101",
        name: "Jhon",
        date: "15 Feb 2024",
        email: "jhon@gmail.com",
        trade: "no"
    },
];
const ReferralTable = () => {
    return (
        <div className="overflow-auto py-4 max-h-[55vh] custom-scrollbar">
            <div className="block">
                <div className="overflow-x-auto w-full border rounded-lg border-[#ffffff80]">
                    <table className="w-full rounded-xl">
                        <thead>
                            <tr className="bg-[#372359] text-nowrap">
                                {["User ID", "Name", "Date", "E-Mail", "Trade"].map((heading, index) => (
                                    <th key={index} className="p-5 text-left font-medium text-white capitalize">
                                        {heading}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="divide-y text-nowrap divide-[#ffffff5d]">
                            {transactionsData.map((history, index) => (
                                <tr key={index} className=" transition-all duration-500 hover:bg-[#ffffff10]">
                                    <td className="p-5 text-sm font-medium text-[#fff] opacity-80">{history.userId}</td>
                                    <td className="p-5 text-sm font-medium text-[#fff] opacity-80">{history.name}</td>
                                    <td className="p-5 text-sm font-medium text-[#fff] opacity-80">{history.date}</td>
                                    <td className="p-5 text-sm font-medium text-[#fff] opacity-80">{history.email}</td>
                                    <td className="p-5 text-sm font-medium text-[#fff] opacity-80">{history.trade == "no" ? <IoClose className="text-2xl text-red-600" /> : <FaCheck className="text-xl text-green-600" />
                                    }</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ReferralTable