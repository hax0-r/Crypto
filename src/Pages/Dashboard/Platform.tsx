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
                <TradingViewWidget />
                <RightBar />
            </div>
        </div>
    )
}

export default Platform