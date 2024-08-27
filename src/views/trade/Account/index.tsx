import { Box, SxProps, Tab, Theme } from "@mui/material";
import TradeLayoutCard from "../components/TradeLayoutCard";
import { TabContext, TabList /* TabPanel */ } from "@mui/lab";
import { useEffect, useState } from "react";
import { LoginOrRegText } from "../components/LoginOrRegText";
interface AccountProps {
  sx?: SxProps<Theme>;
}
const Account: React.FC<AccountProps> = ({ sx }) => {
  const [tabIndex, setTabIndex] = useState("1");
  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setTabIndex(newValue);
  };

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);
  return (
    <TradeLayoutCard
      isLoading={loading}
      sx={{
        ...sx
      }}
    >
      <TabContext value={tabIndex}>
        <TabList
          onChange={handleChange}
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            minHeight: 32,
            mb: 1,
            "& .MuiButtonBase-root": { minHeight: 32 },
            "& .Mui-selected": { color: "text.primary" },
            "& .MuiTabs-indicator": { width: "20px !important", transform: "translateX(35px) !important" }
          }}
        >
          <Tab label="当前委托(0)" value="1" />
          <Tab label="历史委托" value="2" />
          <Tab label="历史成交" value="3" />
          <Tab label="资产" value="4" />
        </TabList>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100%"
          }}
        >
          <LoginOrRegText />
        </Box>
        {/* <TabPanel value="1">Item One</TabPanel>
        <TabPanel value="2">Item 2</TabPanel>
        <TabPanel value="3">Item 3</TabPanel>
        <TabPanel value="4">Item 4</TabPanel> */}
      </TabContext>
    </TradeLayoutCard>
  );
};
export default Account;
