import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import { LuMoveUp } from "react-icons/lu";
import { toast } from "react-toastify";

const BottomBar = () => {
    const [amount, setAmount] = useState(50);
    const [time, setTime] = useState(5); // Initial time is 5 seconds

    const handleIncreaseAmount = () => setAmount(amount + 50);
    const handleDecreaseAmount = () => {
        if (amount > 50) {
            setAmount(amount - 50);
        } else {
            toast.warning("You can't decrease below 50.");
        }
    };

    const handleAmountChange = (e: any) => {
        const value = parseInt(e.target.value, 10);
        if (!isNaN(value)) {
            setAmount(value);
        }
    };

    const handleIncreaseTime = () => {
        if (time < 45) {
            setTime(time + 5);
        } else {
            toast.warning("Maximum time is 45 seconds.");
        }
    };

    const handleDecreaseTime = () => {
        if (time > 5) {
            setTime(time - 5);
        } else {
            toast.warning("Minimum time is 5 seconds.");
        }
    };

    const handleUpClick = () => {
        if (amount < 250) {
            toast.warning("You cannot add and start trade less than 250.");
        } else {
            toast.warning("Trade started successfully!");
        }
    };

    return (
        <div className="bg-[#171022] p-4 md:hidden block">
            <div className="grid grid-cols-2 gap-4">
                {/* Amount */}
                <div>
                    <label className="text-sm text-[#9183a8]">Amount</label>
                    <div className="flex items-center justify-center mt-1 px-2 border-[#403257] border rounded-lg">
                        <button onClick={handleDecreaseAmount}>
                            <FiMinus className="text-[#9183a8] text-2xl" />
                        </button>
                        <input
                            type="text"
                            className="w-full rounded-lg p-2 text-white text-center bg-transparent"
                            value={amount}
                            onChange={handleAmountChange}
                        />
                        <button onClick={handleIncreaseAmount}>
                            <FiPlus className="text-[#9183a8] text-2xl" />
                        </button>
                    </div>
                </div>

                {/* Duration */}
                <div>
                    <label className="text-sm text-[#9183a8]">Duration</label>
                    <div className="flex items-center justify-center mt-1 px-2 border-[#403257] border rounded-lg">
                        <button onClick={handleDecreaseTime}>
                            <FiMinus className="text-[#9183a8] text-2xl" />
                        </button>
                        <input
                            type="text"
                            className="w-full rounded-lg p-2 text-white text-center bg-transparent"
                            value={`${time} sec`}
                            readOnly
                        />
                        <button onClick={handleIncreaseTime}>
                            <FiPlus className="text-[#9183a8] text-2xl" />
                        </button>
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex col-span-2 items-center gap-2">
                    <button
                        className="bg-green-600 flex items-center justify-center gap-2 text-white p-3 w-full rounded-lg cursor-pointer hover:opacity-80 transition-all duration-500"
                        onClick={handleUpClick}
                    >
                        Up <LuMoveUp />
                    </button>
                    <button className="bg-red-600 flex items-center justify-center gap-2 text-white p-3 w-full rounded-lg cursor-pointer hover:opacity-80 transition-all duration-500">
                        Down <LuMoveUp className="rotate-180" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BottomBar;
