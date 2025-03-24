import BottomBar from "../../Components/Dashboard/BottomBar"
import LeftBar from "../../Components/Dashboard/LeftBar"
import RightBar from "../../Components/Dashboard/RightBar"
import TopBar from "../../Components/Dashboard/TopBar"
import TradingViewWidget from "../../Components/Dashboard/TradingViewWidget"

const Platform = () => {
    return (
        <div>
            <div className="flex md:flex-row flex-col">
                <LeftBar />
                <TopBar />
                <div className="w-full relative">
                    <div className="bg-[#171022] md:block hidden py-3 rounded-lg border-[#403257] px-5 text-end absolute top-3 border right-5 text-white"><span className="text-[#c4c4ca] text-sm">PKR</span> 0.00</div>
                    <TradingViewWidget />
                    <BottomBar />
                </div>
                <RightBar />
            </div>
        </div>
    )
}

export default Platform