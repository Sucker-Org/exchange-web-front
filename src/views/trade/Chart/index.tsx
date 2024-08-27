import { Box, SxProps, Tab, Theme } from "@mui/material";

import TradeLayoutCard from "../components/TradeLayoutCard";
import { memo, useState } from "react";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import KlineChart from "@/components/KlineChart";
import { CoinInfo } from "./CoinInfo";
interface ChartProps {
  sx?: SxProps<Theme>;
}

const Chart: React.FC<ChartProps> = memo(({ sx }) => {
  const [tabIndex, setTabIndex] = useState("1");
  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setTabIndex(newValue);
  };
  return (
    <TradeLayoutCard isLoading={false} sx={{ display: "flex", flexDirection: "column", width: "100%", ...sx }}>
      <TabContext value={tabIndex}>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            height: "40px",
            "& .MuiTabs-root": { minHeight: "40px" },
            "& .MuiTab-root": { minHeight: "40px" }
          }}
        >
          <TabList onChange={handleChange} aria-label="kline" sx={{ height: "100%" }}>
            <Tab label="图表" value="1" />
            <Tab label="币种信息" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1" sx={{ p: 0, flex: 1 }}>
          <KlineChart />
        </TabPanel>
        <TabPanel value="2" sx={{ p: 0, flex: 1, my: 2, mx: 3, overflowY: "auto" }}>
          <CoinInfo coinName="BTC" />
        </TabPanel>
      </TabContext>
    </TradeLayoutCard>
  );
});
export default Chart;
