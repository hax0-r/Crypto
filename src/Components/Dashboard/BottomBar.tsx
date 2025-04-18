import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import { toast } from "react-toastify";
import { RiRobot2Line } from "react-icons/ri";

const BottomBar = () => {
    const [amount, setAmount] = useState(50);
    const [time, setTime] = useState(5); // Initial time is 5 seconds

    const handleIncreaseAmount = () => setAmount(amount + 50);
    const handleDecreaseAmount = () => {
        if (amount > 50) {
            setAmount(amount - 50);
        } else {
            // this popup show only 3 at a time
            toast.warning("Minimum amount is 50.");
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

    const [botOn, setBotOn] = useState<boolean>(false)
    const botEnable = false

    const botHandler = () => {
        if (botEnable) {
            setBotOn(!botOn)
        }
    }

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
                        className="bg-[#5f29b7] hover:opacity-80 transition-all duration-500 active:scale-95 w-full py-3 rounded-lg  text-white cursor-pointer"
                    >
                        Start Trade
                    </button>
                    <div onClick={botHandler} className={`${botOn ? "bg-[#5726a8]" : "bg-transparent"} ${botEnable ? "opacity-100" : "opacity-40"} w-32 rounded-lg h-full flex items-center justify-center text-white border   border-[#5726a8] `}>
                        <RiRobot2Line className="text-2xl" />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BottomBar;
