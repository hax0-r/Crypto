import { useState } from "react";
import { FiUser } from "react-icons/fi";
import { LuMoveUp } from "react-icons/lu";
import { FiLock } from "react-icons/fi";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "../ui/sheet"
import PaymentMethods from "./PaymentMethods";
import { Link } from "react-router";
import { Button } from "../ui/button";
import { RiRobot2Line } from "react-icons/ri";


const RightBar = () => {
    const [amount, setAmount] = useState(0);
    const [duration, setDuration] = useState(5);
    const [botOn, setBotOn] = useState<boolean>(false)

    const botEnable = false

    return (
        <>
            <div className="bg-[#171022] w-96 p-4 md:block hidden">
                <div className="flex items-center justify-between gap-5">
                    <Sheet>
                        <SheetTrigger className="bg-[#5f29b7] text-white px-16 py-3 rounded-lg cursor-pointer hover:opacity-80 transition-all duration-500">
                            Payment
                        </SheetTrigger>
                        <SheetContent>
                            <PaymentMethods />
                        </SheetContent>
                    </Sheet>

                    <Link to={"/user-dashboard"} className="w-12 h-12 hover:opacity-80 transition-all duration-500 cursor-pointer bg-[#5f29b760] flex items-center justify-center text-white rounded-full">
                        <FiUser className="text-2xl" />
                    </Link>
                </div>

                {/* Amount Section */}
                <div className="mt-7">
                    <label className="text-zinc-500 text-sm">Amount</label>
                    <input
                        type="number"
                        className="p-3 w-full mt-1 border border-[#3f2b5f] rounded-lg text-white "
                        placeholder="5,000"
                        value={amount}
                        onChange={(e) => setAmount(Number(e.target.value))}
                    />
                    <div className="flex items-center gap-2 mt-2">
                        <button
                            onClick={() => setAmount((prev) => prev - 50)}
                            className="bg-[#5f29b760] hover:opacity-80 transition-all duration-500 active:scale-95 w-full py-0.5 rounded-full text-2xl text-white cursor-pointer"
                        >
                            -
                        </button>
                        <button
                            onClick={() => setAmount((prev) => prev + 50)}
                            className="bg-[#5f29b760] hover:opacity-80 transition-all duration-500 active:scale-95 w-full py-0.5 rounded-full text-2xl text-white cursor-pointer"
                        >
                            +
                        </button>
                    </div>
                </div>

                {/* Duration Section */}
                <div className="mt-7">
                    <label className="text-zinc-500 text-sm">Duration</label>
                    <input
                        type="text"
                        className="p-3 w-full mt-1 border border-[#3f2b5f] rounded-lg text-white appearance-none"
                        value={`${duration} min`}
                        readOnly
                    />
                    <div className="flex items-center gap-2 mt-2">
                        <button
                            onClick={() => setDuration((prev) => Math.max(5, prev - 5))}
                            className="bg-[#5f29b760] hover:opacity-80 transition-all duration-500 active:scale-95 w-full py-0.5 rounded-full text-2xl text-white cursor-pointer"
                        >
                            -
                        </button>
                        <button
                            onClick={() => setDuration((prev) => prev + 5)}
                            className="bg-[#5f29b760] hover:opacity-80 transition-all duration-500 active:scale-95 w-full py-0.5 rounded-full text-2xl text-white cursor-pointer"
                        >
                            +
                        </button>
                    </div>
                </div>

                <div className="mt-7">
                    <label className="text-zinc-500 text-sm">Start Trade</label>

                    <div className="flex items-center gap-2 mt-2">
                        <button className="bg-green-600 flex items-center justify-center gap-2 text-white p-3 w-full rounded-lg cursor-pointer hover:opacity-80 transition-all duration-500">
                            Up <LuMoveUp />
                        </button>
                        <button className="bg-red-600 flex items-center justify-center gap-2 text-white p-3 w-full rounded-lg cursor-pointer hover:opacity-80 transition-all duration-500">
                            Down <LuMoveUp className="rotate-180" />
                        </button>
                    </div>

                    <div className={`relative mt-5 ${!botEnable && "overflow-hidden rounded-lg"} `}>
                        <Button onClick={() => setBotOn(!botOn)} size={"lg"} className={` ${botOn ? "bg-[#5726a8]" : "bg-transparent"}  ${botEnable ? "opacity-100" : "opacity-20"} active:translate-y-0.5  border   border-[#5726a8] w-full`}>
                            <RiRobot2Line />
                            Enable Bot
                        </Button>
                        {
                            !botEnable && (
                                <div className="w-full h-full cursor-not-allowed flex items-center justify-center bg-[#2c174f56] absolute top-0 left-0">
                                    <FiLock className="text-[#ffffffe3] text-2xl" />
                                </div>
                            )
                        }
                    </div>


                </div>
            </div>
        </>
    );
};

export default RightBar;
