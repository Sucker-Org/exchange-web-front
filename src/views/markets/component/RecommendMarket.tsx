import React from "react";
import { Grid } from "@mui/material";
import hotIcon from "@/assets/images/markets/icon-hot.webp";
import upIcon from "@/assets/images/markets/icon-up.webp";
import downIcon from "@/assets/images/markets/icon-down.webp";
import { MARKET_RANK_URL } from "@/config";
import iconBtc from "@/assets/images/home/icon-btc.png";
import { MarketCard } from "./MarketCard";
import { MarketListItem } from "./MarketListItem";

export const RecommendMarket: React.FC = () => {
  const marketData = {
    hot: {
      cardIcon: hotIcon,
      title: "热门币种",
      data: [
        { coin: iconBtc, name: "BTC", price: "72000", volume: "50000", rate: 2.3 },
        { coin: iconBtc, name: "ETH", price: "72000", volume: "3000", rate: -1.1 },
        { coin: iconBtc, name: "BNB", price: "72000", volume: "500", rate: 0 }
      ]
    },
    up: {
      cardIcon: upIcon,
      title: "涨幅榜",
      data: [
        { coin: iconBtc, name: "HDC", price: "72000", volume: "100", rate: 5.3 },
        { coin: iconBtc, name: "ETH", price: "72000", volume: "3000", rate: 2.1 },
        { coin: iconBtc, name: "HIGH", price: "72000", volume: "0.5", rate: 1.1 }
      ]
    },
    down: {
      cardIcon: downIcon,
      title: "跌幅榜",
      data: [
        { coin: iconBtc, name: "ETC", price: "72000", volume: "100", rate: -5.3 },
        { coin: iconBtc, name: "DOGE", price: "72000", volume: "0.3", rate: -2.1 },
        { coin: iconBtc, name: "W", price: "72000", volume: "0.5", rate: -1.1 }
      ]
    }
  };
  return (
    <Grid container spacing={2}>
      {Object.entries(marketData).map(([key, { cardIcon, title }]) => (
        <MarketCard key={key} cardIcon={cardIcon} title={title} more={MARKET_RANK_URL}>
          {marketData[key].data.map((coinInfo, index) => (
            <MarketListItem key={index} keyNumber={index + 1} {...coinInfo} />
          ))}
        </MarketCard>
      ))}
    </Grid>
  );
};
