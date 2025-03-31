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
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { useLocation } from "react-router-dom"; // Fix import

interface UserDashboardWrapperProps {
    children: React.ReactNode,
    breadcrumb?: string;
}

const UserDashboardLeftBar: React.FC<UserDashboardWrapperProps> = ({ children, ...props }) => {
    const location = useLocation();

    const [isOpen, setIsOpen] = useState<Boolean>(true)
    useEffect(() => {
        setIsOpen(false);
    }, [location.pathname]);

    useEffect(() => {
        const handleResize = () => {
            setIsOpen(window.innerWidth >= 1024 ? true : false);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="bg-[#171022] flex w-full md:h-screen ">
            <div className={` ${isOpen ? "w-60 opacity-100" : "w-0 opacity-0"} w-0 transition-all duration-500 overflow-hidden bg-[#171022] left-0 top-0 lg:static fixed z-20 h-screen md:border-r border-[#ffffff11] lg:pt-8 pt-4 md:w-80`}>
                <div className="flex text-2xl lg:hidden px-3 items-end justify-end text-white">
                    <IoClose onClick={() => setIsOpen(false)} />
                </div>
                <Link to={"/platform"} className="flex px-3 text-white items-center gap-3">
                    <img src={logo} alt="logo" className="md:h-10 h-9 rounded-lg" />
                    <h2 className="md:text-lg font-medium leading-tight">Wealth <br /> Way Trade</h2>
                </Link>
                <div className="mt-5 px-3 border-t border-[#492c807c] pt-5 h-[calc(100vh-7rem)] flex flex-col justify-between">
                    <div className="">
                        <Link onClick={() => setIsOpen(false)} to={"/user-dashboard"} className={`flex ${location.pathname == "/user-dashboard" && "bg-[#6e45b95d] text-white"} p-3 rounded-lg text-[#ffffffb6] hover:text-white transition-all duration-500 hover:bg-[#6e45b95d] items-center gap-2`}>
                            <RxDashboard className="text-xl" />
                            <p>Dashboard</p>
                        </Link>
                        <Link onClick={() => setIsOpen(false)} to={"/deposit"} className={`flex p-3 mt-1 ${location.pathname == "/deposit" && "bg-[#6e45b95d] text-white"} rounded-lg text-[#ffffffb6] hover:text-white transition-all duration-500 hover:bg-[#6e45b95d]  items-center gap-2`}>
                            <AiOutlineBank className="text-xl" />
                            <p>Deposit</p>
                        </Link>
                        <Link onClick={() => setIsOpen(false)} to={"/withdrawal"} className={`flex p-3 mt-1 ${location.pathname == "/withdrawal" && "bg-[#6e45b95d] text-white"} rounded-lg text-[#ffffffb6] hover:text-white transition-all duration-500 hover:bg-[#6e45b95d]  items-center gap-2`}>
                            <PiHandWithdraw className="text-xl" />
                            <p>Withdrawal</p>
                        </Link>
                        <Link onClick={() => setIsOpen(false)} to={"/payment-method"} className={`flex p-3 mt-1 ${location.pathname == "/payment-method" && "bg-[#6e45b95d] text-white"} rounded-lg text-[#ffffffb6] hover:text-white transition-all duration-500 hover:bg-[#6e45b95d]  items-center gap-2`}>
                            <MdOutlinePayment className="text-xl" />
                            <p className="text-nowrap">Payment Method</p>
                        </Link>
                        <Link onClick={() => setIsOpen(false)} to={"/bot-plan"} className={`flex p-3 mt-1 ${location.pathname == "/bot-plan" && "bg-[#6e45b95d] text-white"} rounded-lg text-[#ffffffb6] hover:text-white transition-all duration-500 hover:bg-[#6e45b95d]  items-center gap-2`}>
                            <RiRobot3Line className="text-xl" />
                            <p>Bot Plan</p>
                        </Link>
                        <Link onClick={() => setIsOpen(false)} to={"/referral"} className={`flex p-3 mt-1 ${location.pathname == "/referral" && "bg-[#6e45b95d] text-white"} rounded-lg text-[#ffffffb6] hover:text-white transition-all duration-500 hover:bg-[#6e45b95d]  items-center gap-2`}>
                            <VscReferences className="text-xl" />
                            <p>Referral</p>
                        </Link>
                        <Link onClick={() => setIsOpen(false)} to={"/transactions"} className={`flex p-3 mt-1 ${location.pathname == "/transactions" && "bg-[#6e45b95d] text-white"} rounded-lg text-[#ffffffb6] hover:text-white transition-all duration-500 hover:bg-[#6e45b95d]  items-center gap-2`}>
                            <IoReceiptOutline className="text-xl" />
                            <p>Transactions</p>
                        </Link>
                        <Link onClick={() => setIsOpen(false)} to={"/events"} className={`flex p-3 mt-1 ${location.pathname == "/events" && "bg-[#6e45b95d] text-white"} rounded-lg text-[#ffffffb6] hover:text-white transition-all duration-500 hover:bg-[#6e45b95d]  items-center gap-2`}>
                            <GoGift className="text-xl" />
                            <p>Events</p>
                        </Link>
                    </div>
                    <div className="">
                        <Link to={"/help"} className={`flex p-3 mt-1 ${location.pathname == "/help" && "bg-[#6e45b95d] text-white"} rounded-lg text-[#ffffff81] hover:text-white transition-all duration-500 hover:bg-[#6e45b95d]  items-center gap-2`}>
                            <BiHelpCircle className="text-xl" />
                            <p>Help</p>
                        </Link>
                        <Link to={"/setting"} className={`flex p-3 mt-1 ${location.pathname == "/setting" && "bg-[#6e45b95d] text-white"} rounded-lg text-[#ffffff81] hover:text-white transition-all duration-500 hover:bg-[#6e45b95d]  items-center gap-2`}>
                            <IoSettingsOutline className="text-xl" />
                            <p>Settings</p>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="bg-[#171022] lg:p-6 p-4 w-full ">
                <div className="bg-[#171022] flex text-white md:px-5 px-3 py-2 rounded-lg items-center justify-between border border-[#5c37a1]">
                    <div className="lg:flex hidden items-center gap-3">
                        <h2 className="font-medium">Crypto Trading</h2>
                        <p className="opacity-20">|</p>
                        <h2 >Wealth Way Trade</h2>
                    </div>
                    <HiMiniBars3CenterLeft onClick={() => setIsOpen(true)} className="lg:hidden text-2xl" />
                    <div className="flex items-center gap-3">
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <div className="lg:flex hidden flex-col">
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
                <div className="py-5 md:min-h-[calc(100vh-8rem)] min-h-[calc(100vh-5rem)]  text-white overflow-auto custom-scrollbar">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default UserDashboardLeftBar