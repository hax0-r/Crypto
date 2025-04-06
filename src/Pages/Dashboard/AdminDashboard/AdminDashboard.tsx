import { HiOutlineUsers } from "react-icons/hi2";
import { AiOutlineDollar } from "react-icons/ai";
import { GoDependabot } from "react-icons/go";
import DashboardCard from "../../../Components/Dashboard/DashboardCard";
import { GoDotFill } from "react-icons/go";
import { IoIosSearch } from "react-icons/io";
// import { format } from "date-fns"
// import { CalendarIcon } from "lucide-react"
import { HiOutlineTrash } from "react-icons/hi2";
// import { Calendar } from "../../../Components/ui/calendar";
// import { Popover, PopoverContent, PopoverTrigger } from "../../../Components/ui/popover";
import { Button } from "../../../Components/ui/button";
// import { cn } from "../../../lib/utils";
import { useState } from "react";
import { BiSolidUserDetail } from "react-icons/bi";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../../../Components/ui/select";
import { Link } from "react-router";

const userData = [
    {
        userId: "U-2023101",
        date: "12 Mar 2024",
        status: "Active",
        user: {
            image: "https://pagedone.io/asset/uploads/1697536435.png",
            fullName: "Jhon",
            email: "jhon@gmail.com"
        }
    },
    {
        userId: "U-2023101",
        date: "05 Mar 2024",
        status: "Inactive",
        user: {
            image: "https://pagedone.io/asset/uploads/1697536435.png",
            fullName: "Bella",
            email: "bella@gmail.com"
        }
    },
    {
        userId: "U-2023101",
        date: "12 Mar 2024",
        status: "Active",
        user: {
            image: "https://pagedone.io/asset/uploads/1697536435.png",
            fullName: "Jhon",
            email: "jhon@gmail.com"
        }
    },
    {
        userId: "U-2023101",
        date: "05 Mar 2024",
        status: "Inactive",
        user: {
            image: "https://pagedone.io/asset/uploads/1697536435.png",
            fullName: "Bella",
            email: "bella@gmail.com"
        }
    },
    {
        userId: "U-2023101",
        date: "12 Mar 2024",
        status: "Active",
        user: {
            image: "https://pagedone.io/asset/uploads/1697536435.png",
            fullName: "Jhon",
            email: "jhon@gmail.com"
        }
    },
    {
        userId: "U-2023101",
        date: "05 Mar 2024",
        status: "Inactive",
        user: {
            image: "https://pagedone.io/asset/uploads/1697536435.png",
            fullName: "Bella",
            email: "bella@gmail.com"
        }
    },
    {
        userId: "U-2023101",
        date: "12 Mar 2024",
        status: "Active",
        user: {
            image: "https://pagedone.io/asset/uploads/1697536435.png",
            fullName: "Jhon",
            email: "jhon@gmail.com"
        }
    },
    {
        userId: "U-2023101",
        date: "05 Mar 2024",
        status: "Inactive",
        user: {
            image: "https://pagedone.io/asset/uploads/1697536435.png",
            fullName: "Bella",
            email: "bella@gmail.com"
        }
    },
];

