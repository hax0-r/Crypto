import { Link } from "react-router"
import logo from '../../../assets/logo.png'
import { PiHandWithdraw } from "react-icons/pi";
import { IoReceiptOutline } from "react-icons/io5";
import { VscReferences } from "react-icons/vsc";
import { MdOutlinePayment } from "react-icons/md";
import { AiOutlineBank } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { GoGift } from "react-icons/go";
import { RxDashboard } from "react-icons/rx";
import { RiRobot3Line } from "react-icons/ri";
import { BiHelpCircle } from "react-icons/bi";
import { Avatar, AvatarFallback, AvatarImage, } from "../../ui/avatar"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator, } from "../../ui/breadcrumb"

interface UserDashboardWrapperProps {
    children: React.ReactNode,
    breadcrumb?: string;
}

const UserDashboardLeftBar: React.FC<UserDashboardWrapperProps> = ({ children, ...props }) => {

    const location = window.location.pathname

    return (
        <div className="bg-[#1b102e] flex w-full h-screen">
            <div className="w-0 overflow-hidden md:p-3 bg-[#171022] h-screen pt-8 md:w-80">
                <Link to={"/platform"} className="flex text-white items-center gap-3">
                    <img src={logo} alt="logo" className="h-10 rounded-lg" />
                    <h2 className="text-lg md:block hidden font-medium leading-tight">Wealth <br /> Way Trade</h2>
                </Link>
                <div className="mt-5 border-t border-[#492c807c] pt-5 h-[calc(100vh-7rem)] flex flex-col justify-between">
                    <div className="">
                        <Link to={"/user-dashboard"} className={`flex ${location == "/user-dashboard" && "bg-[#6d45b9] text-white"} p-3 rounded-lg text-[#ffffffb6] hover:text-white transition-all duration-500 hover:bg-[#6d45b9] items-center gap-2`}>
                            <RxDashboard className="text-xl" />
                            <p>Dashboard</p>
                        </Link>
                        <Link to={"/deposit"} className={`flex p-3 mt-1 ${location == "/deposit" && "bg-[#6d45b9] text-white"} rounded-lg text-[#ffffffb6] hover:text-white transition-all duration-500 hover:bg-[#6d45b9]  items-center gap-2`}>
                            <AiOutlineBank className="text-xl" />
                            <p>Deposit</p>
                        </Link>
                        <Link to={"/withdrawal"} className={`flex p-3 mt-1 ${location == "/withdrawal" && "bg-[#6d45b9] text-white"} rounded-lg text-[#ffffffb6] hover:text-white transition-all duration-500 hover:bg-[#6d45b9]  items-center gap-2`}>
                            <PiHandWithdraw className="text-xl" />
                            <p>Withdrawal</p>
                        </Link>
                        <Link to={"/payment-method"} className={`flex p-3 mt-1 ${location == "/payment-method" && "bg-[#6d45b9] text-white"} rounded-lg text-[#ffffffb6] hover:text-white transition-all duration-500 hover:bg-[#6d45b9]  items-center gap-2`}>
                            <MdOutlinePayment className="text-xl" />
                            <p>Payment Method</p>
                        </Link>
                        <Link to={"/bot-plan"} className={`flex p-3 mt-1 ${location == "/bot-plan" && "bg-[#6d45b9] text-white"} rounded-lg text-[#ffffffb6] hover:text-white transition-all duration-500 hover:bg-[#6d45b9]  items-center gap-2`}>
                            <RiRobot3Line className="text-xl" />
                            <p>Bot Plan</p>
                        </Link>
                        <Link to={"/referral"} className={`flex p-3 mt-1 ${location == "/referral" && "bg-[#6d45b9] text-white"} rounded-lg text-[#ffffffb6] hover:text-white transition-all duration-500 hover:bg-[#6d45b9]  items-center gap-2`}>
                            <VscReferences className="text-xl" />
                            <p>Referral</p>
                        </Link>
                        <Link to={"/transactions"} className={`flex p-3 mt-1 ${location == "/transactions" && "bg-[#6d45b9] text-white"} rounded-lg text-[#ffffffb6] hover:text-white transition-all duration-500 hover:bg-[#6d45b9]  items-center gap-2`}>
                            <IoReceiptOutline className="text-xl" />
                            <p>Transactions</p>
                        </Link>
                        <Link to={"/events"} className={`flex p-3 mt-1 ${location == "/events" && "bg-[#6d45b9] text-white"} rounded-lg text-[#ffffffb6] hover:text-white transition-all duration-500 hover:bg-[#6d45b9]  items-center gap-2`}>
                            <GoGift className="text-xl" />
                            <p>Events</p>
                        </Link>
                    </div>
                    <div className="">
                        <Link to={"/help"} className={`flex p-3 mt-1 ${location == "/help" && "bg-[#6d45b9] text-white"} rounded-lg text-[#ffffff81] hover:text-white transition-all duration-500 hover:bg-[#6d45b9]  items-center gap-2`}>
                            <BiHelpCircle className="text-xl" />
                            <p>Help</p>
                        </Link>
                        <Link to={"/setting"} className={`flex p-3 mt-1 ${location == "/setting" && "bg-[#6d45b9] text-white"} rounded-lg text-[#ffffff81] hover:text-white transition-all duration-500 hover:bg-[#6d45b9]  items-center gap-2`}>
                            <IoSettingsOutline className="text-xl" />
                            <p>Settings</p>
                        </Link>
                    </div>
                </div>
            </div>
            <div className=" p-6 w-full ">
                <div className="bg-[#171022] lg:flex hidden text-white px-5 py-2 rounded-lg items-center justify-between border border-[#5c37a1]">
                    <div className="flex items-center gap-3">
                        <h2 className="font-medium">Crypto Trading</h2>
                        <p className="opacity-20">|</p>
                        <h2 >Wealth Way Trade</h2>
                    </div>
                    <div className="flex items-center gap-3">
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col">
                            <h2 className="font-medium">Name</h2>
                            <h2 className="text-sm opacity-60">name@gmail.com</h2>
                        </div>
                    </div>
                </div>
                <Breadcrumb className="mt-4 lg:block hidden">
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink className="text-white opacity-80" href="/platform">Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        {/* <BreadcrumbEllipsis className="h-4 w-4" /> */}
                        <BreadcrumbItem>
                            <BreadcrumbPage className="text-white opacity-50">{props.breadcrumb}</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                <div className="md:py-5 md:h-[calc(100vh-8rem)] h-[calc(100vh-1.5rem)] text-white overflow-auto">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default UserDashboardLeftBar