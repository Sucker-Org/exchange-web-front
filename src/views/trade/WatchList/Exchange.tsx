import React, { useState, useMemo } from "react";
import { Box, Card, Typography, Tab, List, ListItem, ListItemButton, styled } from "@mui/material";
import { ListTableHeader } from "../components/ListTableHeader";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { formatNumber } from "@/utils";
import CustomIcon from "@/components/CustomIcon";
import { LoginOrRegText } from "../components/LoginOrRegText";

export const Exchange = () => {
  const StyledListItem = styled(ListItem)`
    height: 20px;
    width: 100%;
    line-height: 20px;
    padding: 0 12px;
  `;
  const typographyStyle = {
    flex: "1 1",
    overflow: "hidden",
    textAlign: "right",
    color: "text.primary",
    textOverflow: "ellipsis"
  };

  const [tabIndex, setTabIndex] = useState("1");
  const handleChangeTab = (_event, newValue) => setTabIndex(newValue);

  const headers = useMemo(
    () => [
      { title: "价格(USDT)", align: "left" },
      { title: "数量(BTC)", align: "right" },
      { title: "时间", align: "right" }
    ],
    []
  );

  const data = useMemo(
    () => [
      { price: 123343.879, direction: "bid", amount: 123, time: "10:10:10" },
      { price: 123343, direction: "ask", amount: 123, time: "10:10:10" },
      { price: 123343, direction: "bid", amount: 123, time: "10:10:10" },
      { price: 123343, direction: "ask", amount: 13523, time: "10:10:10" },
      { price: 123343, direction: "ask", amount: 123, time: "10:10:10" },
      { price: 123343, direction: "ask", amount: 123, time: "10:10:10" },
      { price: 123343, direction: "ask", amount: 123, time: "10:10:10" },
      { price: 123343, direction: "ask", amount: 123, time: "10:10:10" },
      { price: 123343, direction: "bid", amount: 123, time: "10:10:10" },
      { price: 123343, direction: "bid", amount: 123, time: "10:10:10" },
      { price: 123343, direction: "bid", amount: 123, time: "10:10:10" },
      { price: 123343, direction: "bid", amount: 123, time: "10:10:10" },
      { price: 123343, direction: "bid", amount: 123, time: "10:10:10" },
      { price: 123343, direction: "bid", amount: 123, time: "10:10:10" },
      { price: 123343, direction: "ask", amount: 123, time: "10:10:10" },
      { price: 123343, direction: "bid", amount: 123, time: "10:10:10" },
      { price: 123343, direction: "bid", amount: 123, time: "10:10:10" },
      { price: 123343, direction: "ask", amount: 123, time: "10:10:10" },
      { price: 123343, direction: "bid", amount: 123, time: "10:10:10" },
      { price: 123343, direction: "ask", amount: 123, time: "10:10:10" },
      { price: 123343, direction: "bid", amount: 123, time: "10:10:10" },
      { price: 123343, direction: "bid", amount: 123, time: "10:10:10" }
    ],
    []
  );

  return (
    <Card variant="outlined" sx={{ borderRadius: 0, borderBottom: 0, borderLeft: 0, borderRight: 0 }}>
      <TabContext value={tabIndex}>
        <TabList
          onChange={handleChangeTab}
          aria-label="exchange tabs"
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
          <Tab label="最新成交" value="1" />
          <Tab label="我的成交" value="2" />
        </TabList>
        <ListTableHeader headers={headers} />
        <TabPanel value="1" sx={{ p: 0, height: 360, overflow: "auto" }}>
          <List>
            {data.map(({ price, direction, amount, time }, index) => (
              <StyledListItem key={`${price}-${amount}-${time}-${index}`}>
                <ListItemButton sx={{ p: 0, width: "100%" }}>
                  <Typography
                    variant="caption"
                    sx={{
                      ...typographyStyle,
                      textAlign: "left",
                      color: direction === "bid" ? "var(--rate-green)" : "var(--rate-red)"
                    }}
                  >
                    {formatNumber(price)}
                  </Typography>
                  <Typography variant="caption" sx={{ ...typographyStyle }}>
                    {formatNumber(amount)}
                  </Typography>
                  <Typography variant="caption" sx={{ ...typographyStyle }}>
                    {time}
                  </Typography>
                </ListItemButton>
              </StyledListItem>
            ))}
          </List>
        </TabPanel>
        <TabPanel value="2" sx={{ p: 0, height: 360, overflow: "auto" }}>
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
            <CustomIcon
              name="IconNodata"
              sx={{
                fontSize: "3rem",
                mb: 1
              }}
            />
            <Typography variant="body2" color="text.secondary">
              暂无数据
            </Typography>
          </Box>
        </TabPanel>
      </TabContext>
    </Card>
  );
};
