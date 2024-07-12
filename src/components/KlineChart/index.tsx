import React, { memo, useEffect, useRef } from "react";
import { KLineChartPro, DefaultDatafeed, ChartProOptions } from "@klinecharts/pro";
import "@klinecharts/pro/dist/klinecharts-pro.css";
import { useThemeStore } from "@/stores/modules/theme";

// TODO 使用基础的K线图、自定义数据源、自定义主题、自定义周期、自定义指标、自定义语言、自定义样式等功能
const KlineChart: React.FC = () => {
  const chartRef = useRef<HTMLDivElement>(null);
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const chartInstance = useRef<KLineChartPro | null>(null);
  const themeMode = useThemeStore();
  useEffect(() => {
    const initializeChart = () => {
      if (chartRef.current && chartContainerRef.current && !chartInstance.current) {
        chartContainerRef.current.innerHTML = "";
        const watermarkElement = document.createElement("div");
        watermarkElement.textContent = "HUIDU.XYZ";
        watermarkElement.style.position = "absolute";
        watermarkElement.style.bottom = "0";
        watermarkElement.style.left = "0";
        watermarkElement.style.transform = "translate(-50%, -50%)";
        watermarkElement.style.color = "rgba(255,255,255,0.1)";
        watermarkElement.style.fontSize = "48px";
        const options: ChartProOptions = {
          container: chartContainerRef.current as HTMLElement,
          symbol: {
            ticker: "BABA",
            exchange: "XNYS",
            market: "stocks",
            name: "FUCK World",
            shortName: "BABA",
            priceCurrency: "usd",
            pricePrecision: 2,
            type: "ADRC"
          },
          styles: {},
          watermark: watermarkElement,
          theme: themeMode.theme === "dark" ? "dark" : "light",
          drawingBarVisible: false,
          periods: [
            // { multiplier: 5, timespan: "minute", text: "5m" },
            { multiplier: 15, timespan: "minute", text: "15m" },
            { multiplier: 60, timespan: "minute", text: "1小时" },
            { multiplier: 1, timespan: "day", text: "1天" },
            { multiplier: 1, timespan: "week", text: "1周" },
            { multiplier: 1, timespan: "month", text: "1月" }
          ],
          period: { multiplier: 15, timespan: "minute", text: "15m" },
          // subIndicators: ["VOL", "MACD"],
          datafeed: new DefaultDatafeed(`IR3qS2VjZ7kIDgnlqKxSmCRHqyBaMh9q`)
        };
        chartInstance.current = new KLineChartPro(options);
      }
    };

    initializeChart();
    return () => {
      if (chartInstance.current) {
        chartInstance.current = null;
      }
    };
  }, [themeMode.theme]);

  return (
    <div ref={chartRef} style={{ width: "100%", height: "100%" }}>
      <div ref={chartContainerRef} style={{ width: "100%", height: "100%" }}></div>
    </div>
  );
};

export default memo(KlineChart);
