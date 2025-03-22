import LeftBar from "../../Components/Dashboard/LeftBar"
import RightBar from "../../Components/Dashboard/RightBar"
import TradingViewWidget from "../../Components/Dashboard/TradingViewWidget"

const Platform = () => {
    return (
        <div>
            <div className="flex">
                <LeftBar />
                <TradingViewWidget />
                <RightBar />
            </div>
        </div>
    )
}

export default Platform