import { useState } from "react";
import { FiUser } from "react-icons/fi";
import { LuMoveUp } from "react-icons/lu";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "../ui/sheet"
import PaymentMethods from "./PaymentMethods";

const RightBar = () => {
    const [amount, setAmount] = useState(0);
    const [duration, setDuration] = useState(5);

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

                    <div className="w-12 h-12 hover:opacity-80 transition-all duration-500 cursor-pointer bg-[#5f29b760] flex items-center justify-center text-white rounded-full">
                        <FiUser className="text-2xl" />
                    </div>
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
                </div>
            </div>
        </>
    );
};

export default RightBar;