const AdminDashboard = () => {
    // const [date, setDate] = useState<Date>()
    const [searchItem, setSearchItem] = useState('')
    const [filterItem, setFilterItem] = useState('')

    // const isSameDate = (date1: Date, date2: Date) => {
    //     return (
    //         date1.getDate() === date2.getDate() &&
    //         date1.getMonth() === date2.getMonth() &&
    //         date1.getFullYear() === date2.getFullYear()
    //     );
    // };

    const handleSearchAndFilter = userData.filter((user) => {
        const matchesSearch = searchItem
            ? (
                user.user.fullName.toLowerCase().includes(searchItem.toLowerCase()) ||
                user.user.email.toLowerCase().includes(searchItem.toLowerCase()) ||
                user.userId.toLowerCase().includes(searchItem.toLowerCase())
            )
            : true;

        const matchesFilter = filterItem === "all" || filterItem === ""
            ? true
            : user.status.toLowerCase() === filterItem.toLowerCase();

        // const matchesDate = date
        //     ? isSameDate(new Date(user.date), date)
        //     : true;

        return matchesSearch && matchesFilter ;
    });






    return (
        <>
            <div className="bg-[#171022] w-full min-h-screen p-5">

                <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-2">
                    <DashboardCard title="Users" amount="26k" description="Total Users" icon={HiOutlineUsers} />
                    <DashboardCard title="Amount" amount="$ 97,000" description="Total Amount" icon={AiOutlineDollar} />
                    <DashboardCard title="Active Plans" amount="847" description="Subscribed Users" icon={GoDependabot} />
                </div>

                <div className="mt-10 mb-3 flex items-center justify-between ">
                    <div className="border rounded-lg flex items-center border-[#ffffff80] pr-2 justify-center">
                        <input value={searchItem}
                            onChange={(e) => setSearchItem(e.target.value)} type="text" placeholder="Search ID, Name or Gmail " className="w-full placeholder:text-xs text-white bg-transparent p-2" />
                        <IoIosSearch className="text-[#ffffffc4] text-2xl" />
                    </div>
                    <div className="md:flex hidden items-center gap-2">
                        {/* <Popover>
                            <PopoverTrigger asChild>
                                <Button
                                    variant={"outline"}
                                    className={cn(
                                        "w-[280px] justify-start text-left font-normal",
                                        !date && "text-muted-foreground"
                                    )}
                                >
                                    <CalendarIcon />
                                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                                <Calendar
                                    mode="single"
                                    selected={date}
                                    onSelect={setDate}
                                    initialFocus
                                />
                            </PopoverContent>
                        </Popover> */}
                        <Select onValueChange={(e) => setFilterItem(e)} defaultValue="all">
                            <SelectTrigger className="w-[180px] text-white">
                                <SelectValue placeholder="Select Status" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Bot</SelectLabel>
                                    <SelectItem value="all">All</SelectItem>
                                    <SelectItem value="Active">Active Bot</SelectItem>
                                    <SelectItem value="Inactive">Inactive Bot</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                <div className="overflow-x-auto pb-4 max-h-[65vh] custom-scrollbar">
                    <div className="block">
                        <div className="overflow-x-auto w-full border rounded-lg border-[#ffffff80]">
                            <table className="w-full rounded-xl">
                                <thead>
                                    <tr className="bg-[#372359] text-nowrap">
                                        {["User ID", "Full Name & Email", "Date", "Bot Status", "Actions"].map((heading, index) => (
                                            <th key={index} className="p-5 text-left font-medium text-white capitalize">
                                                {heading}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody className="divide-y text-nowrap divide-[#ffffff5d]">
                                    {handleSearchAndFilter.map((user, index) => (
                                        <tr key={index} className=" transition-all duration-500 hover:bg-[#ffffff10]">
                                            <td className="p-5 text-sm font-medium text-[#fff] opacity-80">{user.userId}</td>
                                            <td className=" px-5 py-3">
                                                <div className="w-48 flex items-center gap-3">
                                                    <img src={user.user.image} alt="Floyd image" />
                                                    <div className="data">
                                                        <p className="font-normal text-sm text-white">{user.user.fullName}</p>
                                                        <p className="font-normal text-xs leading-5 text-gray-400"> {user.user.email}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="p-5 text-sm font-medium text-[#fff] opacity-80">{user.date}</td>
                                            <td className="p-5 text-sm font-medium  opacity-90">
                                                <div className={`py-1.5 px-1.5 ${user.status == "Inactive" ? "text-yellow-600 bg-yellow-50" : "bg-emerald-50 text-emerald-600"} rounded-full flex justify-center w-24 items-center gap-1`}>
                                                    <GoDotFill />
                                                    <span className="font-medium text-xs">{user.status}</span>
                                                </div>
                                            </td>
                                            <td className="p-5 flex items-center gap-2 text-sm font-medium text-[#fff] opacity-80">
                                                <Link to={"/user-detail"}>
                                                    <Button>
                                                        <BiSolidUserDetail />Details
                                                    </Button>
                                                </Link>
                                                <div className="w-8 h-8 cursor-pointer transition-all duration-500 hover:bg-red-600 hover:text-white  text-red-600 bg-white flex items-center justify-center rounded-full">
                                                    <HiOutlineTrash className="text-lg " />
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default AdminDashboard