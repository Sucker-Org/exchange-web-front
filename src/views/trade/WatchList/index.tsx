import { Box, FormControl, OutlinedInput, InputAdornment, Tab, List, ListItem, Typography, ListItemButton } from "@mui/material";
import TradeLayoutCard from "../components/TradeLayoutCard";
import SearchIcon from "@mui/icons-material/Search";
import { Exchange } from "./Exchange";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import { RateText } from "@/components/RateText";
import { Favorite } from "@/components/Favorite";
import { formatNumber } from "@/utils";

const WatchList = ({ sx }) => {
  const typographyStyle = {
    flex: "1 1",
    overflow: "hidden",
    textAlign: "right",
    color: "text.primary",
    textOverflow: "ellipsis"
  };

  const [tabIndex, setTabIndex] = useState("2");
  const handleChangeTab = (_event, newValue) => setTabIndex(newValue);

  const favData = [
    { isFav: true, symbol: "BTC", unit: "USDT", price: 123343.879, rate: 0.123 },
    { isFav: true, symbol: "ETH", unit: "USDT", price: 123343.879, rate: 0.123 },
    { isFav: true, symbol: "BNB", unit: "USDT", price: 788.879, rate: 0.123 }
  ];
  const usdtData = [
    { isFav: true, symbol: "BTC", unit: "USDT", price: 123343.879, rate: 0.123 },
    { isFav: false, symbol: "ETH", unit: "USDT", price: 123343.879, rate: 0.123 },
    { isFav: false, symbol: "BNB", unit: "USDT", price: 788.879, rate: 0.123 },
    { isFav: false, symbol: "BTC", unit: "USDT", price: 123343.879, rate: 0.123 },
    { isFav: true, symbol: "ETH", unit: "USDT", price: 123343.879, rate: 0.123 },
    { isFav: false, symbol: "BNB", unit: "USDT", price: 788.879, rate: 0.123 },
    { isFav: false, symbol: "BTC", unit: "USDT", price: 123343.879, rate: 0.123 },
    { isFav: true, symbol: "ETH", unit: "USDT", price: 123343.879, rate: 0.123 },
    { isFav: false, symbol: "BNB", unit: "USDT", price: 788.879, rate: 0.123 },
    { isFav: false, symbol: "BTC", unit: "USDT", price: 123343.879, rate: 0.123 },
    { isFav: false, symbol: "ETH", unit: "USDT", price: 123343.879, rate: 0.123 },
    { isFav: false, symbol: "BNB", unit: "USDT", price: 788.879, rate: 0.123 },
    { isFav: false, symbol: "BTC", unit: "USDT", price: 123343.879, rate: 0.123 },
    { isFav: false, symbol: "ETH", unit: "USDT", price: 123343.879, rate: 0.123 },
    { isFav: false, symbol: "BNB", unit: "USDT", price: 788.879, rate: 0.123 },
    { isFav: false, symbol: "BTC", unit: "USDT", price: 123343.879, rate: 0.123 },
    { isFav: false, symbol: "ETH", unit: "USDT", price: 123343.879, rate: 0.123 },
    { isFav: false, symbol: "BNB", unit: "USDT", price: 788.879, rate: 0.123 },
    { isFav: false, symbol: "BTC", unit: "USDT", price: 123343.879, rate: 0.123 },
    { isFav: false, symbol: "ETH", unit: "USDT", price: 123343.879, rate: 0.123 },
    { isFav: false, symbol: "BNB", unit: "USDT", price: 788.879, rate: 0.123 }
  ];
  const cnhdData = [
    { isFav: true, symbol: "HDC", unit: "CNHD", price: 123343.879, rate: 0.123 },
    { isFav: false, symbol: "YCK", unit: "CNHD", price: 123343.879, rate: 0.123 },
    { isFav: false, symbol: "BNB", unit: "CNHD", price: 788.879, rate: 0.123 },
    { isFav: false, symbol: "BTC", unit: "CNHD", price: 123343.879, rate: 0.123 },
    { isFav: true, symbol: "ETH", unit: "CNHD", price: 123343.879, rate: 0.123 },
    { isFav: false, symbol: "BNB", unit: "CNHD", price: 788.879, rate: 0.123 },
    { isFav: false, symbol: "BTC", unit: "CNHD", price: 123343.879, rate: 0.123 },
    { isFav: true, symbol: "ETH", unit: "CNHD", price: 123343.879, rate: 0.123 },
    { isFav: false, symbol: "BNB", unit: "CNHD", price: 788.879, rate: 0.123 },
    { isFav: false, symbol: "BTC", unit: "CNHD", price: 123343.879, rate: 0.123 },
    { isFav: false, symbol: "ETH", unit: "CNHD", price: 123343.879, rate: 0.123 },
    { isFav: false, symbol: "BNB", unit: "CNHD", price: 788.879, rate: 0.123 },
    { isFav: false, symbol: "BTC", unit: "CNHD", price: 123343.879, rate: 0.123 },
    { isFav: false, symbol: "ETH", unit: "CNHD", price: 123343.879, rate: 0.123 },
    { isFav: false, symbol: "BNB", unit: "CNHD", price: 788.879, rate: 0.123 },
    { isFav: false, symbol: "BTC", unit: "CNHD", price: 123343.879, rate: 0.123 },
    { isFav: false, symbol: "ETH", unit: "CNHD", price: 123343.879, rate: 0.123 },
    { isFav: false, symbol: "BNB", unit: "CNHD", price: 788.879, rate: 0.123 },
    { isFav: false, symbol: "BTC", unit: "CNHD", price: 123343.879, rate: 0.123 },
    { isFav: false, symbol: "ETH", unit: "CNHD", price: 123343.879, rate: 0.123 },
    { isFav: false, symbol: "BNB", unit: "CNHD", price: 788.879, rate: 0.123 }
  ];
  return (
    <TradeLayoutCard isLoading={false} sx={{ ...sx }}>
      <Box sx={{ height: "100%", display: "grid", gridTemplateRows: "1fr 1fr", gridGap: 0 }}>
        <Box>
          <FormControl fullWidth sx={{ p: 1.5 }}>
            <OutlinedInput
              id="search-coin"
              sx={{
                height: 32,
                "& .MuiInputBase-input": {
                  p: 0
                }
              }}
              startAdornment={
                <InputAdornment position="start" sx={{ color: "text.secondary" }}>
                  <SearchIcon />
                </InputAdornment>
              }
            />
          </FormControl>
          <TabContext value={tabIndex}>
            <TabList
              onChange={handleChangeTab}
              sx={{
                borderBottom: "1px solid",
                borderColor: "divider",
                minHeight: 32,
                mb: 1,
                px: 1,
                "& .MuiButtonBase-root": { minHeight: 32 },
                "& .MuiTab-root": { minWidth: 0, padding: "0 0.3rem", fontSize: 12 },
                "& .Mui-selected": {
                  color: "text.primary",
                  "&:after": {
                    content: "''",
                    position: "absolute",
                    bottom: 0,
                    left: "50%",
                    width: "50%",
                    height: 3,
                    transform: "translateX(-50%)",
                    backgroundColor: "primary.main"
                  }
                },
                "& .MuiTabs-indicator": { display: "none" }
              }}
            >
              <Tab label={<StarIcon sx={{ fontSize: "1rem" }} />} value="1" />
              <Tab label="USDT" value="2" />
              <Tab label="CNHD" value="3" />
            </TabList>
            <Box
              component="div"
              sx={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gap: 0,
                px: 1.5,
                color: "text.secondary",
                textAlign: "right"
              }}
            >
              <Typography variant="caption" textAlign="left">
                交易对
              </Typography>
              <Typography variant="caption">价格</Typography>
              <Typography variant="caption">涨跌</Typography>
            </Box>

            <TabPanel sx={{ p: 0 }} value="1">
              <List sx={{ p: 0 }}>
                {favData.map(({ symbol, unit, price, rate, isFav }, index) => (
                  <ListItem key={index} sx={{ py: 0, px: 1 }}>
                    <ListItemButton
                      sx={{
                        p: 0,
                        "& .MuiTypography-root": {
                          lineHeight: "22px"
                        }
                      }}
                    >
                      <Typography variant="caption" sx={{ ...typographyStyle, textAlign: "left" }}>
                        <Favorite isFav={isFav} symbol={symbol} unit={unit} textFontSize="caption" />
                      </Typography>
                      <Typography variant="caption" sx={{ ...typographyStyle }}>
                        {formatNumber(price)}
                      </Typography>
                      <Typography variant="caption" sx={{ ...typographyStyle }}>
                        <RateText rate={rate} />
                      </Typography>
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </TabPanel>
            <TabPanel sx={{ p: 0, overflow: "auto", height: 300 }} value="2">
              <List sx={{ p: 0 }}>
                {usdtData.map(({ symbol, unit, price, rate, isFav }, index) => (
                  <ListItem key={index} sx={{ py: 0, px: 1 }}>
                    <ListItemButton
                      sx={{
                        p: 0,
                        "& .MuiTypography-root": {
                          lineHeight: "22px"
                        }
                      }}
                    >
                      <Typography variant="caption" sx={{ ...typographyStyle, textAlign: "left" }}>
                        <Favorite isFav={isFav} symbol={symbol} unit={unit} textFontSize="caption" />
                      </Typography>
                      <Typography variant="caption" sx={{ ...typographyStyle }}>
                        {formatNumber(price)}
                      </Typography>
                      <Typography variant="caption" sx={{ ...typographyStyle }}>
                        <RateText rate={rate} />
                      </Typography>
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </TabPanel>
            <TabPanel sx={{ p: 0, overflow: "auto", height: 300 }} value="3">
              <List sx={{ p: 0 }}>
                {cnhdData.map(({ symbol, unit, price, rate, isFav }, index) => (
                  <ListItem key={index} sx={{ py: 0, px: 1 }}>
                    <ListItemButton
                      sx={{
                        p: 0,
                        "& .MuiTypography-root": {
                          lineHeight: "22px"
                        }
                      }}
                    >
                      <Typography variant="caption" sx={{ ...typographyStyle, textAlign: "left" }}>
                        <Favorite isFav={isFav} symbol={symbol} unit={unit} textFontSize="caption" />
                      </Typography>
                      <Typography variant="caption" sx={{ ...typographyStyle }}>
                        {formatNumber(price)}
                      </Typography>
                      <Typography variant="caption" sx={{ ...typographyStyle }}>
                        <RateText rate={rate} />
                      </Typography>
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </TabPanel>
          </TabContext>
        </Box>

        <Exchange />
      </Box>
    </TradeLayoutCard>
  );
};

export default WatchList;
