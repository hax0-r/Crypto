import { useEffect, useRef, memo } from "react";

function TradingViewWidget() {
    const container = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
        script.type = "text/javascript";
        script.async = true;
        script.innerHTML = `
        {
          "autosize": true,  // ✅ This ensures full responsiveness
          "symbol": "NASDAQ:AAPL",
          "interval": "D",
          "timezone": "Etc/UTC",
          "theme": "dark",
          "style": "1",
          "locale": "en",
          "allow_symbol_change": true,
          "support_host": "https://www.tradingview.com"
        }`;

        if (container.current) {
            container.current.innerHTML = "";
            container.current.appendChild(script);
        }

        return () => {
            if (container.current) {
                container.current.innerHTML = "";
            }
        };
    }, []);

    return (
        <div
            className="tradingview-widget-container bg-black"
            ref={container}
            style={{
                width: "100%", // ✅ Full width of the viewport
                height: "100vh", // ✅ Full height of the viewport
                maxWidth: "100%",
                overflow: "hidden",
            }}
        >
            <div
                className="tradingview-widget-container__widget"
                style={{ width: "100%", height: "100%" }}
            ></div>
            <div className="tradingview-widget-copyright">
                <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
                    <span className="blue-text">Track all markets on TradingView</span>
                </a>
            </div>
        </div>
    );
}

export default memo(TradingViewWidget);
